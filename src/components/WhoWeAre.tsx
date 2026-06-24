"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".heritage-content",
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
      
      gsap.fromTo(
        ".heritage-image",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-brand w-full overflow-hidden text-surface">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left Side: Image with dotted border */}
        <div className="w-full lg:w-1/2 relative heritage-image mt-8 lg:mt-0">
          {/* Dotted border background */}
          <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-[calc(100%+1.5rem)] h-[calc(100%+1.5rem)] md:w-[calc(100%+2rem)] md:h-[calc(100%+2rem)] border-[1.5px] border-dotted border-[#e2b85e] z-0"></div>
          
          <div className="relative z-10 w-full aspect-[4/3] shadow-2xl">
            <Image 
              src="/design-assets/heritage_showroom.png" 
              alt="Harsh Carpets Heritage" 
              fill 
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start heritage-content relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-[#e2b85e]"></div>
            <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-[#e2b85e]">[ HARSH CARPETS ]</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-8 text-surface tracking-wide">
            Our Heritage
          </h2>
          
          <div className="flex flex-col gap-6 text-surface/90 font-light text-sm leading-relaxed mb-10 max-w-xl">
            <p>
              Harsh Carpets is a family-owned business that has been creating beautiful, handmade carpets and rugs for over 40 years. We pride ourselves on our dedication to quality, craftsmanship, and customer service.
            </p>
            <p>
              We believe that a carpet is more than just a floor covering; it is a work of art that can add warmth, elegance, and personality to any room. That&apos;s why we work closely with our clients to understand their vision and help them select the perfect rug or carpet that suits their needs and style.
            </p>
            <p>
              At Harsh Carpets, we are committed to creating luxury carpets that will stand the test of time and bring beauty and warmth to your home for years to come.
            </p>
          </div>
          
          <button 
            className="btn-sweep cursor-pointer border border-surface text-surface px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-[#823333] transition-colors duration-500"
            style={{ '--sweep-color': 'var(--color-surface)' } as React.CSSProperties}
          >
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
