import { useState, useRef, useEffect } from "react";
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  PawPrint,
  Tv,
  WashingMachine,
  Wind,
  Snowflake,
  Flame,
  Mountain,
  Cctv,
  Compass,
  TreePine
} from "lucide-react";
import h1Image from "../assets/Pheasant/prop1.jpg";
import h3Image from "../assets/Bear’s/b2.jpg";
import h4Image from "../assets/cottage3/cottage3.jpg";

// Definition of properties, matching names and local asset imports
const AMENITIES_DATA = [
  {
    id: 1,
    propertyName: "Pheasant Cottage",
    location: "Black River Falls, WI",
    img: h1Image,
    headline: "What this place offers",
    keyAmenities: [
      { name: "2 Bedrooms", icon: "workspace" },
      { name: "1 Bathroom", icon: "security" },
      { name: "Kitchen", icon: "kitchen" },
      { name: "Heating / Air Conditioning", icon: "ac" },
      { name: "Private Hot Tub", icon: "patio" },
      { name: "Private Waterfront", icon: "courtyard" },
      { name: "Fire Pit", icon: "fireplace" }
    ]
  },
  {
    id: 2,
    propertyName: "Bear's Den",
    location: "Black River Falls, WI",
    img: h3Image,
    headline: "What this place offers",
    keyAmenities: [
      { name: "2 Bedrooms", icon: "workspace" },
      { name: "1 Bathroom", icon: "security" },
      { name: "Kitchen", icon: "kitchen" },
      { name: "Fireplace", icon: "fireplace" },
      { name: "Heating / Air Conditioning", icon: "ac" },
      { name: "Private Hot Tub", icon: "patio" },
      { name: "Private Waterfront", icon: "courtyard" },
      { name: "Fire Pit", icon: "fireplace" }
    ]
  },
  {
    id: 3,
    propertyName: "Tall Pines Lodge",
    location: "Black River Falls, WI",
    img: h4Image,
    headline: "What this place offers",
    keyAmenities: [
      { name: "4 Bedrooms", icon: "workspace" },
      { name: "3 Bathrooms", icon: "security" },
      { name: "Kitchen", icon: "kitchen" },
      { name: "Fireplace", icon: "fireplace" },
      { name: "Heating / Air Conditioning", icon: "ac" },
      { name: "Skylights", icon: "courtyard" },
      { name: "Private Hot Tub", icon: "patio" },
      { name: "Private Waterfront", icon: "courtyard" },
      { name: "Fire Pit", icon: "fireplace" }
    ]
  }
];

// Helper component for SVG icons using Lucide React
function AmenityIcon({ type }) {
  switch (type) {
    case "kitchen":
      return <Utensils className="w-5 h-5 text-brand-text" />;
    case "wifi":
      return <Wifi className="w-5 h-5 text-brand-text" />;
    case "workspace":
      return <Laptop className="w-5 h-5 text-brand-text" />;
    case "parking":
      return <Car className="w-5 h-5 text-brand-text" />;
    case "pets":
      return <PawPrint className="w-5 h-5 text-brand-text" />;
    case "tv":
      return <Tv className="w-5 h-5 text-brand-text" />;
    case "washer":
      return <WashingMachine className="w-5 h-5 text-brand-text" />;
    case "dryer":
      return <Wind className="w-5 h-5 text-brand-text" />;
    case "ac":
      return <Snowflake className="w-5 h-5 text-brand-text" />;
    case "patio":
      return <Compass className="w-5 h-5 text-brand-text" />;
    case "courtyard":
      return <TreePine className="w-5 h-5 text-brand-text" />;
    case "fireplace":
      return <Flame className="w-5 h-5 text-brand-text" />;
    case "ski":
      return <Mountain className="w-5 h-5 text-brand-text" />;
    case "security":
      return <Cctv className="w-5 h-5 text-brand-text" />;
    default:
      return <Compass className="w-5 h-5 text-brand-text" />;
  }
}

