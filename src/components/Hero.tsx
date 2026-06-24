"use client";
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        heroRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" }
      );
      
      gsap.fromTo(
        ".hero-text",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power3.out", delay: 0.6 }
      );
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end justify-start pb-20 md:pb-32">
      <div ref={heroRef} className="absolute inset-0 z-0">
        <Image
          src="/design-assets/weaver-hero.png"
          alt="Traditional Indian artisan hand-weaving a luxury rug"
          fill
          priority
          className="object-cover"
        />
        {/* Soft overlay so the image pops but text is readable at the bottom */}
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />
      </div>
      
      <div className="relative z-10 w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-32 flex justify-between items-end h-full">
        
        {/* Left Side: Balancing Element (Scroll & Socials) */}
        <div className="hidden md:flex flex-col items-start justify-end h-full pb-2 hero-text">
           <div className="flex items-center gap-4 origin-left -rotate-90 translate-y-20 mb-32">
             <div className="w-12 h-[1px] bg-surface/50"></div>
             <span className="text-[9px] uppercase tracking-[0.4em] text-surface/70 whitespace-nowrap">Scroll to Explore</span>
           </div>
           
           <div className="flex flex-col gap-6 text-surface/60">
              <a href="#" className="hover:text-surface transition-colors">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" className="hover:text-surface transition-colors">
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
              </a>
           </div>
        </div>

        {/* Right Side: Main Text Content */}
        <div className="text-right flex flex-col items-end w-full md:w-auto">
          <div className="flex items-center gap-4 mb-6 hero-text">
             <span className="block text-surface/90 uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-medium">
               Authentic Heritage Rugs
             </span>
          </div>
          
          <h1 className="hero-text text-4xl md:text-5xl lg:text-6xl font-serif text-surface leading-[1.1] mb-8 tracking-wide">
            The Soul of <br /> Indian Weaving.
          </h1>
          
          <div className="hero-text">
            <button className="cursor-pointer border border-surface/50 backdrop-blur-sm text-surface px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-medium hover:bg-surface hover:text-primary transition-colors duration-500">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
