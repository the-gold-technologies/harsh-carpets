"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function BrandVideo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".video-header",
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
        ".video-wrapper",
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
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
    <section ref={containerRef} className="py-24 md:py-32 bg-white w-full overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-24">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto video-header">
          <span className="text-brand uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
            [ Discover Our Craft ]
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary tracking-wide mb-8">
            The Story Behind the Knots
          </h2>
          <div className="w-16 h-[2px] bg-brand mx-auto"></div>
        </div>

        {/* Video Embed */}
        <div className="video-wrapper w-full relative aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-primary/5">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/dULP_YIS95I?rel=0&modestbranding=1&color=white" 
            title="Harsh Carpets Video"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}
