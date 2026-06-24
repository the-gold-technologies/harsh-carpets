"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      {/* 
      {showAnnouncement && (
        <div className="fixed top-0 w-full z-[60] bg-[#2a1719] text-surface/90 text-center py-2 px-6 text-[9px] md:text-[10px] tracking-[0.2em] uppercase font-medium flex justify-center items-center transition-transform duration-500 shadow-sm border-b border-white/5">
          <span>Complimentary global shipping on all orders over $5,000.</span>
          <button onClick={() => setShowAnnouncement(false)} className="absolute right-6 md:right-12 lg:right-32 hover:text-surface transition-colors focus:outline-none">
            <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      )}
      */}

      {/* Main Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 mt-0 ${isScrolled ? 'bg-surface/95 backdrop-blur-md py-4 shadow-sm' : 'bg-gradient-to-b from-primary/80 to-transparent pt-8 pb-12'}`}>
        <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-32 flex justify-between items-center w-full">
          {/* Left Navigation */}
          <div className="flex-1 flex justify-start">
            <div className="hidden md:flex space-x-12 text-xs tracking-[0.2em] uppercase font-medium">
              <Link href="/shop" className={`${isScrolled ? 'text-primary' : 'text-surface'} hover:text-secondary transition-colors`}>Shop</Link>
              <Link href="/collections" className={`${isScrolled ? 'text-primary' : 'text-surface'} hover:text-secondary transition-colors`}>Collections</Link>
            </div>
          </div>
          
          {/* Center Logo */}
          <Link href="/" className={`flex flex-col items-center justify-center text-center ${isScrolled ? 'text-primary' : 'text-surface'} group shrink-0`}>
            <span className="text-3xl md:text-[2rem] font-serif tracking-widest group-hover:opacity-80 transition-opacity">
              HARSH CARPETS
            </span>
            <span className={`text-[8px] md:text-[9.5px] mt-0 md:mt-1 tracking-[0.3em] uppercase font-medium ${isScrolled ? 'text-brand' : 'text-surface/80'} group-hover:opacity-80 transition-opacity`}>
              Carpets As Diamond
            </span>
          </Link>
          
          {/* Right Navigation */}
          <div className="flex-1 flex justify-end">
            <div className="hidden md:flex space-x-10 text-xs tracking-[0.2em] uppercase font-medium items-center">
              <Link href="/about" className={`${isScrolled ? 'text-primary' : 'text-surface'} hover:text-secondary transition-colors`}>Our Story</Link>
              <Link href="/contact" className={`${isScrolled ? 'text-primary' : 'text-surface'} hover:text-secondary transition-colors`}>Contact</Link>
              
              <div className={`h-4 w-[1px] ${isScrolled ? 'bg-primary/20' : 'bg-surface/20'}`}></div>
              
              <Link href="/wishlist" className={`relative flex items-center ${isScrolled ? 'text-primary' : 'text-surface'} hover:text-secondary transition-colors`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <span className="absolute -top-1.5 -right-2 bg-brand text-surface text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  1
                </span>
              </Link>
            </div>
            
            {/* Mobile Icons */}
            <div className="md:hidden flex items-center space-x-6">
               <Link href="/wishlist" className={`relative flex items-center ${isScrolled ? 'text-primary' : 'text-surface'}`}>
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                 <span className="absolute -top-1 -right-2 bg-brand text-surface text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">1</span>
               </Link>
               <button className={`${isScrolled ? 'text-primary' : 'text-surface'} focus:outline-none`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
               </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