export default function Amenities() {
  const [selectedPropertyId, setSelectedPropertyId] = useState(1);

  const activeProperty = AMENITIES_DATA.find((p) => p.id === selectedPropertyId) || AMENITIES_DATA[0];

  const scrollRef = useRef(null);
  const [scrollPct, setScrollPct] = useState(0);

  // Track horizontal scroll progress percentage of category selector
  const handleScroll = (e) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollWidth - el.clientWidth;
    if (maxScroll <= 0) {
      setScrollPct(0);
    } else {
      setScrollPct((el.scrollLeft / maxScroll) * 100);
    }
  };

  // Center active property tab button on select
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeBtn = el.querySelector(`[data-id="${selectedPropertyId}"]`);
    if (activeBtn) {
      const containerWidth = el.clientWidth;
      const btnWidth = activeBtn.clientWidth;
      const btnLeft = activeBtn.offsetLeft;
      el.scrollTo({
        left: btnLeft - containerWidth / 2 + btnWidth / 2,
        behavior: "smooth",
      });
    }
  }, [selectedPropertyId]);

  return (
    <section
      aria-labelledby="amenities-heading"
      className="bg-transparent py-10 border-t border-brand-border pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">


        {/* Main Centered Heading */}
        <div className="text-center mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-subtle uppercase block mb-1">
            Comfort & Luxury
          </span>
          <h2
            id="amenities-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-text leading-tight"
          >
            What this place offers
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Explore the high-end amenities, signature comforts, and modern conveniences equipped inside each property.
          </p>
        </div>

        {/* Horizontal Property Category Tabs (Scrollable on Mobile, Grid Aligned on Desktop) */}
        <div className="mb-12">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 pb-2 w-full justify-start scrollbar-none scroll-smooth md:grid md:grid-cols-3 md:overflow-x-visible md:pb-0"
          >
            {AMENITIES_DATA.map((prop) => {
              const isActive = prop.id === selectedPropertyId;
              return (
                <button
                  key={prop.id}
                  data-id={prop.id}
                  onClick={() => setSelectedPropertyId(prop.id)}
                  className={`flex flex-col items-center gap-3 p-3 rounded-2xl transition-all duration-300 border w-[150px] shrink-0 snap-start md:w-full md:shrink group text-left cursor-pointer ${isActive
                    ? "border-brand-accent bg-brand-surface shadow-md font-semibold  text-brand-text"
                    : "border-brand-border hover:border-brand-accent/50 hover:bg-brand-surface/50 text-brand-muted"
                    }`}
                >
                  {/* Image on Top (stretched to full width of card) */}
                  <div className="w-full aspect-square sm:aspect-[4/3] md:aspect-[1.6/1] overflow-hidden rounded-xl border border-brand-border">
                    <img
                      src={prop.img}
                      alt={prop.propertyName}
                      className="w-full h-full object-cover transition-transform duration-500 "
                    />
                  </div>
                  {/* Text on Bottom */}
                  <span className="text-[11px] sm:text-xs tracking-wide font-sans text-center font-medium leading-tight line-clamp-2 w-full mt-1">
                    {prop.propertyName}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile Swipe Indicator Slider Line */}
          <div className="md:hidden w-32 mx-auto h-[3px] bg-brand-border/50 rounded-full relative overflow-hidden mt-3">
            <div
              className="absolute top-0 h-full bg-brand-accent rounded-full transition-all duration-75"
              style={{
                left: `${(scrollPct / 100) * (100 - 35)}%`,
                width: "35%",
              }}
            />
          </div>
        </div>

        {/* Dynamic Amenities Card Box */}
        <div className="relative overflow-hidden bg-brand-surface border border-brand-border rounded-[2rem] p-8 sm:p-12 shadow-sm transition-all duration-500">

          {/* Dynamic Blurred Background Image */}
          <div
            className="absolute inset-0 z-0 bg-cover bg-center filter blur-3xl scale-110 opacity-[0.12] transition-all duration-1000 ease-in-out pointer-events-none"
            style={{ backgroundImage: `url(${activeProperty.img})` }}
          />

          {/* 2-Column/3-Column Grid of key amenities (Animated with Key to reset animations on switch) */}
          <div
            key={selectedPropertyId}
            className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6"
          >
            {activeProperty.keyAmenities.map((amenity, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 60}ms` }}
                className="flex items-center gap-4 text-brand-text animate-fade-in-up"
              >
                <div className="text-brand-accent shrink-0 p-1.5 bg-white rounded-lg border border-brand-border shadow-sm">
                  <AmenityIcon type={amenity.icon} />
                </div>
                <p className="text-sm font-medium text-brand-text leading-snug">
                  {amenity.name}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
