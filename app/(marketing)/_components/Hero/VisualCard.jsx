import { TrendingUp } from "lucide-react";

import VisualBar from "./VisualBar";
import MiniTransactionCard from "./MiniTransactionCard";
import { Coffee } from "lucide-react";
import { BriefcaseBusiness } from "lucide-react";

const VisualCard = () => {
  const barSizes = [
    {
      height: "h-5",
      background: "bg-(--border)",
    },
    {
      height: "h-8",
      background: "bg-(--border)",
    },
    {
      height: "h-6.5",
      background: "bg-(--border)",
    },
    {
      height: "h-11",
      background: "bg-(--border)",
    },
    {
      height: "h-9",
      background: "bg-(--border)",
    },
    {
      height: "h-14",
      background: "bg-linear-to-b from-(--cyan) to-(--indigo)",
    },
    {
      height: "h-10",
      background: "bg-(--border)",
    },
  ];

  const transactions = [
    {
      icon: Coffee,
      name: "Cafe Coffee Day",
      category: "Food",
      type: "expense",
      amount: 240,
      bgColor: "#6366f122",
      iconColor: "#6366f1",
    },
    {
      icon: BriefcaseBusiness,
      name: "Salary",
      category: "Income",
      type: "income",
      amount: 62500,
      bgColor: "#34d39922",
      iconColor: "#34d399",
    },
  ];

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
        {barSizes.map(({ height, background }, index) => (
          <VisualBar key={index} className={`${height} ${background}`} />
        ))}
      </div>

      {/* Mini Transaction Cards */}
      <div className="w-full flex flex-col justify-center items-center gap-2">
        {transactions.map(
          (
            { icon, name, category, type, amount, bgColor, iconColor },
            index,
          ) => (
            <MiniTransactionCard
              key={index}
              icon={icon}
              name={name}
              cat={category}
              amount={amount}
              type={type}
              bgColor={bgColor}
              iconColor={iconColor}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default VisualCard;
