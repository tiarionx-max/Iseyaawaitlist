import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { fadeUp } from "@/lib/animations";

export function BrandStatement() {
  return (
    <section id="about" className="relative bg-cream pb-10 pt-28 sm:pb-14 sm:pt-36">
      <div className="container-iseyaa flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-xl text-center lg:max-w-none lg:flex-1 lg:text-left">
          <Reveal variants={fadeUp}>
            <h2 className="text-h2 font-semibold tracking-tight text-forest">
              Ogun has more to discover. We&rsquo;re making it easier to find.
            </h2>
          </Reveal>

          <Reveal variants={fadeUp} delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-[#001108] sm:text-lg">
              ISEYAA connects the experiences that make Ogun special, from
              places and culture to events, creativity and local commerce.
            </p>
          </Reveal>
        </div>

        <Reveal variants={fadeUp} delay={0.15} className="w-full lg:flex-1">
          <div className="relative aspect-[536/437] w-full max-w-[536px] overflow-hidden bg-cream-soft lg:ml-auto">
            <Image
              src="/images/abeokuta-station.png"
              alt="Professor Wole Soyinka Station in Abeokuta"
              fill
              sizes="(min-width: 1024px) 536px, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
