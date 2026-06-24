"use client";
import Image from "next/image";
import Link from "next/link";

const arrivals = [
  { id: 1, name: "The Heritage Weave", category: "Traditional", price: "Discover", img: "/design-assets/rug-persian.png" },
  { id: 2, name: "Oushak Revival", category: "Modern", price: "Discover", img: "/design-assets/texture.png" },
  { id: 3, name: "Nomadic Spirit", category: "Tribal", price: "Discover", img: "/design-assets/hero.png" },
  { id: 4, name: "Silk Route", category: "Luxury", price: "Discover", img: "/design-assets/weaver-hero.png" },
];

export default function NewArrivals() {
  return (
    <section className="py-32 bg-background w-full">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 lg:px-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">Latest Curations</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-primary tracking-wide">New Arrivals</h2>
          </div>
          <Link href="/shop" className="cursor-pointer group flex items-center justify-center border border-brand text-brand px-8 py-4 uppercase tracking-[0.2em] text-[10px] font-bold hover:bg-brand hover:text-surface transition-all duration-500">
            View All Arrivals
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {arrivals.map((item) => (
            <div key={item.id} className="group cursor-pointer flex flex-col">
              <div className="relative w-full aspect-[4/5] overflow-hidden mb-8 bg-surface">
                <Image 
                  src={item.img} 
                  alt={item.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
              </div>
              <div className="flex flex-col items-center text-center mt-auto">
                <p className="text-primary/50 text-[9px] uppercase tracking-widest mb-2">{item.category}</p>
                <h3 className="font-serif text-xl md:text-2xl text-primary mb-4 group-hover:text-brand transition-colors">{item.name}</h3>
                <p className="text-[9px] uppercase tracking-[0.2em] text-primary font-medium border-b border-primary/20 pb-1 hover:border-brand hover:text-brand transition-colors">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
