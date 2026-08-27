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

export const FEATURES: FeatureItem[] = [
  {
    title: "Explore Ogun",
    description:
      "Discover remarkable places, their history, important visitor information and directions.",
    desktopImage: "/illustrations/desktop/explore-ogun.png",
    mobileImage: "/illustrations/mobile/explore-ogun.png",
  },
  {
    title: "ISEYAA Wallet",
    description: "Pay for experiences across Ogun from one secure, connected wallet.",
    desktopImage: "/illustrations/desktop/wallet.png",
    mobileImage: "/illustrations/mobile/wallet.png",
  },
  {
    title: "Marketplace",
    description:
      "Discover and shop art, Adire, crafts and creative pieces from Ogun’s growing creative community.",
    desktopImage: "/illustrations/desktop/marketplace.png",
    mobileImage: "/illustrations/mobile/marketplace.png",
  },
  {
    title: "Events & Ticketing",
    description: "Find the events you love, register and get your tickets all in one place.",
    desktopImage: "/illustrations/desktop/events-ticketing.png",
    mobileImage: "/illustrations/mobile/events-ticketing.png",
  },
  {
    title: "Accommodation",
    description: "Find and book hotels, staycations and memorable places to stay across the state.",
    desktopImage: "/illustrations/desktop/accommodation.png",
    mobileImage: "/illustrations/mobile/accommodation.png",
  },
  {
    title: "Creative Studio",
    description: "Record, create and produce from ISEYAA’s physical creative studio in Abeokuta.",
    desktopImage: "/illustrations/desktop/creative-studio.png",
    mobileImage: "/illustrations/mobile/creative-studio.png",
  },
];

export function Features() {
  return (
    <section id="experiences" className="relative bg-cream pb-28 pt-10 sm:pb-36 sm:pt-14">
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
        <div className="mt-14 flex flex-col gap-[18px] lg:hidden">
          {FEATURES.map((item, i) => (
            <Reveal key={item.title} variants={fadeUp} delay={(i % 3) * 0.06}>
              <div className="relative aspect-[345/220] w-full overflow-hidden">
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
