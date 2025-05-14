'use client';

import Image from 'next/image';
import Badge from '@/components/Badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';
import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [scrollDistance, setScrollDistance] = useState(0);

  const calculateScrollDistance = () => {
    const slider = sliderRef.current;
    if (!slider) return { totalWidth: 0, finalDistance: 0 };

    // Calculate the total scroll width without padding
    const totalWidth = slider.scrollWidth - slider.clientWidth;
    
    // Add a small buffer (20px) to ensure smooth transition
    const finalDistance = totalWidth + 20;
    setScrollDistance(finalDistance);

    return { totalWidth, finalDistance };
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const slider = sliderRef.current;
      if (!slider) return;

      const result = calculateScrollDistance();
      if (!result) return;

      const { totalWidth, finalDistance } = result;

      gsap.to(slider, {
        x: () => `-${totalWidth}px`,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          start: 'top top',
          end: () => `+=${finalDistance}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          pinSpacing: true,
        },
      });
    }, sectionRef);

    // Add resize handler
    const handleResize = () => {
      const result = calculateScrollDistance();
      if (!result) return;
      
      // Update ScrollTrigger
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const products = [
    {
      title: "Excel CoolCoat",
      description: "Reflects sunlight, reduces roof temperature by up to 20°C, and cuts cooling costs.",
      tag: "High SRI Cool Roof Coating",
      image: "/images/products/product-1.jpg",
    },
    {
      title: "Excel NanoSeal",
      description: "Waterproof protection with advanced nano-sealing technology.",
      tag: "High SRI Cool Roof Coating",
      image: "/images/products/product-2.jpg",
    },
    {
      title: "Excel StayCool",
      description: "High-performance coating that reduces energy costs.",
      tag: "High SRI Cool Roof Coating",
      image: "/images/products/product-3.jpg",
    },
    {
      title: "Excel StayCool",
      description: "High-performance coating that reduces energy costs.",
      tag: "High SRI Cool Roof Coating",
      image: "/images/products/product-3.jpg",
    },
    {
      title: "Excel StayCool",
      description: "High-performance coating that reduces energy costs.",
      tag: "High SRI Cool Roof Coating",
      image: "/images/products/product-3.jpg",
    },
  ];

  return (
    <section ref={sectionRef} className="bg-neutral-900 text-white rounded-2xl relative">
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 lg:gap-14 xl:gap-20 items-end px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
        {/* Left Section */}
        <div className="flex-1 flex flex-col gap-3">
          <Badge variant="yellow"> <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Our Products</Badge>
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-medium font-geist leading-tight w-full md:max-w-[500px]">
            Explore Our Advanced Nano Coatings
          </h4>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-[500px] gap-4">
          <p className="text-base md:text-lg text-gray-400">
            Choose the right solution for your surface from cool roofs to self-cleaning glass.
          </p>
          <PrimaryButton href="/products">Explore Products</PrimaryButton>
        </div>
      </div>

      <div className="relative w-full overflow-hidden px-4 pb-4 md:px-10 md:pb-10 lg:px-14 lg:pb-14 xl:px-20 xl:pb-20">
        <div 
          ref={sliderRef}
          className="flex gap-4 md:gap-6 lg:gap-8 xl:gap-10 pr-4 md:pr-6 lg:pr-8 xl:pr-10"
        >
          {products.map((product, index) => (
            <div 
              key={index} 
              className="flex flex-col bg-white text-black rounded-lg md:rounded-2xl gap-3 md:gap-4 lg:gap-6 xl:gap-8 p-4 md:p-6 lg:p-8 xl:p-10 shadow-md flex-none w-[85vw] sm:w-[70vw] md:w-[60vw] lg:w-[45vw] xl:w-[35vw] max-h-[90vh]"
            >
              <div className="flex flex-col gap-3 md:gap-4 lg:gap-6">
                <div className="flex flex-col gap-2 md:gap-3 lg:gap-4">
                  <Badge variant="yellow">{product.tag}</Badge>
                  <div className="flex flex-col gap-2">
                    <p className="text-xl md:text-2xl font-medium">{product.title}</p>
                    <p className="text-sm md:text-base text-gray-600">{product.description}</p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <PrimaryButton href="/products" className="w-full sm:w-auto">Learn More</PrimaryButton>
                  <SecondaryButton href="/products" className="w-full sm:w-auto">Buy Now</SecondaryButton>
                </div>
              </div>
              <div className="relative w-full h-[180px] md:h-[200px] lg:h-[220px] xl:h-[240px]">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div 
        style={{ height: `${scrollDistance}px` }} 
        className="opacity-0 pointer-events-none absolute inset-0"
      ></div>
    </section>
  );
}

