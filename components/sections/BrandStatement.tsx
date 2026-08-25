import { Reveal } from "@/components/motion/Reveal";
import { AnimatedRoute } from "@/components/motion/AnimatedRoute";
import { AccentMark } from "@/components/ui/AccentMark";
import { fadeUp } from "@/lib/animations";

export function BrandStatement() {
  return (
    <section id="about" className="relative overflow-hidden bg-cream py-28 sm:py-36">
      <AnimatedRoute
        path="M -60 40 C 140 220, 260 -60, 480 60 C 640 145, 760 40, 900 90"
        viewBox="0 0 1000 260"
        className="absolute inset-x-0 top-1/2 h-[240px] w-[70%] -translate-y-1/2 opacity-90"
        strokeWidth={2.5}
      />
      <AnimatedRoute
        path="M 0 160 C 60 40, 140 -20, 220 80 C 280 155, 340 100, 400 60"
        viewBox="0 0 420 200"
        className="absolute right-0 top-1/2 h-[200px] w-[26%] -translate-y-1/2 opacity-90"
        strokeWidth={2.5}
        delay={0.2}
      />

      <AccentMark
        variant="leaf"
        className="absolute left-[6%] top-[18%] h-8 w-6 text-forest sm:h-10 sm:w-8"
      />
      <AccentMark
        variant="chevrons"
        className="absolute right-[6%] top-1/2 h-6 w-10 -translate-y-1/2 text-forest sm:h-7 sm:w-12"
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
        </div>
      </div>
    </section>
  );
}
