import h1Image from "../assets/Pheasant/prop2.jpg";
import h2Image from "../assets/Bear’s/b1.jpg";
import h3Image from "../assets/cottage3/c2.jpg";
import h4Image from "../assets/cottage3/cottage3.jpg";
import lempImage from "../assets/home/lemp.jpg";

export default function SleepSection() {
  return (
    <section
      id="sleep"
      aria-labelledby="sleep-heading"
      className="bg-transparent py-20 border-t border-brand-border overflow-hidden pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-brand-subtle uppercase block mb-1">
            Explore the Property
          </span>
          <h2
            id="sleep-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-text leading-tight"
          >
            A Tour of Serenity Lake
          </h2>
          <p className="text-brand-muted text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Take a look inside our inviting entryways, rustic bedrooms, spacious group dining rooms, and secluded cabin grounds.
          </p>
        </div>

        {/* Symmetrical Split Card Layout (Matches the Chandelier screenshot layout exactly) */}
        <div className="relative bg-white border border-brand-border rounded-[2.5rem] shadow-xl overflow-hidden min-h-[760px] flex flex-col md:flex-row">

          {/* 
            ====================================================
            DECORATIVE HANGING LAMPS (4 LAMPS ARRAY WITH OFFSETS)
            ====================================================
          */}

          {/* LAMP 1: Left (Hanging low in the empty space below Home 1) */}
          <div className="hidden md:flex absolute top-0 left-[14%] w-32 h-full z-20 pointer-events-none flex flex-col items-center select-none">
            <div className="w-[1px] h-[370px] bg-brand-accent/20" />
            <img
              src={lempImage}
              alt="Hanging Lamp Left"
              className="w-24 h-auto object-contain drop-shadow-[0_15px_15px_rgba(245,158,11,0.18)] transition-all duration-700 pointer-events-auto cursor-pointer brightness-[0.55] sepia-[0.15] saturate-[1.2] hue-rotate-[12deg] hover:brightness-100 hover:sepia-0 hover:saturate-100"
              title="Hover to turn White"
            />
          </div>

          {/* LAMP 2: Center (Exactly on vertical split line, hanging high) */}
          <div className="hidden md:flex absolute top-0 left-[50%] -translate-x-1/2 w-56 h-full z-20 pointer-events-none flex flex-col items-center select-none">
            <div className="w-[1px] h-28 bg-brand-accent/20" />
            <img
              src={lempImage}
              alt="Center Hanging Lamp"
              className="w-44 h-auto object-contain drop-shadow-[0_25px_30px_rgba(245,158,11,0.32)] transition-all duration-700 pointer-events-auto cursor-pointer sepia-[0.18] saturate-[1.3] hue-rotate-[12deg] brightness-[1.05] hover:brightness-0 hover:sepia-0 hover:saturate-100"
              title="Hover to turn Black"
            />
          </div>

          {/* LAMP 3: Right-Center (Hanging low in the empty space below Home 3) */}
          <div className="hidden md:flex absolute top-0 left-[64%] w-32 h-full z-20 pointer-events-none flex flex-col items-center select-none">
            <div className="w-[1px] h-[300px] bg-brand-accent/20" />
            <img
              src={lempImage}
              alt="Hanging Lamp Right-Center"
              className="w-24 h-auto object-contain drop-shadow-[0_20px_20px_rgba(245,158,11,0.25)] transition-all duration-700 pointer-events-auto cursor-pointer sepia-[0.18] saturate-[1.3] hue-rotate-[12deg] brightness-[1.05] hover:brightness-0 hover:sepia-0 hover:saturate-100"
              title="Hover to turn Black"
            />
          </div>

          {/* LAMP 4: Far Right (Hanging near the right edge, hanging high) */}
          <div className="hidden md:flex absolute top-0 right-5 w-32 h-full pointer-events-none flex flex-col items-center select-none z-20">
            <div className="w-[1px] h-24 bg-brand-accent/20" />
            <img
              src={lempImage}
              alt="Right Hanging Lamp"
              className="w-28 h-auto object-contain drop-shadow-[0_15px_15px_rgba(245,158,11,0.18)] transition-all duration-700 pointer-events-auto cursor-pointer brightness-[0.55] sepia-[0.15] saturate-[1.2] hue-rotate-[12deg] hover:brightness-100 hover:sepia-0 hover:saturate-100"
              title="Hover to turn White"
            />
          </div>

          {/* 
            =========================================
            CONTENT COLUMNS (LEFT / RIGHT SPLIT)
            =========================================
          */}


          {/* LEFT PART: White Background (50% Width) - Contains Home 1 (Top) & Home 2 (Bottom) */}
          <div className="flex-1 bg-white p-8 sm:p-12 pr-8 md:pr-16 flex flex-col justify-around gap-12 z-10 relative">

            {/* Home 1 Card (Top - shifted slightly left, text on the right) */}
            <div id="home-1" className="group w-full max-w-[500px] self-center md:self-start md:-translate-x-6 flex flex-col md:flex-row items-center gap-5 sm:gap-6 transition-all duration-300 hover:translate-y-[-4px] scroll-mt-28">
              {/* Image Container (UNTOUCHED DESIGN ON DESKTOP) */}
              <div className="w-full md:w-[320px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/60 shadow-xl relative bg-brand-surface">
                <img
                  src={h1Image}
                  alt="Pheasant Cottage"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-brand-text border border-brand-border">
                  Pheasant Cottage
                </span>
              </div>
              {/* Text Container (Beautiful bit large text) */}
              <div className="w-full md:flex-1 space-y-2">
                <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-brand-text leading-tight">
                  Pheasant Cottage Entrance
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic">
                  &ldquo;A clean and welcoming lakeside entryway, featuring fourteen windows offering immediate lake views as you step inside.&rdquo;
                </p>
              </div>
            </div>

            {/* Home 2 Card (Bottom - shifted slightly right, text on the left) */}
            <div id="home-2" className="group w-full max-w-[500px] self-center md:self-end md:translate-x-6 flex flex-col md:flex-row-reverse items-center gap-5 sm:gap-6 transition-all duration-300 hover:translate-y-[-4px] scroll-mt-28">
              {/* Image Container (UNTOUCHED DESIGN ON DESKTOP) */}
              <div className="w-full md:w-[320px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/60 shadow-xl relative bg-brand-surface">
                <img
                  src={h2Image}
                  alt="Bear's Den"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-brand-text border border-brand-border">
                  Bear's Den
                </span>
              </div>
              {/* Text Container (Beautiful bit large text) */}
              <div className="w-full md:flex-1 space-y-2 text-left md:text-right">
                <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-brand-text leading-tight">
                  Bear's Den Bedroom
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic">
                  &ldquo;Comfortable rustic bedrooms with custom-made pine bunk beds, wood trims, and warm forest bedding styled for cozy nights.&rdquo;
                </p>
              </div>
            </div>

          </div>

          {/* RIGHT PART: Cream Background (50% Width) - Contains Home 3 (Top) & Home 4 (Bottom) */}
          <div className="flex-1 bg-[#FAF6F0] p-8 sm:p-12 pl-8 md:pl-16 flex flex-col justify-around gap-12 border-t md:border-t-0 md:border-l border-brand-border/60 relative z-10">

            {/* Home 3 Card (Top - shifted slightly left, text on the right) */}
            <div id="home-3" className="group w-full max-w-[500px] self-center md:self-start md:-translate-x-6 flex flex-col md:flex-row items-center gap-5 sm:gap-6 transition-all duration-300 hover:translate-y-[-4px] scroll-mt-28">
              {/* Image Container (UNTOUCHED DESIGN ON DESKTOP) */}
              <div className="w-full md:w-[320px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/60 shadow-xl relative bg-white">
                <img
                  src={h3Image}
                  alt="Tall Pines Lodge"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-brand-text border border-brand-border">
                  Tall Pines Lodge
                </span>
              </div>
              {/* Text Container (Beautiful bit large text) */}
              <div className="w-full md:flex-1 space-y-2">
                <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-brand-text leading-tight">
                  Tall Pines Dining Room
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic">
                  &ldquo;A spacious, beautifully styled common dining area featuring handcrafted wooden tables and chairs for large group meals.&rdquo;
                </p>
              </div>
            </div>

            {/* Home 4 Card (Bottom - shifted slightly right, text on the left) */}
            <div id="home-4" className="group w-full max-w-[500px] self-center md:self-end md:translate-x-6 flex flex-col md:flex-row-reverse items-center gap-5 sm:gap-6 transition-all duration-300 hover:translate-y-[-4px] scroll-mt-28">
              {/* Image Container (UNTOUCHED DESIGN ON DESKTOP) */}
              <div className="w-full md:w-[320px] shrink-0 aspect-[4/3] rounded-2xl overflow-hidden border border-brand-border/60 shadow-xl relative bg-white">
                <img
                  src={h4Image}
                  alt="Tall Pines Lodge Exterior"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase text-brand-text border border-brand-border">
                  Tall Pines Exterior
                </span>
              </div>
              {/* Text Container (Beautiful bit large text) */}
              <div className="w-full md:flex-1 space-y-2 text-left md:text-right">
                <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-brand-text leading-tight">
                  Tall Pines Lodge Grounds
                </h4>
                <p className="text-xs sm:text-sm text-brand-muted leading-relaxed italic">
                  &ldquo;The secluded exterior view of the lodge, showing the spacious gravel drive and private woods surrounding the lake property.&rdquo;
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
