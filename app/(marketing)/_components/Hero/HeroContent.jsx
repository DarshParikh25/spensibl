import { ArrowRight, Play } from "lucide-react";

import { footnotes } from "@/data/footNotes";

import CTA from "@/components/common/CTA";
import TitlePill from "@/components/common/TitlePill";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      {/* Hero Eyebrow */}
      <TitlePill>Smarter Money Management</TitlePill>

      {/* Hero Head */}
      <h1 className="text-hero tracking-tighter leading-12 sm:leading-14 font-extrabold text-balance">
        Take back{" "}
        <span className="bg-linear-to-br from-(--indigo) to-(--cyan) bg-clip-text text-transparent">
          control
        </span>{" "}
        of your money.
      </h1>

      {/* Hero Sub */}
      <p className="font-inter text-[1.05rem] text-(--muted2) leading-7 text-balance">
        {`Spensibl brings all your accounts, expenses budgets and insights together in one place, giving you a complete picture of your finances — so you're always the one in charge.`}
      </p>

      {/* Hero actions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-2 sm:gap-4">
        <CTA
          href={"/login"}
          variant={"default"}
          className={
            "border-none bg-linear-to-br from-(--indigo) to-[#4f46e5] inline-flex items-center py-5 px-10 sm:py-6 sm:px-8 rounded-lg sm:text-[15px] font-semibold hover:shadow-[0_12px_32px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-350"
          }
        >
          Start for free
          <ArrowRight />
        </CTA>

        {/* Will change later on */}
        <CTA
          href={"/"}
          variant={"ghost"}
          className={
            "inline-flex items-center border border-(--border2) bg-transparent py-5 px-10 sm:px-7 sm:py-6 rounded-lg sm:text-[15px] hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.22)] transition-all duration-350"
          }
        >
          <Play />
          See it live
        </CTA>
      </div>

      {/* Hero Footnote */}
      <p className="font-inter text-xs text-(--muted) tracking-wide flex flex-col sm:flex-row justify-baseline items-baseline sm:items-center gap-3">
        {footnotes.map(({ icon: Icon, text }, index) => (
          <span key={index} className="flex justify-center items-center gap-1">
            <Icon size={12} />
            {text}
          </span>
        ))}
      </p>
    </div>
  );
};

export default HeroContent;
