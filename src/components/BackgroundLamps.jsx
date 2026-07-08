import lempImage from "../assets/home/lemp.jpg";

/**
 * BackgroundLamps Component
 * Renders fixed hanging decorative lamps in the viewport background.
 * Uses mix-blend-multiply to blend JPG image background.
 * Positioned at z-[12] (overlaying content, using pointer-events-none on wrapper
 * and pointer-events-auto on lamps to capture hover effects).
 * Configured with warm yellow/gold drop shadows and color saturation filters.
 */
export default function BackgroundLamps() {
  return (
    <div className="fixed inset-0 pointer-events-none select-none z-0 xl:z-[20] overflow-hidden">
      {/* Lamp 1: Far Left */}
      <div className="absolute left-[3%] flex flex-col items-center opacity-[0.65]">
        <div className="w-[1px] h-[180px] bg-brand-text/30" />
        <img
          src={lempImage}
          alt=""

          className="w-36 h-auto object-contain mix-blend-multiply transition-all duration-700 pointer-events-auto cursor-pointer brightness-[0.75] sepia-[0.3] saturate-[1.5] hue-rotate-[15deg] drop-shadow-[0_4px_8px_rgba(245,158,11,0.12)] hover:brightness-100 hover:sepia-[0.4] hover:saturate-[2.5] hover:hue-rotate-[15deg] hover:drop-shadow-[0_20px_25px_rgba(245,158,11,0.6)]"
        />
      </div>


      {/* Lamp 2: Left Center (Commented out by user) */}
      {/* <div className="absolute top-0 left-[28%] flex flex-col items-center opacity-[0.30]">
        <div className="w-[3px] h-[360px] bg-brand-text/30" />
        <img
          src={lempImage}
          alt=""
          title="Hover to glow warm golden"
          className="w-28 h-auto object-contain mix-blend-multiply transition-all duration-700 pointer-events-auto cursor-pointer brightness-[0.75] sepia-[0.3] saturate-[1.5] hue-rotate-[15deg] drop-shadow-[0_5px_10px_rgba(245,158,11,0.15)] hover:brightness-100 hover:sepia-[0.4] hover:saturate-[2.5] hover:hue-rotate-[15deg] hover:drop-shadow-[0_25px_30px_rgba(245,158,11,0.65)]"
        />
      </div> */}

      {/* Lamp 3: Right Center */}
      <div className="absolute top-0 left-[72%] flex flex-col items-center opacity-[0.30]">
        <div className="w-[1px] h-[300px] bg-brand-text/30" />
        <img
          src={lempImage}
          alt=""

          className="w-20 h-auto object-contain mix-blend-multiply transition-all duration-700 pointer-events-auto cursor-pointer brightness-[0.75] sepia-[0.3] saturate-[1.5] hue-rotate-[15deg] drop-shadow-[0_4px_8px_rgba(245,158,11,0.12)] hover:brightness-100 hover:sepia-[0.4] hover:saturate-[2.5] hover:hue-rotate-[15deg] hover:drop-shadow-[0_20px_25px_rgba(245,158,11,0.6)]"
        />
      </div>

      {/* Lamp 4: Far Right */}
      <div className="absolute top-0 left-[91%] flex flex-col items-center opacity-[0.65]">
        <div className="w-[3px] h-[140px] bg-brand-text/30" />
        <img
          src={lempImage}
          alt=""

          className="w-30 h-auto object-contain mix-blend-multiply transition-all duration-700 pointer-events-auto cursor-pointer brightness-[0.75] sepia-[0.3] saturate-[1.5] hue-rotate-[15deg] drop-shadow-[0_4px_8px_rgba(245,158,11,0.12)] hover:brightness-100 hover:sepia-[0.4] hover:saturate-[2.5] hover:hue-rotate-[15deg] hover:drop-shadow-[0_20px_25px_rgba(245,158,11,0.6)]"
        />
      </div>
    </div>
  );
}
