// src/app/page.tsx
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Aboutus from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Home() {
  return (
    <div className="flex flex-col gap-3">
      <Hero />
      <LogoMarquee />
      <Aboutus />
      <Benefits />
      <ProductShowcase />
    </div>
  );
}
