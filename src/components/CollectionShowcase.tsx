"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const ALL_COLLECTIONS = [
  {
    id: "modern",
    title: "Modern",
    subtitle: "Rugs & Carpets",
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
    subtitle: "Rugs & Carpets",
    image: "/design-assets/traditional_generated.png",
    link: "/category/traditional",
  },
  {
    id: "dhurries",
    title: "Dhurries",
    subtitle: "Flat-Woven Rugs",
    image: "/design-assets/dhurries_generated.png",
    link: "/category/dhurries",
  },
  {
    id: "afghan",
    title: "Afghan Tribals",
    subtitle: "& Kilims",
    image: "/design-assets/afghan_generated.png",
    link: "/category/afghan",
  },
  {
    id: "silk",
    title: "Silk",
    subtitle: "Luxury Rugs",
    image: "/design-assets/silk_generated.png",
    link: "/category/silk",
  },
  {
    id: "wool",
    title: "Wool",
    subtitle: "Premium Rugs",
    image: "/design-assets/wool_generated.png",
    link: "/category/wool",
  },
];

export default function CollectionShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.fromTo(
        ".showcase-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
      
      // Grid items staggered animation
      gsap.fromTo(
        ".showcase-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
          },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-surface w-full overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Crisp & Compact Header Section */}
        <div className="flex flex-col items-center text-center showcase-header max-w-3xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-brand"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-brand">Our Collection</span>
            <div className="w-8 h-[1px] bg-brand"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary tracking-wide mb-6">
            Discover Exquisite <br className="hidden md:block"/> Handmade Carpets.
          </h2>
          
          <p className="text-primary/70 font-light text-sm md:text-base leading-relaxed">
            Elevate your home decor with our exclusive collection of handcrafted masterpieces. Explore our diverse range of luxury rugs, meticulously crafted by skilled artisans to add timeless elegance to your living space.
          </p>
        </div>
        
        {/* 2-Row Grid Layout (4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {ALL_COLLECTIONS.map((collection) => (
            <Link 
              href={collection.link}
              key={collection.id}
              className="showcase-card group flex flex-col w-full"
            >
              {/* Smaller, square image container */}
              <div className="relative w-full aspect-square overflow-hidden rounded-md shadow-sm border border-primary/5">
                <Image 
                  src={collection.image} 
                  alt={collection.title} 
                  fill 
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
              </div>
              
              {/* Content Row: Text Left, Button Right */}
              <div className="flex justify-between items-center mt-5 w-full">
                
                {/* Left Side: Title & Subtitle */}
                <div className="flex flex-col items-start text-left">
                  <h3 className="text-primary font-serif text-xl tracking-wide group-hover:text-brand transition-colors duration-300">
                    {collection.title}
                  </h3>
                  <h4 className="text-primary/60 font-serif text-sm italic">
                    {collection.subtitle}
                  </h4>
                </div>
                
                {/* Right Side: Shop Now Button */}
                <div className="btn-sweep-group inline-flex items-center justify-center border border-brand/30 text-brand px-4 py-2 uppercase tracking-[0.15em] text-[8px] font-bold group-hover:text-surface transition-colors duration-500">
                  Shop Now
                </div>
                
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
