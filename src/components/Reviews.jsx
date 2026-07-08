import { useState, useRef, useEffect } from "react";
import { Star, MessageSquare } from "lucide-react";

// Reviews dataset mapped to the 4 home categories with dynamic scores
const CATEGORIES_REVIEWS = {
  1: {
    homeName: "Pheasant Cottage",
    propertyName: "Pheasant Cottage",
    avgRating: "4.92",
    totalReviews: 48,
    scores: {
      Cleanliness: 4.9,
      Accuracy: 4.9,
      Communication: 5.0,
      Location: 4.9,
      "Check-in": 5.0,
      Value: 4.8
    },
    reviews: [
      {
        id: 1,
        author: "Doug B.",
        location: "Iowa City, IA",
        avatarLetter: "D",
        avatarBg: "bg-slate-100",
        rating: 5,
        date: "October 2025",
        stayDuration: "Stayed a few nights",
        text: "My girlfriend and I have made the 4.5 hour trip to Serenity Lake from Iowa City twice now. The recreation that surrounds the Black River Falls area is boundless, and many activities can be found right on the property! We've enjoyed cross-country skiing, snowshoeing, and snowmobiling on the grounds. Did I mention that my girlfriend is now my fiance? That too happened right on the property!"
      },
      {
        id: 2,
        author: "Grace",
        location: "Chicago, IL",
        avatarLetter: "G",
        avatarBg: "bg-zinc-100",
        rating: 5,
        date: "May 2026",
        stayDuration: "Stayed a few nights",
        text: "Can't say enough good about the host and this cozy cabin. Waking up to the lake view was fantastic, and the private hot tub was incredibly relaxing after hiking the trails. Highly recommend!"
      },
      {
        id: 3,
        author: "Melanie",
        location: "Edmonton, Canada",
        avatarLetter: "M",
        avatarBg: "bg-neutral-100",
        rating: 5,
        date: "June 2026",
        stayDuration: "Stayed with a pet",
        text: "We had a great stay and enjoyed the awesome lakeside views! We will stay here again the next time we are in the area. Very cozy and clean!"
      }
    ]
  },
  2: {
    homeName: "Bear's Den",
    propertyName: "Bear's Den",
    avgRating: "4.88",
    totalReviews: 36,
    scores: {
      Cleanliness: 4.8,
      Accuracy: 4.9,
      Communication: 4.9,
      Location: 5.0,
      "Check-in": 4.9,
      Value: 4.8
    },
    reviews: [
      {
        id: 1,
        author: "Susan",
        location: "Edmonton, Canada",
        avatarLetter: "S",
        avatarBg: "bg-stone-100",
        rating: 5,
        date: "1 week ago",
        stayDuration: "Group trip",
        text: "Place was clean, great location. Would definitely book again. The custom log futon was actually very comfortable and the porch is huge, overlooking the lake!"
      },
      {
        id: 2,
        author: "Chris",
        location: "Windsor, Canada",
        avatarLetter: "C",
        avatarBg: "bg-neutral-100",
        rating: 5,
        date: "May 2026",
        stayDuration: "Stayed a few nights",
        text: "Great place for our group of 4 people. Well appointed and comfortable. I would definitely stay here again. Directly accessible to the ski and ATV trails."
      },
      {
        id: 3,
        author: "Jedd & Sarah",
        location: "Milwaukee, WI",
        avatarLetter: "J",
        avatarBg: "bg-zinc-100",
        rating: 5,
        date: "September 2025",
        stayDuration: "Couples retreat",
        text: "Thank you so much for your wonderful hospitality. Bear's Den is beautiful! The fireplace kept us so warm during the chilly evenings. We had a wonderful and relaxing time."
      }
    ]
  },
  3: {
    homeName: "Tall Pines Lodge",
    propertyName: "Tall Pines Lodge",
    avgRating: "4.96",
    totalReviews: 62,
    scores: {
      Cleanliness: 5.0,
      Accuracy: 4.9,
      Communication: 5.0,
      Location: 5.0,
      "Check-in": 5.0,
      Value: 4.9
    },
    reviews: [
      {
        id: 1,
        author: "Audra S.",
        location: "Madison, WI",
        avatarLetter: "A",
        avatarBg: "bg-slate-100",
        rating: 5,
        date: "Winter 2025",
        stayDuration: "Large group stay",
        text: "We had a great time at your Tall Pines Lodge property. It was perfect for our large group. The location is beautiful! With all the snow we got, it was a Winter Wonderland!"
      },
      {
        id: 2,
        author: "The V, O, K & T Families",
        location: "Twin Cities, MN",
        avatarLetter: "F",
        avatarBg: "bg-stone-100",
        rating: 5,
        date: "July 2025",
        stayDuration: "Family reunion",
        text: "Our families go on vacation every year at different places. Well, we will no longer be going to different places because we found our permanent vacation spot! Thank you so much for a wonderful vacation and memories."
      },
      {
        id: 3,
        author: "Jennifer K.",
        location: "Minneapolis, MN",
        avatarLetter: "J",
        avatarBg: "bg-neutral-100",
        rating: 5,
        date: "August 2025",
        stayDuration: "Group trip",
        text: "Everyone enjoyed the stay so much last summer we would like to book for next year! The six-person hot tub on the porch is absolutely incredible for group stays. Thanks for everything!"
      }
    ]
  }
};

