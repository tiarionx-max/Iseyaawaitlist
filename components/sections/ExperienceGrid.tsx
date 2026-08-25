import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/sections/ExperienceCard";
import {
  ExploreArt,
  WalletArt,
  MarketplaceArt,
  EventsArt,
  StayArt,
  StudioArt,
} from "@/components/sections/ExperienceArt";
import { fadeUp, scaleSettle } from "@/lib/animations";

const EXPERIENCES = [
  {
    title: "Explore Ogun",
    description:
      "Discover remarkable places, their history, important visitor information and directions.",
    art: <ExploreArt />,
    span: "lg:col-span-3",
    aspect: "aspect-[4/3]",
    variant: fadeUp,
  },
  {
    title: "ISEYAA Wallet",
    description: "Pay for experiences across Ogun from one secure, connected wallet.",
    art: <WalletArt />,
    span: "lg:col-span-3",
    aspect: "aspect-[4/3]",
    variant: scaleSettle,
  },
  {
    title: "Marketplace",
    description:
      "Discover and shop art, Adire, crafts and creative pieces from Ogun’s growing creative community.",
    art: <MarketplaceArt />,
    span: "lg:col-span-2",
    aspect: "aspect-[4/5]",
    variant: fadeUp,
  },
  {
    title: "Events & Ticketing",
    description: "Find the events you love, register and get your tickets all in one place.",
    art: <EventsArt />,
    span: "lg:col-span-2",
    aspect: "aspect-[4/5]",
    variant: scaleSettle,
  },
  {
    title: "Stay in Ogun",
    description: "Find and book hotels, staycations and memorable places to stay across the state.",
    art: <StayArt />,
    span: "lg:col-span-2",
    aspect: "aspect-[4/5]",
    variant: fadeUp,
  },
] as const;

export function ExperienceGrid() {
  return (
    <section id="experiences" className="relative bg-cream py-28 sm:py-36">
      <div className="container-iseyaa">
        <div className="mx-auto max-w-2xl text-center">
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

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-6 sm:mt-16">
          {EXPERIENCES.map((experience, i) => (
            <Reveal
              key={experience.title}
              variants={experience.variant}
              delay={(i % 3) * 0.08}
              className={`md:col-span-1 ${experience.span}`}
            >
              <ExperienceCard
                title={experience.title}
                description={experience.description}
                art={experience.art}
                aspect={experience.aspect}
                className="h-full"
              />
            </Reveal>
          ))}

          <Reveal
            variants={fadeUp}
            delay={0.16}
            className="md:col-span-2 lg:col-span-6"
          >
            <ExperienceCard
              title="Creative Studio"
              description="Record, create and produce from ISEYAA’s physical creative studio in Abeokuta."
              art={<StudioArt />}
              aspect="aspect-[4/3] sm:aspect-square"
              layout="split"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
