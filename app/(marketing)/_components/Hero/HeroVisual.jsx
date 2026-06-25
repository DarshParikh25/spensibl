import { Sparkles } from "lucide-react";
import { Lightbulb } from "lucide-react";

import VisualPill from "./VisualPill";
import VisualCard from "./VisualCard";

const HeroVisual = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-fit relative flex justify-center items-center">
        {/* Visual Glow */}
        <div className="absolute -inset-5 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.12)_0%,transparent_70%)] pointer-events-none backdrop-blur-lg"></div>

        {/* Top Pill */}
        <VisualPill className="-top-10 right-2 sm:-right-16 text-(--cyan) animate-pill-float1">
          <Sparkles size={12} strokeWidth={2.5} />
          AI insight ready
        </VisualPill>

        {/* Main Card */}
        <VisualCard />

        {/* Bottom Pill */}
        <VisualPill
          className={
            "-bottom-8 left-2 sm:-left-20 text-(--green) animate-pill-float2"
          }
        >
          <Lightbulb size={12} strokeWidth={2.5} />
          Save ₹4,100 this month
        </VisualPill>
      </div>
    </div>
  );
};

export default HeroVisual;
