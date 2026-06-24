"use client";

import Logo from "@/app/_components/Logo";
import NavLink from "@/app/_components/NavLinks";
import CTA from "@/app/_components/CTA";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "font-inter fixed top-0 left-8 right-8 lg:top-2 lg:left-12 lg:right-12 h-20 z-50 flex justify-between items-center gap-4",
        isScrolled &&
          "bg-[rgba(8, 8, 14, 0.88)] border-b border-border backdrop-blur-[20px]",
      )}
    >
      {/* Logo */}
      <Logo />

      <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10">
        {/* Nav Links */}
        <div className="flex justify-center items-center gap-6 lg:gap-10 font-medium text-sm">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#workflow">Workflow</NavLink>
          <NavLink href="#preview">Product</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#testimonials">Reviews</NavLink>
        </div>

        <span className="h-5 lg:h-6 w-px bg-muted"></span>

        {/* CTAs */}
        <div className="flex justify-center items-center gap-2 lg:gap-4">
          <CTA
            href={"/login"}
            variant="default"
            className="h-8 w-16 lg:h-9 lg:w-18 border-2 border-(--border2) rounded-md bg-(--bg) hover:bg-(--surface) text-xs lg:text-sm"
          >
            Log in
          </CTA>
          <CTA
            href={"/register"}
            variant="default"
            className="h-8 w-26 lg:h-9 lg:w-36 bg-(--indigo) hover:bg-(--indigo)/90 text-xs lg:text-sm border-none rounded-md"
          >
            Get started free
          </CTA>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
