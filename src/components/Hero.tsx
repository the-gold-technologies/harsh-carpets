"use client";
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

const JOURNEY_STEPS = [
  {
    id: 'wool',
    title: 'The Wool',
    subtitle: 'Sourcing the finest materials',
    heading: 'Three Generations\nof Legacy.',
    image: '/design-assets/slideone.png'
  },
  {
    id: 'dye',
    title: 'The Dye',
    subtitle: 'Colors born from nature',
    heading: 'Millions of\nHand-Tied Knots.',
    image: '/design-assets/slidetwo.png'
  },
  {
    id: 'loom',
    title: 'The Loom',
    subtitle: 'Months of dedicated craftsmanship',
    heading: 'Woven into\nEvery Thread.',
    image: '/design-assets/slidethree.png'
  },
  {
    id: 'home',
    title: 'The Home',
    subtitle: 'The final masterpiece in your space',
    heading: 'One\nMasterpiece.',
    image: '/design-assets/slidefour.png'
  }
];

export default function Hero() {
  const [activeStep, setActiveStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Auto-play slider
  useEffect(() => {
    // Prevent auto-play during initial animation or if actively animating
    if (!hasLoaded || isAnimating) return;

    const timer = setInterval(() => {
      const nextStep = (activeStep + 1) % JOURNEY_STEPS.length;
      handleStepChange(nextStep);
    }, 6000); // 6 seconds per slide

    return () => clearInterval(timer);
  }, [hasLoaded, activeStep, isAnimating]);

  // Initial Preloader Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setHasLoaded(true);
        }
      });
      
      // 1. Elements drift up and fade in
      tl.fromTo(".preloader-element", 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.5, stagger: 0.2, ease: "power2.out" }
      )
      // 2. Elements drift up and fade out
        .to(".preloader-element", { opacity: 0, y: -20, duration: 0.8, stagger: 0.1, ease: "power2.in", delay: 0.8 })
      // 3. Shop doors slide open
        .to(".preloader-left", { xPercent: -100, duration: 1.4, ease: "power3.inOut" }, "-=0.2")
        .to(".preloader-right", { xPercent: 100, duration: 1.4, ease: "power3.inOut" }, "-=1.4")
      // 4. Hero image subtly zooms out and reveals
      .fromTo(
        imageRef.current,
        { scale: 1.1, opacity: 0.5 },
        { scale: 1, opacity: 1, duration: 2.5, ease: "power3.out" },
        "-=1.0"
      )
      // 5. Text elements stagger in
      .fromTo(
        ".hero-content-elem",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
        "-=2.0"
      )
      // 6. Fade in indicators
      .fromTo(
        ".hero-indicator",
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 1, stagger: 0.1, ease: "power2.out" },
        "-=1.5"
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  const handleStepChange = (index: number) => {
    if (activeStep === index || isAnimating) return;
    
    setIsAnimating(true);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setActiveStep(index);
          // Next phase of animation
          gsap.fromTo(
            imageRef.current,
            { scale: 1.05, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
          );
          gsap.fromTo(
            ".dynamic-heading",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", onComplete: () => setIsAnimating(false) }
          );
        }
      });
      
      tl.to(imageRef.current, { opacity: 0, scale: 1.05, duration: 0.6, ease: "power2.in" })
        .to(".dynamic-heading", { y: -20, opacity: 0, duration: 0.4, ease: "power2.in" }, "-=0.6");
    }, heroRef);
  };

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden bg-[#0a0a0a]">
      
      {/* "Shop Open" Preloader Overlay */}
      <div className="preloader-left fixed top-0 left-0 w-1/2 h-screen bg-[#050505] z-[100] "></div>
      <div className="preloader-right fixed top-0 right-0 w-1/2 h-screen bg-[#050505] z-[100] "></div>
      <div className="preloader-logo-container fixed inset-0 z-[101] flex flex-col items-center justify-center pointer-events-none text-center">
        <div className="preloader-element relative w-[280px] md:w-[360px] h-[120px] mb-4 opacity-0">
          <Image 
            src="/design-assets/logo.png" 
            alt="Harsh Carpets Loading..." 
            fill 
            className="object-contain" 
            priority
          />
        </div>
        <div className="preloader-element opacity-0 overflow-hidden flex flex-col items-center">
          <h2 className="text-xl md:text-3xl font-serif tracking-widest text-surface">HARSH CARPETS</h2>
          <p className="text-[6px] md:text-[10px] mt-0.5 tracking-[0.4em] uppercase font-medium text-surface/80">Carpets As Diamond</p>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full">
            <Image
              ref={imageRef}
              src={JOURNEY_STEPS[activeStep].image}
              alt={JOURNEY_STEPS[activeStep].title}
              fill
              priority
              className="object-cover"
            />
        </div>
        {/* Soft, minimal gradients just enough for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#050505]/40 via-transparent to-transparent" />
      </div>
      
      {/* Main Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center">
        <div className="w-full max-w-[100rem] mx-auto px-6 md:px-12 lg:px-32">
          <div className="flex flex-col items-start w-full md:w-2/3 lg:w-1/2 mt-20 md:mt-0">
            <div className="flex items-center gap-4 mb-6 hero-content-elem">
               <span className="block text-surface/80 uppercase tracking-[0.3em] text-[10px] md:text-[11px]">
                 Authentic Heritage Rugs
               </span>
            </div>
            
            <h1 className="hero-content-elem dynamic-heading text-4xl md:text-6xl lg:text-7xl font-serif text-surface leading-[1.1] mb-10 tracking-wide drop-shadow-xl whitespace-pre-line">
              {JOURNEY_STEPS[activeStep].heading}
            </h1>
            
            <div className="hero-content-elem">
              <button className="btn-sweep cursor-pointer bg-surface text-brand border border-surface px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:border-brand hover:text-surface transition-colors duration-500 shadow-md shadow-black/20">
                Explore Collections
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Right-Side Progress Indicators */}
      <div className="absolute right-6 md:right-12 lg:right-32 bottom-16 md:bottom-1/2 md:translate-y-1/2 z-20 flex flex-col items-end gap-6 md:gap-8">
        {JOURNEY_STEPS.map((step, index) => (
          <button 
            key={step.id} 
            onClick={() => handleStepChange(index)}
            className="hero-indicator cursor-pointer flex items-center gap-6 group text-right focus:outline-none"
          >
            <div className={`hidden md:flex flex-col items-end transition-all duration-500 drop-shadow-xl ${
              activeStep === index 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
            }`}>
              <span className="text-surface font-serif text-xl tracking-wide" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{step.title}</span>
              <span className="text-surface/80 text-[9px] uppercase tracking-widest mt-1 font-medium" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{step.subtitle}</span>
            </div>
            
            {/* SVG Circle Progress Animation */}
            <div className="flex items-center justify-center w-8 h-8 relative">
              <span className={`absolute text-[10px] font-bold tracking-widest transition-colors duration-500 z-10 ${
                activeStep === index ? 'text-surface' : 'text-surface/80 group-hover:text-surface'
              }`} style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>
                0{index + 1}
              </span>
              
              <svg width="32" height="32" viewBox="0 0 32 32" className="absolute inset-0 -rotate-90">
                <circle 
                  cx="16" cy="16" r="14" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  className={`${activeStep === index ? 'text-surface/30' : 'text-transparent'}`} 
                />
                {activeStep === index && (
                  <circle 
                    cx="16" cy="16" r="14" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    className="text-brand-light animate-circle"
                    strokeDasharray="88"
                    strokeDashoffset="88"
                  />
                )}
              </svg>
            </div>
          </button>
        ))}
      </div>

      <style jsx>{`
        @keyframes circle-fill {
          0% { stroke-dashoffset: 88; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-circle {
          animation: circle-fill 6s linear forwards;
        }
      `}</style>
    </section>
  );
}
