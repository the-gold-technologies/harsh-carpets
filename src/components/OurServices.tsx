"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function OurServices() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-header",
            start: "top 80%",
          },
        }
      );
      
      gsap.utils.toArray<HTMLElement>(".service-row").forEach((row, i) => {
        gsap.fromTo(
          row,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: row,
              start: "top 75%",
            },
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 bg-white w-full overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24 max-w-4xl mx-auto service-header">
          <span className="text-brand uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
            [ After-Sale Care ]
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary tracking-wide mb-8">
            Our Services
          </h2>
          <div className="w-16 h-[2px] bg-brand mb-8"></div>
          <p className="text-primary/70 font-light text-sm md:text-base leading-relaxed">
            We are a dedicated team of professionals committed to providing you with the highest quality carpets and exceptional customer service. Our goal is to make your carpet shopping experience as easy and enjoyable as possible. Here are some after-sale services that we offer.
          </p>
        </div>

        {/* Service 1: Rug Repair */}
        <div className="flex flex-col md:flex-row items-center mb-24 md:mb-32 relative service-row">
          <div className="w-full md:w-3/5 relative aspect-[16/10] overflow-hidden group">
            <Image 
              src="/design-assets/service_repair.png" 
              alt="Rug Repair" 
              fill 
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700 pointer-events-none" />
          </div>
          <div className="w-full md:w-2/5 relative z-10 bg-background p-10 lg:p-16 shadow-2xl shadow-black/5 md:-ml-24 mt-[-4rem] md:mt-0 border border-primary/5">
            <span className="text-brand/10 font-serif text-8xl absolute top-0 left-6 pointer-events-none">01</span>
            <h3 className="text-3xl lg:text-4xl font-serif text-primary mb-6 relative z-10">Rug Repair</h3>
            <p className="text-primary/70 font-light leading-relaxed mb-10 relative z-10">
              With our expert repair services, we will restore your luxury rugs to their original condition while making sure they remain comfortable.
            </p>
            <button className="btn-sweep cursor-pointer border border-brand text-brand px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-surface transition-colors duration-500 relative z-10">
              Learn More
            </button>
          </div>
        </div>

        {/* Service 2: Area Rug Cleaning */}
        <div className="flex flex-col md:flex-row-reverse items-center relative service-row">
          <div className="w-full md:w-3/5 relative aspect-[16/10] overflow-hidden group">
            <Image 
              src="/design-assets/service_cleaning.png" 
              alt="Area Rug Cleaning" 
              fill 
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-700 pointer-events-none" />
          </div>
          <div className="w-full md:w-2/5 relative z-10 bg-background p-10 lg:p-16 shadow-2xl shadow-black/5 md:-mr-24 mt-[-4rem] md:mt-0 border border-primary/5 flex flex-col md:items-end md:text-right">
            <span className="text-brand/10 font-serif text-8xl absolute top-0 right-6 pointer-events-none">02</span>
            <h3 className="text-3xl lg:text-4xl font-serif text-primary mb-6 relative z-10">Area Rug Cleaning</h3>
            <p className="text-primary/70 font-light leading-relaxed mb-10 relative z-10">
              Our premium rug cleaning service is the perfect solution for maintaining the look and feel of your handmade and modern luxury rugs.
            </p>
            <button className="btn-sweep cursor-pointer border border-brand text-brand px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-surface transition-colors duration-500 relative z-10">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
