"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-16 md:py-24 bg-[#faf9f8] w-full border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* Simple Single Image */}
        <div className="w-full md:w-1/3 aspect-square relative shadow-lg">
          <Image 
            src="/design-assets/texture.png" 
            alt="Harsh Carpets Heritage" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Compact Text */}
        <div className="w-full md:w-2/3">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-6 h-[1px] bg-brand"></div>
            <span className="uppercase tracking-[0.3em] text-[9px] font-bold text-brand">Who We Are</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4 leading-snug">
            Weavers of legacy. <br className="hidden md:block" /> Curators of luxury.
          </h2>
          
          <p className="text-primary/70 text-xs md:text-sm font-light mb-8 max-w-xl leading-relaxed">
            For over three generations, Harsh Carpets has stood as a guardian of the ancient Indian hand-knotting tradition, commissioning timeless pieces of floor art that bridge the gap between historical craftsmanship and contemporary design.
          </p>
          
          <button className="btn-sweep cursor-pointer border border-brand text-brand px-6 py-3 uppercase tracking-[0.2em] text-[9px] font-bold hover:text-surface transition-colors duration-500">
            Read Our Story
          </button>
        </div>

      </div>
    </section>
  );
}
