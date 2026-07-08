import { useState, useEffect, useRef } from "react";
import h1Image from "../assets/Pheasant/prop1.jpg";
import h2Image from "../assets/Bear’s/b2.jpg";
import h3Image from "../assets/cottage3/c1.jpg";
import h4Image from "../assets/cottage3/c2.jpg";
import h5Image from "../assets/Bear’s/b3.jpg";

// List of the 5 cottage views on Serenity Lake
const PROPERTIES = [
  {
    id: 1,
    name: "Pheasant Cottage",
    location: "Black River Falls, WI",
    img: h1Image,
  },
  {
    id: 2,
    name: "Bear's Den",
    location: "Black River Falls, WI",
    img: h2Image,
  },
  {
    id: 3,
    name: "Tall Pines Lodge",
    location: "Black River Falls, WI",
    img: h3Image,
  },
  {
    id: 4,
    name: "Tall Pines Lodge — Lakefront",
    location: "Black River Falls, WI",
    img: h4Image,
  },
  {
    id: 5,
    name: "Bear's Den — Secluded view",
    location: "Black River Falls, WI",
    img: h5Image,
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(2); // Start withजयपुर हवेली / property 3 as center
  const autoPlayRef = useRef();

  // Auto-play the slider
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % PROPERTIES.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + PROPERTIES.length) % PROPERTIES.length);
  };

  /**
   * Helper to determine item placement relative to the active index.
   * Supports exactly 5 visible slides symmetrically placed.
   */
  const getSlideStyle = (index) => {
    const total = PROPERTIES.length;
    let diff = index - activeIndex;

    // Normalize diff to be between -2 and +2
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    if (diff === 0) {
      // Center (Active)
      return {
        transform: "translateX(0) scale(1)",
        opacity: 1,
        zIndex: 30,
        pointerEvents: "auto",
        height: "h-[300px] sm:h-[450px] md:h-[550px]",
        width: "w-[200px] sm:w-[340px] md:w-[540px]",
        borderRadius: "rounded-[2rem]",
      };
    } else if (diff === 1) {
      // Right Inner (Medium)
      return {
        transform: "translateX(145%) scale(0.8)",
        opacity: 0.85,
        zIndex: 20,
        pointerEvents: "auto",
        height: "h-[240px] sm:h-[360px] md:h-[440px]",
        width: "w-[140px] sm:w-[220px] md:w-[280px]",
        borderRadius: "rounded-[1.5rem]",
      };
    } else if (diff === -1) {
      // Left Inner (Medium)
      return {
        transform: "translateX(-145%) scale(0.8)",
        opacity: 0.85,
        zIndex: 20,
        pointerEvents: "auto",
        height: "h-[240px] sm:h-[360px] md:h-[440px]",
        width: "w-[140px] sm:w-[220px] md:w-[280px]",
        borderRadius: "rounded-[1.5rem]",
      };
    } else if (diff === 2) {
      // Right Outer (Small)
      return {
        transform: "translateX(310%) scale(0.6)",
        opacity: 0.7,
        zIndex: 10,
        pointerEvents: "auto",
        height: "h-[180px] sm:h-[270px] md:h-[330px]",
        width: "w-[100px] sm:w-[160px] md:w-[200px]",
        borderRadius: "rounded-[1rem]",
      };
    } else {
      // Left Outer (Small)
      return {
        transform: "translateX(-310%) scale(0.6)",
        opacity: 0.7,
        zIndex: 10,
        pointerEvents: "auto",
        height: "h-[180px] sm:h-[270px] md:h-[330px]",
        width: "w-[100px] sm:w-[160px] md:w-[200px]",
        borderRadius: "rounded-[1rem]",
      };
    }
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative min-h-screen bg-transparent flex flex-col items-center justify-center pt-24 pb-16 overflow-hidden pointer-events-none"
    >
      {/* Background soft dots pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <rect width="40" height="40" fill="none" />
              <circle cx="20" cy="20" r="1.5" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center z-10 pointer-events-auto">

        {/* Title / Headline (matching reference image) */}
        {/* <h1
          id="hero-heading"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-medium text-brand-text text-center max-w-5xl leading-[1.15] mb-12"
        >
          We Promise Service that Leaves <br className="hidden md:inline" />
          Nothing to Ask for
        </h1> */}

        {/* Perspective Coverflow Slider */}
        <div className="relative w-full flex items-center justify-center h-[340px] sm:h-[480px] md:h-[600px] select-none my-4">
          <div className="relative w-full max-w-[1400px] h-full flex items-center justify-center">
            {PROPERTIES.map((prop, index) => {
              const style = getSlideStyle(index);
              const isActive = index === activeIndex;

              return (
                <div
                  key={prop.id}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transform: style.transform,
                    opacity: style.opacity,
                    zIndex: style.zIndex,
                    pointerEvents: style.pointerEvents,
                    transition: "all 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}
                  className={`absolute flex flex-col items-center justify-center cursor-pointer overflow-hidden group shadow-xl ${style.height} ${style.width} ${style.borderRadius} border border-brand-border bg-white`}
                >
                  {/* Property Image */}
                  <img
                    src={prop.img}
                    alt={prop.name}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 transition-opacity duration-300" />

                  {/* Property details (visible on center active item or hover) */}
                  {/* <div
                    className={`absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white transition-all duration-500 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                      }`}
                  >
                    <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase text-white/80 block mb-1">
                      {prop.location}
                    </span>
                    <h3 className="font-serif text-sm sm:text-lg md:text-xl font-bold leading-tight">
                      {prop.name}
                    </h3>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Controls & Property Selector Indicator */}
        <div className="flex items-center gap-6 mt-2">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-text transition-all duration-300 hover:bg-brand-accent hover:text-white"
            aria-label="Previous property"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="flex gap-2">
            {PROPERTIES.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-brand-accent w-6" : "bg-brand-border hover:bg-brand-subtle"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-text transition-all duration-300 hover:bg-brand-accent hover:text-white"
            aria-label="Next property"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}
