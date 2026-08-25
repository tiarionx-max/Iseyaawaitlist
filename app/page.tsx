import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { ExperienceGrid } from "@/components/sections/ExperienceGrid";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStatement />
      <ExperienceGrid />
      <FinalCTA />
    </main>
  );
}
