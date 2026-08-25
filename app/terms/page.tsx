import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
};

export default function TermsPage() {
  return (
    <main className="container-iseyaa min-h-[70svh] py-32 sm:py-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-h2 font-semibold tracking-tight text-ink">Terms of Use</h1>
        <p className="mt-6 text-base leading-relaxed text-ink-muted">
          ISEYAA is currently in early access. Full terms of use will be
          published ahead of public launch. By joining the waitlist, you
          agree to be contacted by ISEYAA about the product and its release.
        </p>
      </div>
    </main>
  );
}
