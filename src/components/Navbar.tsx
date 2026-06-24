"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper for Focus effect classes
  const getLinkClasses = (menuName: string) => {
    const baseClasses = `relative py-2 transition-all duration-500 ease-out group flex flex-col opacity-100`;
    return baseClasses;
  };

  const isActive = isScrolled || hoveredMenu !== null;
  const textClasses = isActive ? 'text-primary' : 'text-surface';

  return (
    <>
      {/* Main Navbar: Dynamic Background with Static Text */}
      <nav 
        className="fixed z-50 top-0 left-0 right-0 w-full"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        {/* Animated Background Layer */}
        <div 
          className={`absolute transition-all duration-700 ease-in-out mx-auto z-0 ${
            isActive 
              ? 'top-4 left-4 right-4 md:left-12 md:right-12 lg:left-24 lg:right-24 max-w-[90rem] h-[72px] rounded-md bg-surface shadow-xl border border-primary/5' 
              : 'top-0 left-0 right-0 max-w-full h-[120px] rounded-none bg-gradient-to-b from-primary/80 to-transparent border-transparent shadow-none'
          }`}
        ></div>

        {/* Static Text Container */}
        <div className="relative z-10 max-w-[100rem] mx-auto px-6 md:px-12 lg:px-32 flex justify-between items-center w-full h-[104px]">
          
          {/* Left Navigation */}
          <div className="flex-1 flex justify-start">
            <div className={`hidden md:flex space-x-12 text-[10px] tracking-[0.25em] uppercase font-medium transition-opacity duration-300 opacity-100`}>
              <div 
                className={getLinkClasses('shop')}
                onMouseEnter={() => setHoveredMenu('shop')}
              >
                <Link href="/shop" className={`${textClasses} hover:text-brand transition-colors`}>Shop</Link>
                <div className={`absolute bottom-0 left-0 h-[1px] bg-brand transition-all duration-500 ease-out ${hoveredMenu === 'shop' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </div>
              <div 
                className={getLinkClasses('collections')}
                onMouseEnter={() => setHoveredMenu('collections')}
              >
                <Link href="/collections" className={`${textClasses} hover:text-brand transition-colors`}>Collections</Link>
                <div className={`absolute bottom-0 left-0 h-[1px] bg-brand transition-all duration-500 ease-out ${hoveredMenu === 'collections' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </div>
              <div 
                className={getLinkClasses('size')}
                onMouseEnter={() => setHoveredMenu('size')}
              >
                <Link href="/size-guide" className={`${textClasses} hover:text-brand transition-colors`}>Size Guide</Link>
                <div className={`absolute bottom-0 left-0 h-[1px] bg-brand transition-all duration-500 ease-out ${hoveredMenu === 'size' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </div>
            </div>
          </div>
          
          {/* Center Logo */}
          <Link href="/" onMouseEnter={() => setHoveredMenu(null)} className={`flex flex-col items-center justify-center text-center ${textClasses} group shrink-0 z-10 transition-all duration-500 opacity-100`}>
            <span className={`text-xl md:text-2xl font-serif tracking-widest group-hover:opacity-80 transition-all duration-700 ${isActive ? 'text-brand  font-medium' : 'text-surface'}`}>
              HARSH CARPETS
            </span>
            <span className={`text-[6px] md:text-[8px] mt-0.5 tracking-[0.4em] uppercase font-medium group-hover:opacity-80 transition-all duration-700 ${isActive ? 'text-brand' : 'text-surface/80'}`}>
              Carpets As Diamond
            </span>
          </Link>
          
          {/* Right Navigation */}
          <div className="flex-1 flex justify-end">
            <div className={`hidden md:flex space-x-8 lg:space-x-10 text-[10px] tracking-[0.25em] uppercase font-medium items-center transition-opacity duration-300 opacity-100 relative`}>
              
              <div className={getLinkClasses('about')} onMouseEnter={() => setHoveredMenu('about')}>
                 <Link href="/about" className={`${textClasses} hover:text-brand transition-colors`}>Our Story</Link>
                 <div className={`absolute bottom-0 left-0 h-[1px] bg-brand transition-all duration-500 ease-out ${hoveredMenu === 'about' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </div>
              
              <div className={getLinkClasses('contact')} onMouseEnter={() => setHoveredMenu('contact')}>
                 <Link href="/contact" className={`${textClasses} hover:text-brand transition-colors`}>Contact</Link>
                 <div className={`absolute bottom-0 left-0 h-[1px] bg-brand transition-all duration-500 ease-out ${hoveredMenu === 'contact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </div>
              
              <div className={`h-4 w-[1px] transition-all duration-500 ${isScrolled || hoveredMenu ? 'bg-primary/20' : 'bg-surface/20'}`}></div>
              
              <div className={getLinkClasses('search')} onMouseEnter={() => setHoveredMenu('search')}>
                <button className={`${textClasses} hover:text-brand transition-all duration-500 focus:outline-none`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <div className={`absolute bottom-0 left-0 h-[1px] bg-brand transition-all duration-500 ease-out ${hoveredMenu === 'search' ? 'w-full' : 'w-0 group-hover:w-full'}`}></div>
              </div>
              
              <Link href="/wishlist" onMouseEnter={() => setHoveredMenu(null)} className={`relative flex items-center ${textClasses} hover:text-brand-light transition-all duration-500 opacity-100`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                <span className="absolute -top-1.5 -right-2 bg-brand text-surface text-[8px] font-bold w-3.5 h-3.5 flex items-center justify-center rounded-full">
                  1
                </span>
              </Link>
            </div>


          </div>
        </div>

        {/* Mega Menu Dropdowns with Staggered Reveal */}
        <div 
          className={`absolute transition-all duration-700 ease-in-out mx-auto ${
            isActive ? 'top-[88px] left-4 right-4 md:left-12 md:right-12 lg:left-24 lg:right-24 max-w-[90rem]' : 'top-[104px] left-0 right-0 w-full max-w-full'
          } ${hoveredMenu === 'shop' || hoveredMenu === 'collections' || hoveredMenu === 'size' || hoveredMenu === 'search' || hoveredMenu === 'about' ? 'pointer-events-auto' : 'pointer-events-none'}`}
        >
          {/* Bridge for hover gap */}
          <div className="pt-1 md:pt-2 w-full">
            <div className={`bg-surface border border-primary/5 rounded-md overflow-hidden transition-all duration-500 ease-in-out ${
              hoveredMenu === 'shop' || hoveredMenu === 'collections' || hoveredMenu === 'size' || hoveredMenu === 'search' || hoveredMenu === 'about' ? 'max-h-[800px] opacity-100 shadow-2xl' : 'max-h-0 opacity-0 border-transparent shadow-none'
            }`}>
              <div className={`px-6 md:px-12 lg:px-24 py-12 flex gap-12`}>
            {hoveredMenu === 'search' ? (
              <div className="flex-1 w-full flex flex-col items-center">
                <div className="w-full max-w-3xl relative mb-12 menu-stagger-1">
                  <input 
                    type="text" 
                    placeholder="Search collections, colors, styles..." 
                    className="w-full bg-transparent border-b border-primary/20 text-primary placeholder-primary/30 py-4 focus:outline-none focus:border-brand text-2xl md:text-4xl font-serif text-center transition-colors"
                    autoFocus
                  />
                  <button onClick={() => setHoveredMenu(null)} className="absolute right-0 top-1/2 -translate-y-1/2 text-primary/40 hover:text-brand transition-colors focus:outline-none">
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                
                <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 menu-stagger-2">
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="font-serif text-lg text-brand mb-6">Trending Styles</h4>
                    <ul className="space-y-3 text-primary/70 text-sm font-light">
                      <li><Link href="/shop/hand-knotted" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Hand-Knotted Classics</Link></li>
                      <li><Link href="/shop/silk" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Pure Silk Blends</Link></li>
                      <li><Link href="/shop/flatweaves" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Modern Flatweaves</Link></li>
                    </ul>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left md:border-l border-primary/10 md:pl-12">
                    <h4 className="font-serif text-lg text-brand mb-6">Popular Collections</h4>
                    <ul className="space-y-3 text-primary/70 text-sm font-light">
                      <li><Link href="/collections/heritage" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">The Heritage Collection</Link></li>
                      <li><Link href="/collections/royal" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Royal Persian</Link></li>
                      <li><Link href="/collections/nomad" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Nomad & Tribal</Link></li>
                    </ul>
                  </div>

                  {/* Image Cards */}
                  <div className="flex-[2] md:border-l border-primary/10 md:pl-12 grid grid-cols-2 gap-4">
                    <Link href="/collections/heritage" className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                      <Image src="/design-assets/rug-persian.png" alt="Heritage Collection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-surface">
                        <h4 className="font-serif text-lg mb-1">Heritage Collection</h4>
                      </div>
                    </Link>

                    <Link href="/shop/modern" className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                      <Image src="/design-assets/slide-1.png" alt="Modern Minimalist" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-surface">
                        <h4 className="font-serif text-lg mb-1">Modern Minimalist</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ) : hoveredMenu === 'about' ? (
              <div className="w-full flex gap-8 menu-stagger-1 px-4">
                <Link href="/about/founder" className="flex-1 group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                     <Image src="/design-assets/weaver-hero.png" alt="The Founder" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[10px] font-bold tracking-widest text-brand mb-1 uppercase">The Founder</h4>
                    <p className="text-[11px] font-light text-primary/70">The Gandhi Of The Carpet Industry</p>
                  </div>
                </Link>
                <Link href="/about/pink-city" className="flex-1 group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                     <Image src="/design-assets/journey_1_wool.png" alt="The Pink City" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[10px] font-bold tracking-widest text-brand mb-1 uppercase">The Pink City</h4>
                    <p className="text-[11px] font-light text-primary/70">Jaipur - Land Of The Maharajas</p>
                  </div>
                </Link>
                <Link href="/about/company" className="flex-1 group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                     <Image src="/design-assets/journey_4_home.png" alt="The Company" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[10px] font-bold tracking-widest text-brand mb-1 uppercase">The Company</h4>
                    <p className="text-[11px] font-light text-primary/70">The Original Indian Rug-Makers</p>
                  </div>
                </Link>
                <Link href="/about/craft" className="flex-1 group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                     <Image src="/design-assets/journey_3_loom.png" alt="The Craft" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[10px] font-bold tracking-widest text-brand mb-1 uppercase">The Craft</h4>
                    <p className="text-[11px] font-light text-primary/70">A Work Of Art Made By 180 Hands</p>
                  </div>
                </Link>
                <Link href="/about/designer" className="flex-1 group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
                     <Image src="/design-assets/journey_2_dye.png" alt="The Designer" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-[10px] font-bold tracking-widest text-brand mb-1 uppercase">The Designer</h4>
                    <p className="text-[11px] font-light text-primary/70">The People Behind The Rugs</p>
                  </div>
                </Link>
              </div>
            ) : hoveredMenu === 'shop' ? (
              <>
                <div className="flex-1 menu-stagger-1">
                  <h4 className="font-serif text-2xl text-brand mb-6">Styles</h4>
                  <ul className="space-y-4 text-primary/70 text-sm font-light">
                    <li><Link href="/shop/hand-knotted" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Hand-Knotted</Link></li>
                    <li><Link href="/shop/hand-tufted" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Hand-Tufted</Link></li>
                    <li><Link href="/shop/flatweaves" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Flatweaves</Link></li>
                    <li><Link href="/shop/silk" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Silk Blends</Link></li>
                  </ul>
                </div>
                <div className="flex-1 menu-stagger-2">
                  <h4 className="font-serif text-2xl text-brand mb-6">Design</h4>
                  <ul className="space-y-4 text-primary/70 text-sm font-light">
                    <li><Link href="/shop/traditional" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Traditional & Persian</Link></li>
                    <li><Link href="/shop/modern" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Modern Minimalist</Link></li>
                    <li><Link href="/shop/transitional" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Transitional</Link></li>
                    <li><Link href="/shop/geometric" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Geometric</Link></li>
                  </ul>
                </div>
                <div className="flex-[2] menu-stagger-3 md:border-l border-primary/10 md:pl-12 grid grid-cols-2 gap-4">
                    <Link href="/shop/new" className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                      <Image src="/design-assets/slide-3.png" alt="New Arrivals" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-surface">
                        <h4 className="font-serif text-lg mb-1">New Arrivals</h4>
                      </div>
                    </Link>

                    <Link href="/shop/best-sellers" className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                      <Image src="/design-assets/rug-persian.png" alt="Best Sellers" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-surface">
                        <h4 className="font-serif text-lg mb-1">Best Sellers</h4>
                      </div>
                    </Link>
                </div>
              </>
            ) : hoveredMenu === 'collections' ? (
              <>
                <div className="flex-1 menu-stagger-1">
                  <h4 className="font-serif text-2xl text-brand mb-6">Curated Collections</h4>
                  <ul className="space-y-4 text-primary/70 text-sm font-light">
                    <li><Link href="/collections/heritage" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">The Heritage Collection</Link></li>
                    <li><Link href="/collections/royal" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Royal Persian</Link></li>
                    <li><Link href="/collections/nomad" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Nomad & Tribal</Link></li>
                    <li><Link href="/collections/artisan" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Artisan Series</Link></li>
                  </ul>
                </div>
                <div className="flex-1 menu-stagger-2">
                  <h4 className="font-serif text-2xl text-brand mb-6">By Room</h4>
                  <ul className="space-y-4 text-primary/70 text-sm font-light">
                    <li><Link href="/collections/living-room" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Living Room</Link></li>
                    <li><Link href="/collections/bedroom" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Bedroom</Link></li>
                    <li><Link href="/collections/dining" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Dining Area</Link></li>
                    <li><Link href="/collections/outdoor" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Outdoor & Patio</Link></li>
                  </ul>
                </div>
                <div className="flex-[2] menu-stagger-3 md:border-l border-primary/10 md:pl-12 grid grid-cols-2 gap-4">
                    <Link href="/collections/heritage" className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                      <Image src="/design-assets/rug-persian.png" alt="The Heritage Collection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-surface">
                        <h4 className="font-serif text-lg mb-1">The Heritage Collection</h4>
                      </div>
                    </Link>

                    <Link href="/collections/royal" className="group relative block aspect-[4/3] overflow-hidden rounded-md">
                      <Image src="/design-assets/texture.png" alt="Royal Persian" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-surface">
                        <h4 className="font-serif text-lg mb-1">Royal Persian</h4>
                      </div>
                    </Link>
                </div>
              </>
            ) : hoveredMenu === 'size' ? (
              <>
                <div className="flex-1 menu-stagger-1">
                  <h4 className="font-serif text-2xl text-brand mb-6">Standard Sizes</h4>
                  <ul className="space-y-4 text-primary/70 text-sm font-light">
                    <li><Link href="/size-guide/small" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Small (4'x6' - 5'x8')</Link></li>
                    <li><Link href="/size-guide/medium" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Medium (6'x9' - 8'x10')</Link></li>
                    <li><Link href="/size-guide/large" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Large (9'x12' - 10'x14')</Link></li>
                    <li><Link href="/size-guide/runners" className="hover:text-brand transition-all inline-block hover:translate-x-1 duration-300">Runners & Accents</Link></li>
                  </ul>
                </div>
                <div className="flex-[4] menu-stagger-3 md:border-l border-primary/10 md:pl-12 flex flex-col justify-center">
                  <h4 className="font-serif text-xl text-brand mb-3">Find Your Perfect Fit</h4>
                  <p className="text-sm text-primary/60 mb-6 font-light leading-relaxed max-w-2xl">No more struggling to envision how a carpet will look. Use our placement diagrams to confidently purchase a rug that perfectly anchors your space.</p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="flex flex-col items-center">
                      <div className="relative w-full aspect-[4/3] mix-blend-multiply">
                        <Image src="/design-assets/4-x-6.jpg" alt="4x6 & 5x8 Rug Size" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative w-full aspect-[4/3] mix-blend-multiply">
                        <Image src="/design-assets/6-x-9-2.jpg" alt="6x9 & 8x10 Rug Size" fill className="object-contain" />
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="relative w-full aspect-[4/3] mix-blend-multiply">
                        <Image src="/design-assets/10-x-14.jpg" alt="9x12 & 10x14 Rug Size" fill className="object-contain" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div>
          </div>
        </div>
        </div>
      </nav>



      <style jsx>{`
        .menu-stagger-1 { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards; opacity: 0; transform: translateY(20px); }
        .menu-stagger-2 { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.15s forwards; opacity: 0; transform: translateY(20px); }
        .menu-stagger-3 { animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards; opacity: 0; transform: translateY(20px); }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