export default function Reviews() {
  const [selectedHomeId, setSelectedHomeId] = useState(1);
  const activeCategory = CATEGORIES_REVIEWS[selectedHomeId] || CATEGORIES_REVIEWS[1];

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

  // Center active category tab button on select
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const activeBtn = el.querySelector(`[data-id="${selectedHomeId}"]`);
    if (activeBtn) {
      const containerWidth = el.clientWidth;
      const btnWidth = activeBtn.clientWidth;
      const btnLeft = activeBtn.offsetLeft;
      el.scrollTo({
        left: btnLeft - containerWidth / 2 + btnWidth / 2,
        behavior: "smooth",
      });
    }
  }, [selectedHomeId]);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="bg-transparent py-20 border-t border-brand-border overflow-hidden pointer-events-none"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">

        {/* Section Header (Centered at the very top) */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold tracking-widest text-brand-subtle uppercase block mb-1">
            Guest Experience
          </span>
          <h2
            id="reviews-title"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-brand-text leading-tight"
          >
            Guest reviews
          </h2>
        </div>

        {/* Category Switcher Row (Centered full-width divider) */}
        <div className="mb-12 max-w-3xl mx-auto">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex flex-row md:justify-center overflow-x-auto snap-x snap-mandatory gap-2.5 scrollbar-none pb-2 border-b border-brand-border/60 scroll-smooth"
          >
            {[1, 2, 3].map((id) => {
              const isActive = id === selectedHomeId;
              const catData = CATEGORIES_REVIEWS[id];
              return (
                <button
                  key={id}
                  data-id={id}
                  onClick={() => setSelectedHomeId(id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border shrink-0 snap-start cursor-pointer ${isActive
                    ? "border-brand-accent bg-brand-accent text-white shadow-sm scale-[1.02]"
                    : "border-brand-border bg-white text-brand-muted hover:border-brand-accent/50 hover:bg-brand-surface"
                    }`}
                >
                  <span className="text-[15px]">{catData.homeName}</span> &middot; {catData.avgRating} ★
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

        {/* Main Grid Layout (Metrics on Left, Testimonials on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Summary and Rating Stats (33% width / 4 cols) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">

            {/* Large Score Card */}
            <div className="bg-brand-surface border border-brand-border rounded-3xl p-6 shadow-sm">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold tracking-tight text-brand-text">
                  {activeCategory.avgRating}
                </span>
                <span className="text-sm font-semibold text-brand-muted">
                  / 5.0
                </span>
              </div>

              <div className="flex items-center gap-1 mt-2 text-brand-text">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-text stroke-none" />
                ))}
                <span className="text-xs font-medium text-brand-muted ml-2">
                  ({activeCategory.totalReviews} reviews)
                </span>
              </div>

              <p className="text-xs text-brand-muted mt-4 leading-relaxed border-t border-brand-border/60 pt-4">
                Average ratings computed from audited reviews of our <strong>{activeCategory.propertyName}</strong> collection.
              </p>
            </div>

            {/* Progress Bars (Airbnb-Style Metrics) */}
            <div className="space-y-4 pt-2">
              <h4 className="text-xs font-bold tracking-widest text-brand-text uppercase">
                Rating Breakdown
              </h4>
              <div className="space-y-3.5">
                {Object.entries(activeCategory.scores).map(([metric, score]) => {
                  const percentage = (score / 5) * 100;
                  return (
                    <div key={metric} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-medium">
                        <span className="text-brand-muted">{metric}</span>
                        <span className="text-brand-text">{score.toFixed(1)}</span>
                      </div>
                      <div className="w-full bg-brand-border/50 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-brand-accent h-full rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Reviews Grid (66% width / 8 cols) */}
          <div className="lg:col-span-8">

            {/* Staggered Review Cards Grid */}
            <div
              key={selectedHomeId}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {activeCategory.reviews.map((rev, index) => (
                <div
                  key={rev.id}
                  style={{ animationDelay: `${index * 80}ms` }}
                  className="relative overflow-hidden bg-brand-surface border border-brand-border/80 rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-brand-accent/30 animate-fade-in-up flex flex-col justify-between min-h-[220px]"
                >

                  {/* Giant Decorative Double Quote Symbol (Visual Premium touch) */}
                  <span className="absolute right-6 top-6 text-brand-accent/[0.04] text-7xl select-none font-serif font-bold pointer-events-none leading-none">
                    &ldquo;
                  </span>

                  <div className="relative z-10 space-y-4">
                    {/* Header Row: Profile */}
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full ${rev.avatarBg} flex items-center justify-center font-bold text-brand-text text-sm border border-brand-border/40 shrink-0`}>
                        {rev.avatarLetter}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-brand-text leading-tight">
                          {rev.author}
                        </h4>
                        <span className="text-[10px] text-brand-muted leading-tight block">
                          {rev.location}
                        </span>
                      </div>
                    </div>

                    {/* Meta Row: Rating / Date */}
                    <div className="flex items-center gap-2 text-[10px] font-sans font-medium text-brand-muted border-t border-brand-border/40 pt-3">
                      <div className="flex items-center text-brand-text">
                        {[...Array(rev.rating)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-brand-text stroke-none" />
                        ))}
                      </div>
                      <span className="text-brand-subtle select-none">&bull;</span>
                      <span className="text-brand-text">{rev.date}</span>
                      <span className="text-brand-subtle select-none">&bull;</span>
                      <span>{rev.stayDuration}</span>
                    </div>

                    {/* Review Paragraph */}
                    <p className="text-[13px] text-brand-text leading-relaxed font-normal">
                      &ldquo;{rev.text}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center gap-2 mt-4 pt-3 border-t border-brand-border/40">
                    <MessageSquare className="w-3.5 h-3.5 text-brand-subtle" />
                    <span className="text-[10px] font-bold text-brand-subtle tracking-wider uppercase">
                      Verified Guest Stay
                    </span>
                  </div>

                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
