import { cn } from "@/lib/utils";

const VisualBar = ({ className }) => {
  return (
    <div
      className={cn("flex-1 rounded-t bg-[rgba(255,255,255,0.07)]", className)}
    ></div>
  );
};

export default VisualBar;
