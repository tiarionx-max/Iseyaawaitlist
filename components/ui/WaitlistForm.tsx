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
}

type FormValues = Pick<WaitlistInput, "name" | "email">;

const inputClassName =
  "h-[60px] w-full rounded-[10px] border border-forest-deep/50 bg-cream px-6 text-sm text-ink outline-none placeholder:text-[#9ca19e] focus:ring-2 focus:ring-yellow";

export function WaitlistForm({ source, className }: WaitlistFormProps) {
  const [status, setStatus] = useState<WaitlistStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const nameId = useId();
  const emailId = useId();
  const prefersReducedMotion = useReducedMotion();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(waitlistSchema.pick({ name: true, email: true })),
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
          name: values.name,
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
  const fieldError = errors.name?.message ?? errors.email?.message;
  const transition = { duration: prefersReducedMotion ? 0 : 0.5, ease: EASE_EDITORIAL };

  return (
    <div className={cn("w-full rounded-[20px] bg-cream-soft p-7", className)}>
      <AnimatePresence mode="wait" initial={false}>
        {isDone ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="flex flex-col items-center gap-3 py-6 text-center"
            role="status"
            aria-live="polite"
          >
            <CheckCircle2 className="size-8 text-forest" aria-hidden="true" />
            <p className="text-base font-medium text-forest-deep">
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
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2.5">
              <label htmlFor={nameId} className="sr-only">
                Full Name
              </label>
              <input
                id={nameId}
                type="text"
                autoComplete="name"
                placeholder="Full Name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby={fieldError ? `${nameId}-error` : undefined}
                className={inputClassName}
                {...register("name")}
              />

              <label htmlFor={emailId} className="sr-only">
                Email address
              </label>
              <input
                id={emailId}
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="E-mail"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={fieldError ? `${nameId}-error` : undefined}
                className={inputClassName}
                {...register("email")}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="flex h-[60px] w-full items-center justify-center rounded-[10px] bg-forest-deep text-base font-medium text-white shadow-[inset_0_0_24px_0_rgba(255,247,231,0.1)] transition-[background-color,transform] duration-200 ease-out active:scale-[0.98] disabled:opacity-70"
            >
              {status === "loading" ? (
                <Loader2 className="size-5 animate-spin" aria-hidden="true" />
              ) : (
                "Join the waitlist"
              )}
            </button>

            <div className="min-h-[1rem] text-center text-xs" aria-live="polite">
              {fieldError && (
                <p id={`${nameId}-error`} className="text-orange">
                  {fieldError}
                </p>
              )}
              {!fieldError && status === "duplicate" && (
                <p className="text-forest-deep/70">{message}</p>
              )}
              {!fieldError && status === "error" && <p className="text-orange">{message}</p>}
              {!fieldError && status === "idle" && (
                <p className="text-forest-deep">
                  Be the first to know about Iseyaa when we launch
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
