import { cn } from "@/lib/utils";

const VisualPill = ({ className, children }) => {
  return (
    <div
      className={cn(
        "absolute z-30 w-fit font-inter flex items-center gap-1 border border-(--border2) rounded-lg px-4 py-3 text-xs font-semibold bg-[rgba(10,10,22,0.95)] whitespace-nowrap backdrop-blur-lg",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default VisualPill;
