import { Hero } from "@/components/sections/Hero";
import { BrandStatement } from "@/components/sections/BrandStatement";
import { Features } from "@/components/sections/Features";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandStatement />
      <Features />
      <FinalCTA />
    </main>
  );
}
