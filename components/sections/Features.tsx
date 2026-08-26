import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { fadeUp } from "@/lib/animations";
import { FeaturesDesktop } from "@/components/sections/FeaturesDesktop";

export interface FeatureItem {
  title: string;
  description: string;
  /** Tall crop for the desktop sticky panel (ideally ~536x700). */
  desktopImage: string;
  /** Wide crop for the mobile stacked card (ideally ~345x220). */
  mobileImage: string;
}

// NOTE: desktop/mobile-specific crops aren't in the repo yet (expected at
// /illustrations/desktop/*.png and /illustrations/mobile/*.png — a tall
// ~536x700 portrait crop per item for the desktop sticky panel, and a wide
// ~345x220 crop for the mobile cards). Until those land, both breakpoints
// share the existing flat illustrations. Swap the paths below once the real
// crops are in place — nothing else needs to change.
export const FEATURES: FeatureItem[] = [
  {
    title: "Explore Ogun",
    description:
      "Discover remarkable places, their history, important visitor information and directions.",
    desktopImage: "/illustrations/explore-ogun.png",
    mobileImage: "/illustrations/explore-ogun.png",
  },
  {
    title: "ISEYAA Wallet",
    description: "Pay for experiences across Ogun from one secure, connected wallet.",
    desktopImage: "/illustrations/wallet.png",
    mobileImage: "/illustrations/wallet.png",
  },
  {
    title: "Marketplace",
    description:
      "Discover and shop art, Adire, crafts and creative pieces from Ogun’s growing creative community.",
    desktopImage: "/illustrations/marketplace.png",
    mobileImage: "/illustrations/marketplace.png",
  },
  {
    title: "Events & Ticketing",
    description: "Find the events you love, register and get your tickets all in one place.",
    desktopImage: "/illustrations/events-ticketing.png",
    mobileImage: "/illustrations/events-ticketing.png",
  },
  {
    title: "Accommodation",
    description: "Find and book hotels, staycations and memorable places to stay across the state.",
    desktopImage: "/illustrations/stay-in-ogun.png",
    mobileImage: "/illustrations/stay-in-ogun.png",
  },
  {
    title: "Creative Studio",
    description: "Record, create and produce from ISEYAA’s physical creative studio in Abeokuta.",
    desktopImage: "/illustrations/creative-studio.png",
    mobileImage: "/illustrations/creative-studio.png",
  },
];

export function Features() {
  return (
    <section id="experiences" className="relative bg-cream py-28 sm:py-36">
      <div className="container-iseyaa">
        <div className="max-w-xl">
          <Reveal variants={fadeUp}>
            <h2 className="text-h2 font-semibold tracking-tight text-ink">
              One platform. More ways to experience Ogun.
            </h2>
          </Reveal>
          <Reveal variants={fadeUp} delay={0.1}>
            <p className="mt-5 text-base leading-relaxed text-ink-muted sm:text-lg">
              Explore, pay, shop, attend, stay and create with ISEYAA
              connecting every experience along the way.
            </p>
          </Reveal>
        </div>

        {/* Desktop / large tablet: sticky image, scroll-linked highlight */}
        <div className="mt-16 hidden lg:block">
          <FeaturesDesktop items={FEATURES} />
        </div>

        {/* Mobile / tablet: simple stacked list, no scroll interaction */}
        <div className="mt-14 flex flex-col gap-16 lg:hidden">
          {FEATURES.map((item, i) => (
            <Reveal key={item.title} variants={fadeUp} delay={(i % 3) * 0.06}>
              <div className="relative aspect-[345/220] w-full overflow-hidden rounded-[1.5rem]">
                <Image
                  src={item.mobileImage}
                  alt={item.title}
                  fill
                  sizes="(min-width: 640px) 600px, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-h3 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
