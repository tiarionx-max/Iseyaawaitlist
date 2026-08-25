import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { waitlistSchema } from "@/lib/validations";
import type { WaitlistApiResponse } from "@/types/waitlist";

export const runtime = "nodejs";

const MESSAGES = {
  invalid: "That email doesn’t look quite right.",
  duplicate: "You’re already on the list. We’ll see you soon.",
  success: "You’re in. Welcome to ISEYAA.",
  error: "Something went wrong. Try again in a moment.",
} as const;

function json(body: WaitlistApiResponse, init?: number) {
  return NextResponse.json(body, { status: init ?? 200 });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return json({ status: "error", message: MESSAGES.invalid }, 400);
  }

  const parsed = waitlistSchema.safeParse(payload);

  if (!parsed.success) {
    return json({ status: "error", message: MESSAGES.invalid }, 400);
  }

  const { email, source } = parsed.data;
  const referrer = parsed.data.referrer ?? request.headers.get("referer") ?? undefined;

  try {
    const supabase = getSupabaseServerClient();

    const { error } = await supabase.from("waitlist").insert({
      email: email.toLowerCase(),
      source: source ?? "site",
      referrer,
    });

    if (error) {
      // Postgres unique_violation
      if (error.code === "23505") {
        return json({ status: "duplicate", message: MESSAGES.duplicate }, 200);
      }

      console.error("[waitlist] supabase insert error", error);
      return json({ status: "error", message: MESSAGES.error }, 502);
    }

    return json({ status: "success", message: MESSAGES.success }, 201);
  } catch (err) {
    console.error("[waitlist] unexpected error", err);
    return json({ status: "error", message: MESSAGES.error }, 500);
  }
}
