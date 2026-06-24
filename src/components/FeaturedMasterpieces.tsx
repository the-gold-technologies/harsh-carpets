"use client";
import Image from "next/image";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const masterpieces = [
  { id: 1, name: "The Royal Tabriz", desc: "Pure Silk Foundation", img: "/design-assets/rug-persian.png" },
  { id: 2, name: "Desert Mirage", desc: "Handspun Wool & Bamboo Silk", img: "/design-assets/texture.png" },
  { id: 3, name: "Midnight Oushak", desc: "Antique Wash Finish", img: "/design-assets/hero.png" },
  { id: 4, name: "Crimson Heritage", desc: "Intricate Knotting", img: "/design-assets/weaver-hero.png" },
];

export default function FeaturedMasterpieces() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Seamless infinite horizontal scroll
      // xPercent: -50 means it scrolls exactly half of the duplicated content width
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25, // Adjust speed here (lower is faster)
        repeat: -1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full bg-background overflow-hidden pb-12">
      <section ref={containerRef} className="w-full flex flex-col justify-center py-20">
        <div className="px-6 md:px-12 lg:px-24 mb-16 shrink-0">
          <h2 className="text-4xl md:text-5xl font-serif text-primary tracking-wide">Featured Masterpieces</h2>
          <p className="uppercase tracking-[0.2em] text-[10px] text-primary/60 mt-4">Discover our curated selection</p>
        </div>

        {/* The Marquee Wrapper */}
        <div className="flex items-center w-full overflow-visible">
          {/* We duplicate the entire set of items twice (total 8 items) to allow scrolling to exactly 50% seamlessly */}
          <div ref={marqueeRef} className="flex w-max space-x-6 px-3 h-[50vh] md:h-[60vh]">
            {[...masterpieces, ...masterpieces].map((item, index) => (
              <div key={`${item.id}-${index}`} className="masterpiece-item w-[80vw] md:w-[45vw] lg:w-[30vw] h-full relative shrink-0 group cursor-pointer">
                <div className="w-full h-full relative overflow-hidden">
                  <Image 
                    src={item.img} 
                    alt={item.name} 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/40 transition-colors duration-500" />
                </div>
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div>
                    <h3 className="font-serif text-3xl mb-2">{item.name}</h3>
                    <p className="text-[10px] tracking-widest uppercase">{item.desc}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-surface flex items-center justify-center">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
