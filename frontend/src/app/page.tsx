// src/app/page.tsx
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import Aboutus from "@/components/AboutUs";
import Benefits from "@/components/Benefits";
import ProductShowcase from "@/components/ProductShowcase";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import BlogSection from "@/components/BlogSection";
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
      <Testimonials />
      <ContactForm />
      <CTASection />
      <BlogSection />
    </div>
  );
}
