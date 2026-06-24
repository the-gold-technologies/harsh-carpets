"use client";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const ARRIVALS = [
  { id: 1, name: "Ardbill Wool Oriental Rug", category: "Traditional Rugs & Carpets", price: "175,000.00₹", img: "/design-assets/traditional_generated.png" },
  { id: 2, name: "Medalian Kashan Wool Rug", category: "Traditional Rugs & Carpets", price: "250,000.00₹", outOfStock: true, img: "/design-assets/transitional_generated.png" },
  { id: 3, name: "Bizarr-e-Traditional Rug", category: "Traditional Rugs & Carpets", price: "138,000.00₹", img: "/design-assets/afghan_generated.png" },
  { id: 4, name: "Modern Patch Rug", category: "Modern Rugs & Carpets", price: "60,000.00₹", img: "/design-assets/modern_generated.png" },
  { id: 5, name: "Hairaite All over Wool Rug", category: "Traditional Rugs & Carpets", price: "160,000.00₹", img: "/design-assets/wool_generated.png" },
  { id: 6, name: "Diamond Kashan Wool Rug", category: "Traditional Rugs & Carpets", price: "117,000.00₹", img: "/design-assets/silk_generated.png" },
  { id: 7, name: "All Over Kashan Wool Rug", category: "Traditional Rugs & Carpets", price: "125,000.00₹", img: "/design-assets/dhurries_generated.png" },
  { id: 8, name: "Diamond Kirman Wool Rug", category: "Transitional Rugs", price: "90,000.00₹", img: "/design-assets/rug-persian.png" },
];

export default function NewArrivals() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [popAnimationId, setPopAnimationId] = useState<number | null>(null);

  const toggleWishlist = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
        // Trigger the big center heart animation
        setPopAnimationId(id);
        setTimeout(() => {
          setPopAnimationId((current) => current === id ? null : current);
        }, 800); // 0.8s matches the CSS animation duration
      }
      return newSet;
    });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".arrival-header",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );
      
      gsap.fromTo(
        ".arrival-card",
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
    <section ref={containerRef} className="py-20 md:py-28 bg-white w-full overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 arrival-header">
          <div className="max-w-2xl">
            <span className="text-brand uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Latest Curations</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary tracking-wide mb-6">New Arrivals</h2>
            <p className="text-primary/70 font-light text-sm leading-relaxed">
              Our new arrivals for Best Luxury Handmade Rugs and carpets are sure to impress. Here you will find our latest and greatest selection of high-quality, stylish carpets and rugs to enhance any room in your home.
            </p>
          </div>
          <Link href="/shop" className="btn-sweep cursor-pointer flex items-center justify-center border border-brand text-brand px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-surface transition-colors duration-500 shrink-0">
            View All Arrivals
          </Link>
        </div>

        {/* 2-Row Grid Layout (4 columns on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {ARRIVALS.map((item) => (
            <Link 
              href={`/product/${item.id}`}
              key={item.id}
              className="arrival-card group flex flex-col w-full"
            >
              {/* Product Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden rounded-md shadow-sm border border-primary/5 mb-6 bg-surface">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                />
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                
                {/* Wishlist Icon Overlay */}
                <div 
                  className="absolute top-4 right-4 bg-surface/90 backdrop-blur-sm p-2 rounded-full shadow-sm z-10 cursor-pointer transition-all duration-300 group-hover:scale-110"
                  onClick={(e) => toggleWishlist(e, item.id)}
                >
                  <svg 
                    width="18" height="18" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className={`transition-colors duration-300 ${likedItems.has(item.id) ? "fill-brand stroke-brand animate-heart-bounce" : "fill-none stroke-primary/60 hover:stroke-brand"}`}
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>

                {/* Big Center Popup Heart (Instagram Style) */}
                {popAnimationId === item.id && (
                  <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-2xl opacity-90 animate-insta-pop">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                )}

                {/* Out of Stock Label */}
                {item.outOfStock && (
                  <div className="absolute bottom-0 left-0 right-0 bg-surface/95 backdrop-blur-md text-center py-2.5 text-primary font-bold text-[10px] tracking-[0.2em] uppercase shadow-[0_-4px_10px_rgba(0,0,0,0.05)] border-t border-primary/10">
                    Out of Stock
                  </div>
                )}
              </div>
              
              {/* Product Details Row */}
              <div className="flex flex-col items-center text-center w-full">
                <p className="text-primary/50 font-serif text-[11px] italic tracking-wider mb-2">
                  {item.category}
                </p>
                <h3 className="text-primary font-serif text-lg tracking-wide group-hover:text-brand transition-colors duration-300 mb-2">
                  {item.name}
                </h3>
                <p className="text-[12px] font-bold text-primary tracking-widest">
                  {item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
        
      </div>
    </section>
  );
}
