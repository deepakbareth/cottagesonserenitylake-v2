import { useState, useEffect, useRef } from "react";
import { Sparkles, Maximize2, Key, Info, CheckCircle2 } from "lucide-react";
import h1 from "../assets/Pheasant/prop1.jpg";
import h2 from "../assets/Bear’s/b2.jpg";
import h3 from "../assets/cottage3/cottage3.jpg";

const HOMES_DETAILS = [
  {
    id: 1,
    name: "Pheasant Cottage",
    title: "COZY, TWO-BEDROOM CABIN - SLEEPS NINE",
    img: h1,
    intro: "Pheasant Cottage is a 2-bedroom, 1-bathroom cottage with fourteen windows providing spectacular views of the lake and surrounding area! A custom futon in the main room allows nine to sleep comfortably.",
    space: "Pheasant Cottage has all the amenities of the other properties, with the exception of a fireplace. Enjoy the outdoor fire pit as weather permits!",
    access: "Offers a private hot tub, private waterfront shoreline, and outdoor fire pit on the grounds.",
    registration: "Location: W9303 Turkey Trail, Black River Falls, WI 54615"
  },
  {
    id: 2,
    name: "Bear's Den",
    title: "FIVE ROOM CABIN - SLEEPS 10",
    img: h2,
    intro: "Bear's Den is a two bedroom, one bathroom single-floor cottage with a spacious floor plan. Some of the amenities and appointments include pine trim, doors, frames, cabinets and ceiling, and a custom fireplace. Bear's Den is handicap-accessible.",
    space: "This cottage sleeps up to 10 persons with both a double bed and a single bunk-bed in each room. For further sleeping arrangements, there is a custom-built log double-futon in the living room.",
    access: "Bear's Den offers an eight-foot front deck, a hot tub, a fire pit and (like all the other properties) its own private shoreline.",
    registration: "Location: W9285 Turkey Trail, Black River Falls, WI 54615"
  },
  {
    id: 3,
    name: "Tall Pines Lodge",
    title: "Largest Serenity Home - Sleeps Thirty Five",
    img: h3,
    intro: "The Tall Pines Lodge is a 2,300 square foot home and is built on the lakefront. In addition to sleeping 35 individuals across four bedrooms, this property includes a huge six-person hot tub right on the front porch!",
    space: "Three main bedrooms with three double, two double, and one single one double beds respectively sit on the first floor along with two full bathrooms. Also on the first floor, the common area serves as living room, dining room and kitchen and includes a custom-built rock fireplace. The fourth bedroom occupies the downstairs level along with a second large common area.",
    access: "There are great views of the native wildlife through the two main bedrooms on the main floor as they overlook the lake, and the ceilings in the upstairs area are custom wood with skylights to let in a beautiful view of nature. The lodge is spacious enough to feel as if you have the comfort of home during your vacation but removed enough from the other properties to feel properly secluded.",
    registration: "Location: W9253 Serenity Drive, Black River Falls, WI 54615"
  }
];

/**
 * AboutProperties Component
 * Renders Airbnb-style space details for each of the 4 signature properties.
 * Positioned below the Hero section.
 */
