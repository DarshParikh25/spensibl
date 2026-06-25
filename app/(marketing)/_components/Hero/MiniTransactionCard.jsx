import { cn } from "@/lib/utils";

import IconBadge from "@/components/common/IconBadge";

const MiniTransactionCard = ({
  icon,
  name,
  cat,
  type,
  amount,
  bgColor,
  iconColor,
}) => {
  return (
    <div className="w-full bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] flex items-center justify-between px-3 py-2 rounded-lg">
      <div className="flex items-center gap-2">
        <IconBadge
          icon={icon}
          width={2}
          size={16}
          bgColor={bgColor}
          iconColor={iconColor}
        />
        <div className="flex flex-col justify-center gap-1">
          <div className="text-xs font-medium">{name}</div>
          <div className="text-[11px] text-(--muted)">{cat}</div>
        </div>
      </div>
      <div
        className={cn(
          "font-mono text-sm font-medium",
          type === "income" ? "text-(--green)" : "text-(--red)",
        )}
      >
        {type === "income" ? "+" : "-"}
        <span className="font-inter text-xs">₹</span>
        {amount}
      </div>
    </div>
  );
};

export default MiniTransactionCard;
