import { TrendingUp } from "lucide-react";

import { visualBars } from "@/data/visualBars";
import { previewTransactions } from "@/data/previewTransactions";

import VisualBar from "./VisualBar";
import MiniTransactionCard from "./MiniTransactionCard";

const VisualCard = () => {
  return (
    <div className="font-inter bg-[rgba(99,102,241,0.001)] border border-(--border2) rounded-lg p-5.5 w-xs animate-card-float relative z-20 backdrop-blur-[20px] flex flex-col justify-canter items-baseline gap-4">
      {/* Title */}
      <div className="uppercase tracking-wide text-xs text-(--muted) font-semibold">
        Total Balance
      </div>

      {/* Balance */}
      <div className="font-sora flex justify-baseline items-end">
        <span className="text-(--muted)">₹</span>
        <span className="text-3xl font-extrabold">1,24,380</span>
      </div>

      {/* Variance/Yield Percentage */}
      <div className="text-(--green) text-xs font-medium flex justify-center items-center gap-1">
        <TrendingUp size={12} strokeWidth={2.5} /> +4.2% this month
      </div>

      {/* Transaction Bars */}
      <div className="w-full flex justify-center items-end gap-1">
        {visualBars.map(({ height, background }, index) => (
          <VisualBar key={index} className={`${height} ${background}`} />
        ))}
      </div>

      {/* Mini Transaction Cards */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        {previewTransactions.map(
          (
            { icon, title, category, type, amount, iconBg, iconColor },
            index,
          ) => (
            <MiniTransactionCard
              key={index}
              icon={icon}
              title={title}
              cat={category}
              amount={amount}
              type={type}
              iconBg={iconBg}
              iconColor={iconColor}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default VisualCard;
