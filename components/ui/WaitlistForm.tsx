"use client";

import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { waitlistSchema, type WaitlistInput } from "@/lib/validations";
import type { WaitlistApiResponse, WaitlistStatus } from "@/types/waitlist";
import { EASE_EDITORIAL } from "@/lib/animations";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface WaitlistFormProps {
  source: string;
  className?: string;
  /** Use on dark backgrounds (hero video, final CTA). */
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

  const isDark = tone === "dark";
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
              className={cn(
                "flex items-center gap-3 rounded-full border px-5 py-4",
                isDark
                  ? "border-yellow/40 bg-white/5 text-cream-soft"
                  : "border-forest/20 bg-forest/5 text-forest"
              )}
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="size-5 shrink-0 text-yellow" aria-hidden="true" />
              <p className="text-sm font-medium sm:text-base">
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
              className="flex flex-col gap-3 sm:flex-row"
            >
              <div className="flex-1">
                <label htmlFor={inputId} className="sr-only">
                  Email address
                </label>
                <input
                  id={inputId}
                  type="email"
                  autoComplete="email"
                  inputMode="email"
                  placeholder="Enter your email"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? `${inputId}-error` : undefined}
                  className={cn(
                    "w-full rounded-full border px-5 py-4 text-sm outline-none transition-colors duration-200 sm:text-base",
                    isDark
                      ? "border-white/20 bg-white/10 text-cream-soft placeholder:text-cream-soft/50 focus:border-yellow"
                      : "border-ink/15 bg-white text-ink placeholder:text-ink-muted focus:border-forest"
                  )}
                  {...register("email")}
                />
              </div>
              <Button
                type="submit"
                variant="accent"
                loading={status === "loading"}
                arrow
                className="shrink-0"
              >
                Join the waitlist
              </Button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-3 min-h-[1.25rem] text-sm" aria-live="polite">
        {errors.email && (
          <p id={`${inputId}-error`} className={cn(isDark ? "text-yellow" : "text-orange")}>
            {errors.email.message}
          </p>
        )}
        {!errors.email && status === "duplicate" && (
          <p className={isDark ? "text-cream-soft/80" : "text-ink-muted"}>{message}</p>
        )}
        {!errors.email && status === "error" && (
          <p className={isDark ? "text-yellow" : "text-orange"}>{message}</p>
        )}
        {!errors.email && status === "idle" && helperText && (
          <p className={isDark ? "text-cream-soft/60" : "text-ink-muted"}>{helperText}</p>
        )}
      </div>
    </div>
  );
}
