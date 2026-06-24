"use client";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Craftsmanship() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect on the background image
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Fade in the text block
      gsap.fromTo(
        ".craft-content",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".craft-content",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 md:py-32 bg-primary overflow-hidden">
      
      {/* Massive Parallax Background */}
      <div className="absolute inset-0 w-full h-[120%] -top-[10%] z-0" ref={imageRef}>
        <Image
          src="/design-assets/wool-dyeing.png"
          alt="Traditional wool dyeing process"
          fill
          className="object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/30" />
      </div>

      <div className="relative z-10 max-w-[90rem] mx-auto px-6 md:px-12 lg:px-24 flex justify-end">
        
        {/* Overlapping Content Block */}
        <div className="craft-content w-full lg:w-[40%] bg-surface p-8 md:p-14 shadow-2xl">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-secondary"></div>
            <span className="uppercase tracking-[0.3em] text-[10px] font-medium text-primary/60">Our Heritage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6 leading-tight tracking-wide">
            The Artisan's <br /> Touch.
          </h2>
          
          <p className="text-primary/70 leading-relaxed mb-8 text-sm md:text-[15px] font-light">
            Every knot tells a story of generations. Our master weavers in the heart of India dedicate months, sometimes years, to crafting a single masterpiece. From hand-spinning the finest wool and silk to the painstaking natural dyeing process, we preserve the soul of traditional carpet making.
          </p>
          
          <button className="btn-sweep cursor-pointer bg-transparent border border-brand text-brand px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-surface transition-colors duration-500">
            Watch the Process
          </button>
        </div>

      </div>
    </section>
  );
}
