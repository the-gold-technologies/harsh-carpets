"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    title: "A Masterpiece for Our Living Room!",
    text: "I had a wonderful shopping experience at Harsh Carpets. They have a huge collection of rugs available on their website. I purchased a few carpets for my living room, bedroom area. I would 100% recommend them to my friends and family.",
    name: "Martin Smith",
    role: "Assistant Manager",
    image: "/design-assets/avatar_martin.png",
    logo: "/design-assets/logos/aviva.jpg"
  },
  {
    title: "Best Product Quality!",
    text: "My husband and I purchased a carpet for our living room area last week and we are really happy with the product quality. There were a number of options to choose from and the pricing was also reasonable. They are best in their industry.",
    name: "Shila Rana",
    role: "College Professor",
    image: "/design-assets/avatar_shila.png",
    logo: "/design-assets/logos/moolchand.jpg"
  },
  {
    title: "Exceptional Customer Service!",
    text: "I recently purchased a rug from Harsh Carpets and was very impressed by their carpet collection and customer service. The staff was knowledgeable and guided me in choosing the perfect rug for my space. I am very happy with my purchase.",
    name: "Imran Khan",
    role: "Industrialist",
    image: "/design-assets/avatar_imran.png",
    logo: "/design-assets/logos/dlf.jpg"
  },
  {
    title: "A Touch of Pure Luxury!",
    text: "The craftsmanship of these hand-knotted rugs is unparalleled. It completely transformed our boutique's reception area. Fast delivery and pristine packaging. Highly recommended!",
    name: "Sophia Martinez",
    role: "Interior Designer",
    image: "/design-assets/avatar_shila.png",
    logo: "/design-assets/logos/itc.jpg"
  },
  {
    title: "Outstanding Collection!",
    text: "Finding a genuine silk rug is difficult, but Harsh Carpets delivered exactly what they promised. The colors are incredibly vibrant and the texture is heavenly.",
    name: "James Wilson",
    role: "Architect",
    image: "/design-assets/avatar_martin.png",
    logo: "/design-assets/logos/fiitjee.jpg"
  },
  {
    title: "Truly World-Class Craftsmanship",
    text: "We furnished our entire corporate office with their transitional collection. The team was supportive and helped us pick designs that match our brand perfectly.",
    name: "Aisha Patel",
    role: "Operations Director",
    image: "/design-assets/avatar_imran.png",
    logo: "/design-assets/logos/aviva.jpg"
  }
];

const TestimonialCard = ({ item }: { item: any }) => (
  <div className="flex flex-col md:flex-row bg-white rounded-2xl overflow-hidden w-[85vw] md:w-[750px] h-[450px] md:h-[350px] shadow-xl border border-primary/5 flex-shrink-0 whitespace-normal cursor-pointer hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
    
    {/* Left Content */}
    <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col justify-center order-2 md:order-1 h-[60%] md:h-full relative z-10">
      
      {/* Brand Logo Box */}
      <div className="flex items-center gap-3 mb-6 opacity-60 mix-blend-multiply">
        <div className="w-12 h-8 relative flex-shrink-0">
          <Image src={item.logo} alt="Brand" fill className="object-contain" />
        </div>
      </div>

      <h3 className="text-primary text-lg md:text-xl font-bold mb-3 font-serif">{item.title}</h3>
      
      <p className="text-primary/70 text-xs md:text-sm leading-relaxed mb-6 italic">
        "{item.text}"
      </p>
      
      <div className="mt-auto pt-4 border-t border-primary/5">
        <p className="text-primary font-bold text-sm">{item.name}</p>
        <p className="text-brand text-[10px] font-bold uppercase tracking-wider mt-1">{item.role}</p>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full md:w-1/2 relative order-1 md:order-2 h-[40%] md:h-full">
      <Image src={item.image} alt={item.name} fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-100 hidden md:block z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100 block md:hidden z-10"></div>
    </div>

  </div>
);

export default function HappyCustomers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 md:py-32 bg-[#faf9f8] w-full overflow-hidden text-primary relative">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto px-6">
        <span className="text-brand uppercase tracking-[0.3em] text-[10px] font-bold block mb-4">
          [ Testimonials ]
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-wide mb-6">
          Hear from Brands <br className="hidden md:block"/> That Trust Us
        </h2>
        <div className="w-16 h-[2px] bg-brand mx-auto mb-6"></div>
        <p className="text-primary/60 font-light text-sm md:text-base max-w-2xl mx-auto">
          Our clients' success stories showcase the value we bring to every space.
          Here's what they have to say about their experience with us.
        </p>
      </div>

      {/* 3D Centered Slider */}
      <div className="w-full relative py-10 overflow-hidden flex justify-center items-center h-[500px] md:h-[450px]">
        {testimonials.map((item, idx) => {
          const isActive = idx === currentIndex;
          const isLeft = idx === (currentIndex - 1 + testimonials.length) % testimonials.length;
          const isRight = idx === (currentIndex + 1) % testimonials.length;

          let transform = "translateX(150%) scale(0.7)"; 
          let opacity = 0;
          let zIndex = 0;

          if (isActive) {
            transform = "translateX(0) scale(1)";
            opacity = 1;
            zIndex = 30;
          } else if (isLeft) {
            transform = "translateX(-105%) scale(0.85)";
            opacity = 0.4;
            zIndex = 20;
          } else if (isRight) {
            transform = "translateX(105%) scale(0.85)";
            opacity = 0.4;
            zIndex = 20;
          } else if (idx === (currentIndex - 2 + testimonials.length) % testimonials.length) {
            transform = "translateX(-150%) scale(0.7)";
            opacity = 0;
            zIndex = 0;
          }

          return (
            <div 
              key={idx} 
              className="absolute top-1/2 -translate-y-1/2 transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{ transform, opacity, zIndex }}
              onClick={() => setCurrentIndex(idx)}
            >
               <TestimonialCard item={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
