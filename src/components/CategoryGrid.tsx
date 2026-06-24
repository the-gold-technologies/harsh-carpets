"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CategoryGrid() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".collection-img",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
      
      gsap.fromTo(
        ".collection-text",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: 0.2,
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
    <section ref={containerRef} className="py-32 bg-background w-full">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24">
          <div className="collection-text">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-[1px] bg-secondary"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] font-medium text-primary/70">Curated Categories</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-primary tracking-wide">The Heritage <br/> Collection.</h2>
          </div>
          <Link href="/collections" className="cursor-pointer collection-text hidden md:inline-flex items-center justify-center border border-brand text-brand px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand hover:text-surface transition-all duration-500">
            View All Collections
          </Link>
        </div>
        
        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Main Large Item */}
          <Link href="/category/persian" className="collection-img lg:col-span-7 group block relative overflow-hidden h-[60vh] lg:h-[85vh]">
            <Image 
              src="/design-assets/rug-persian.png" 
              alt="Persian Rugs" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-700" />
            <div className="absolute bottom-10 left-10 text-surface">
              <h3 className="font-serif text-3xl md:text-5xl mb-2">Persian</h3>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">Explore Category</p>
            </div>
          </Link>

          {/* Right Column Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:gap-16 h-full">
            
            <Link href="/category/modern" className="collection-img group block relative overflow-hidden h-[40vh] lg:h-[40vh]">
              <Image 
                src="/design-assets/texture.png" 
                alt="Modern Rugs" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/30 transition-colors duration-700" />
              <div className="absolute bottom-8 left-8 text-primary group-hover:text-surface transition-colors duration-700">
                <h3 className="font-serif text-2xl md:text-3xl mb-2">Modern Handloom</h3>
                <p className="text-[9px] tracking-[0.2em] uppercase opacity-70">Explore Category</p>
              </div>
            </Link>

            <Link href="/category/transitional" className="collection-img group block relative overflow-hidden h-[40vh] lg:h-[40vh]">
              <Image 
                src="/design-assets/hero.png" 
                alt="Transitional Rugs" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-700" />
              <div className="absolute bottom-8 left-8 text-surface">
                <h3 className="font-serif text-2xl md:text-3xl mb-2">Transitional</h3>
                <p className="text-[9px] tracking-[0.2em] uppercase opacity-80">Explore Category</p>
              </div>
            </Link>

          </div>
        </div>
        
      </div>
    </section>
  );
}
