"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    id: "modern",
    title: "Modern",
    subtitle: "Rugs",
    image: "/design-assets/modern_generated.png",
    link: "/category/modern",
  },
  {
    id: "transitional",
    title: "Transitional",
    subtitle: "Rugs",
    image: "/design-assets/transitional_generated.png",
    link: "/category/transitional",
  },
  {
    id: "traditional",
    title: "Traditional",
    subtitle: "Rugs",
    image: "/design-assets/traditional_generated.png",
    link: "/category/traditional",
  },
];

export default function CategoryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".collection-header",
        { x: -30, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
      
      gsap.fromTo(
        ".pillar-card",
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-12 md:py-16 bg-background w-full overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Split Layout Container */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          
          {/* Left: Header Section */}
          <div className="w-full lg:w-[25%] flex flex-col items-start collection-header">
            <div className="flex items-center gap-4 mb-4">
              <span className="uppercase tracking-[0.25em] text-[11px] font-semibold text-brand">Curated Categories</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-serif text-primary tracking-wide mb-4 leading-tight">
              Our Signature Styles.
            </h2>
            <p className="text-primary/70 font-light text-base lg:text-md leading-relaxed max-w-sm">
              Explore our three distinct categories of handmade luxury rugs, designed for every space.
            </p>
          </div>
          
          {/* Right: 3-Column Grid */}
          <div className="w-full lg:w-[75%] mt-8 lg:mt-0">
            {/* Mobile: Horizontal scroll snapping | Desktop: 3-column grid */}
            <div className="flex overflow-x-auto md:overflow-visible md:grid md:grid-cols-3 gap-6 md:gap-8 pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
              {CATEGORIES.map((category) => (
                <Link 
                  href={category.link}
                  key={category.id}
                  className="pillar-card group flex flex-col items-center text-center flex-none w-[65vw] sm:w-[40vw] md:w-auto snap-center"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden rounded-md mb-4 shadow-sm border border-primary/5">
                    <Image 
                      src={category.image} 
                      alt={category.title} 
                      fill 
                      className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Text Outside Image */}
                  <h3 className="text-primary font-serif text-2xl tracking-wide group-hover:text-brand transition-colors duration-300">
                    {category.title} {category.subtitle}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
