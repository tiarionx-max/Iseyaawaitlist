import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <main className="container-iseyaa min-h-[70svh] py-32 sm:py-40">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-h2 font-semibold tracking-tight text-ink">Privacy Policy</h1>
        <p className="mt-6 text-base leading-relaxed text-ink-muted">
          ISEYAA is currently in early access. This page will be updated with
          our full privacy policy ahead of public launch. In the meantime, the
          only information we collect through this site is the email address
          you provide to join the waitlist, used solely to notify you about
          ISEYAA&rsquo;s launch and related updates.
        </p>
      </div>
    </main>
  );
}
