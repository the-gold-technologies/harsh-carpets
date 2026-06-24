"use client";
import Image from "next/image";

export default function SplitEditorial() {
  return (
    <section className="w-full h-[50vh] md:h-[70vh] relative group overflow-hidden">
      <Image 
        src="/design-assets/splitSection.png" 
        alt="Artisan Display" 
        fill 
        className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-primary/20 transition-colors duration-1000 group-hover:bg-primary/40 mix-blend-multiply"></div>
      
      {/* Centered CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
         <button className="btn-sweep cursor-pointer bg-surface text-primary px-10 py-5 uppercase tracking-[0.2em] text-[10px] font-bold shadow-2xl hover:text-surface transition-colors duration-500 flex items-center gap-4">
           <span>Explore Collection</span>
           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
         </button>
      </div>
    </section>
  );
}