export default function AboutProperties() {
  const [selectedId, setSelectedId] = useState(1);
  const activeHome = HOMES_DETAILS.find((h) => h.id === selectedId) || HOMES_DETAILS[0];

  const scrollRef = useRef(null);

  // Center active property tab button on select (for mobile swipe tab bar responsiveness)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeBtn = el.querySelector(`[data-id="${selectedId}"]`);
    if (activeBtn) {
      const containerWidth = el.clientWidth;
      const btnWidth = activeBtn.clientWidth;
      const btnLeft = activeBtn.offsetLeft;
      el.scrollTo({
        left: btnLeft - containerWidth / 2 + btnWidth / 2,
        behavior: "smooth",
      });
    }
  }, [selectedId]);

  return (
    <section
      aria-labelledby="properties-heading"
      className="bg-transparent py-12 sm:py-16 md:py-20 border-t border-brand-border overflow-hidden pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">

        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-widest text-brand-subtle uppercase block mb-1">
            Property Details
          </span>
          <h2
            id="properties-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-text leading-tight"
          >
            About This Space
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
            Discover the specifics, guest access privileges, and unique features of each location.
          </p>
        </div>

        {/* Responsive Sliding Pill Tab Switcher */}
        <div className="w-full flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-md sm:max-w-none flex justify-start sm:justify-center overflow-x-auto scrollbar-none pb-2">
            <div
              ref={scrollRef}
              className="bg-gray-100/80 backdrop-blur-md p-1 sm:p-1.5 rounded-full flex max-w-full overflow-x-auto scrollbar-none border border-brand-border/40 shadow-sm px-2 gap-1 sm:gap-2 mx-auto"
            >
              {HOMES_DETAILS.map((home) => {
                const isActive = home.id === selectedId;
                return (
                  <button
                    key={home.id}
                    data-id={home.id}
                    onClick={() => setSelectedId(home.id)}
                    className={`font-sans text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide uppercase px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer transition-all duration-500 shrink-0 ${isActive
                      ? "bg-brand-text text-white shadow-md scale-[1.03]"
                      : "text-gray-500 hover:text-brand-text"
                      }`}
                  >
                    {home.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Responsive Glassmorphism Card Frame */}
        <div className="bg-white/70 backdrop-blur-md border border-brand-border/50 rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

            {/* Left Column: Visual Preview (Col span 5 on desktop) */}
            <div className="lg:col-span-5 relative group rounded-xl sm:rounded-2xl overflow-hidden border border-brand-border/30 shadow-md aspect-[4/4] w-full">
              <img
                src={activeHome.img}
                alt={activeHome.title}
                className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>

            {/* Right Column: Premium Details Listing (Col span 7 on desktop) */}
            <div key={selectedId} className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 text-brand-text font-sans w-full">

              {/* Heading Section */}
              <div className="flex items-start gap-3 sm:gap-4 animate-fade-in-up">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-text/5 flex items-center justify-center shrink-0 mt-0.5 text-brand-text">
                  <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold leading-tight text-brand-text">
                    About this space
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                    {activeHome.intro}
                  </p>
                </div>
              </div>

              {/* Detail Block: The Space */}
              {activeHome.space && (
                <div
                  style={{ animationDelay: "60ms" }}
                  className="pt-4 sm:pt-5 border-t border-brand-border/40 flex items-start gap-3 sm:gap-4 animate-fade-in-up"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-text/5 flex items-center justify-center shrink-0 mt-0.5 text-brand-text">
                    <Maximize2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-brand-subtle mb-1">
                      The space
                    </h4>
                    <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 leading-relaxed">
                      {activeHome.space}
                    </p>
                  </div>
                </div>
              )}

              {/* Detail Block: Guest Access */}
              {activeHome.access && (
                <div
                  style={{ animationDelay: "120ms" }}
                  className="pt-4 sm:pt-5 border-t border-brand-border/40 flex items-start gap-3 sm:gap-4 animate-fade-in-up"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-text/5 flex items-center justify-center shrink-0 mt-0.5 text-brand-text">
                    <Key className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-brand-subtle mb-1">
                      Guest access
                    </h4>
                    <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 leading-relaxed">
                      {activeHome.access}
                    </p>
                  </div>
                </div>
              )}

              {/* Detail Block: Other Things to Note */}
              {activeHome.notes && (
                <div
                  style={{ animationDelay: "180ms" }}
                  className="pt-4 sm:pt-5 border-t border-brand-border/40 flex items-start gap-3 sm:gap-4 animate-fade-in-up"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-text/5 flex items-center justify-center shrink-0 mt-0.5 text-brand-text">
                    <Info className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-brand-subtle mb-1">
                      Other things to note
                    </h4>
                    <p className="text-xs sm:text-sm md:text-[15px] text-gray-600 leading-relaxed">
                      {activeHome.notes}
                    </p>
                  </div>
                </div>
              )}

              {/* Registration Block */}
              <div
                style={{ animationDelay: "240ms" }}
                className="pt-4 sm:pt-5 border-t border-brand-border/60 flex items-start gap-3 sm:gap-4 animate-fade-in-up"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-brand-text/5 flex items-center justify-center shrink-0 mt-0.5 text-brand-text">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <h4 className="text-[9px] sm:text-[10px] uppercase tracking-widest font-bold text-brand-subtle mb-1">
                    Registration details
                  </h4>
                  <p className="text-[11px] sm:text-xs font-mono text-gray-500 leading-none">
                    {activeHome.registration}
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
