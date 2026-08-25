"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { waitlistSchema, type WaitlistInput } from "@/lib/validations";
import type { WaitlistApiResponse, WaitlistStatus } from "@/types/waitlist";
import { EASE_EDITORIAL } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  source: string;
  className?: string;
  /** Caption/error text color context — the pill itself is always cream. */
  tone?: "dark" | "light";
  /** Idle-state microcopy shown under the field. Pass "" to hide it. */
  helperText?: string;
}

type FormValues = Pick<WaitlistInput, "email">;

export function WaitlistForm({
  source,
  className,
  tone = "dark",
  helperText = "Be among the first to experience ISEYAA.",
}: WaitlistFormProps) {
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const inputId = useId();
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(waitlistSchema.pick({ email: true })),
    mode: "onSubmit",
  });

  async function onSubmit(values: FormValues) {
    setStatus("loading");
    setMessage(null);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: values.email,
          source,
          referrer: typeof document !== "undefined" ? document.referrer || undefined : undefined,
        }),
      });

      const data = (await response.json()) as WaitlistApiResponse;

      if (data.status === "success") {
        setStatus("success");
      } else if (data.status === "duplicate") {
        setStatus("duplicate");
        setMessage(data.message);
      } else {
        setStatus("error");
        setMessage(data.message);
      }
    } catch {
      setStatus("error");
      setMessage("You appear to be offline. Check your connection and try again.");
    }
  }

  const isDone = status === "success";
  const transition = { duration: prefersReducedMotion ? 0 : 0.5, ease: EASE_EDITORIAL };

  return (
    <div className={cn("w-full", className)}>
      <div className="relative min-h-[3.75rem]">
        <AnimatePresence mode="wait" initial={false}>
          {isDone ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={transition}
              className="flex items-center gap-3 rounded-full bg-cream-soft px-5 py-3.5 shadow-[0_2px_16px_-4px_rgba(20,32,26,0.15)]"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="size-5 shrink-0 text-forest" aria-hidden="true" />
              <p className="text-sm font-medium text-ink sm:text-base">
                You’re in. Welcome to ISEYAA.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
              transition={transition}
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              className="flex items-center gap-1.5 rounded-full bg-cream-soft p-1.5 pl-5 shadow-[0_2px_16px_-4px_rgba(20,32,26,0.15)] focus-within:ring-2 focus-within:ring-yellow"
            >
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <input
                id={inputId}
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="Enter E-mail"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? `${inputId}-error` : undefined}
                className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-muted sm:text-base"
                {...register("email")}
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "inline-flex shrink-0 items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-cream-soft",
                  "transition-[background-color,transform] duration-200 ease-out active:scale-[0.98] disabled:opacity-70 sm:text-base",
                  "hover:bg-[#024322]"
                )}
              >
                {status === "loading" ? (
                  <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                ) : (
                  "Join the waitlist"
                )}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-3 min-h-[1.25rem] text-center text-sm" aria-live="polite">
        {errors.email && (
          <p id={`${inputId}-error`} className={tone === "dark" ? "text-orange" : "text-yellow"}>
            {errors.email.message}
          </p>
        )}
        {!errors.email && status === "duplicate" && (
          <p className={tone === "dark" ? "text-ink-muted" : "text-cream-soft/80"}>{message}</p>
        )}
        {!errors.email && status === "error" && (
          <p className={tone === "dark" ? "text-orange" : "text-yellow"}>{message}</p>
        )}
        {!errors.email && status === "idle" && helperText && (
          <p className={tone === "dark" ? "text-ink-muted" : "text-cream-soft/70"}>{helperText}</p>
        )}
      </div>
    </div>
  );
}
