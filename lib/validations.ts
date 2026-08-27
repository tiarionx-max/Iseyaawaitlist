import { z } from "zod";

export const waitlistSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Please tell us your name.")
    .max(120, "That name is too long."),
  email: z
    .string()
    .trim()
    .min(1, "That email doesn’t look quite right.")
    .max(254, "That email doesn’t look quite right.")
    .email("That email doesn’t look quite right."),
  source: z.string().max(64).optional(),
  referrer: z.string().max(512).optional(),
});

export type WaitlistInput = z.infer<typeof waitlistSchema>;
