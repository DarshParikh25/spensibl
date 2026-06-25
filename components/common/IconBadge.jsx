import { cn } from "@/lib/utils";

const IconBadge = ({
  icon: Icon,
  size = 12,
  width = 2,
  bgColor = "var(--bg)",
  iconColor = "#000",
}) => {
  return (
    <div
      style={{ background: bgColor }}
      className={"p-2 rounded-sm bg-opacity-50"}
    >
      <Icon size={size} strokeWidth={width} color={iconColor} />
    </div>
  );
};

export default IconBadge;
