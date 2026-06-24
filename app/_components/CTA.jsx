import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CTA = ({ href, variant, className, children }) => {
  return (
    <Button
      asChild
      variant={variant}
      className={cn("transition-all duration-300", className)}
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default CTA;
