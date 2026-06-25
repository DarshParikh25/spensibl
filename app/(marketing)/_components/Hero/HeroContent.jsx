import { ArrowRight, Lock, Play, ShieldCheck, Zap } from "lucide-react";

import CTA from "@/components/common/CTA";

const HeroContent = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-6">
      {/* Hero Eyebrow */}
      <div className="w-fit uppercase inline-flex justify-center items-center border border-(--border2) rounded-full px-4 py-1.5 text-[10px] sm:text-xs font-inter gap-2 text-(--cyan) bg-[rgba(99, 102, 241, 0.07)] font-semibold tracking-wider">
        {/* Hero Dot */}
        <span className="inline-flex w-1.25 h-1.25 bg-(--cyan) rounded-full animate-blink"></span>
        Personal Finance, Reimagined
      </div>

      {/* Hero Head */}
      <h1 className="text-hero tracking-tighter leading-14 font-extrabold text-balance">
        Take back{" "}
        <span className="bg-linear-to-br from-(--indigo) to-(--cyan) bg-clip-text text-transparent">
          control
        </span>{" "}
        of your money.
      </h1>

      {/* Hero Sub */}
      <p className="font-inter text-[1.05rem] text-(--muted2) leading-7 max-w-115">
        {`Every account, every card, every wallet — tracked, categorized, and
        understood. Spensibl gives you a complete picture of your finances, so
        you're always the one in charge.`}
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
        <span className="flex justify-center items-center gap-1">
          <Lock size={12} /> No credit card needed
        </span>
        <span className="flex justify-center items-center gap-1">
          <Zap size={12} /> Live in 2 minutes
        </span>
        <span className="flex justify-center items-center gap-1">
          <ShieldCheck size={12} /> Bank-grade encryption
        </span>
      </p>
    </div>
  );
};

export default HeroContent;
