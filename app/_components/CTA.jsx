import Link from "next/link";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

const CTA = ({ href, variant, className, children }) => {
  return (
    <Button
      asChild
      variant={variant}
      className={cn("transition-all duration-300 cursor-pointer", className)}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default CTA;
