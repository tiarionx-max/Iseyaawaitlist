import { Reveal } from "@/components/motion/Reveal";
import { AnimatedRoute } from "@/components/motion/AnimatedRoute";
import { fadeUp } from "@/lib/animations";

export function BrandStatement() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-28 sm:py-36">
      <AnimatedRoute
        path="M -40 260 C 220 340, 420 40, 700 140 C 960 230, 1140 60, 1480 130"
        viewBox="0 0 1400 360"
        className="absolute inset-x-0 top-1/2 h-[220px] w-full -translate-y-1/2 opacity-70"
        strokeWidth={2.5}
      />

      <div className="container-iseyaa relative">
        <div className="mx-auto max-w-3xl text-center lg:max-w-4xl">
          <Reveal variants={fadeUp}>
            <h2 className="text-h2 font-semibold tracking-tight text-ink">
              Ogun has more to discover.
              <br />
              We&rsquo;re making it easier to find.
            </h2>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg">
              ISEYAA connects the experiences that make Ogun special — from
              places and culture to events, creativity and local commerce.
            </p>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.2}>
            <p className="mt-10 text-eyebrow font-semibold uppercase text-forest">
              Everything Connects.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
