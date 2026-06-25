"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import Logo from "@/components/common/Logo";
import NavLink from "@/components/common/NavLinks";
import CTA from "@/components/common/CTA";

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
        "font-inter fixed top-0 left-0 right-0 h-20 z-50 transition-all duration-300",
        isScrolled &&
          "bg-[rgba(8,8,14,0.88)] border-b border-(--border) backdrop-blur-[20px]",
      )}
    >
      <div className="relative p-4 xs:px-8 xs:py-6 lg:px-12 lg:py-6 flex justify-between items-center gap-4">
        {/* Logo */}
        <Logo />

        <div className="flex justify-center items-center gap-6 lg:gap-10">
          {/* Nav Links */}
          <div className="hidden md:flex justify-center items-center gap-6 lg:gap-10">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#workflow">Workflow</NavLink>
            <NavLink href="#preview">Product</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#testimonials">Reviews</NavLink>
          </div>

          <span className="hidden md:inline h-5 lg:h-6 w-px bg-muted"></span>

          {/* CTAs */}
          <div className="flex justify-center items-center gap-2 lg:gap-4">
            <CTA
              href={"/login"}
              variant="default"
              className="px-4 h-8 sm:h-9 border border-(--border2) rounded-md bg-transparent hover:bg-[rgba(255,255,255,0.04)] hover:border-[rgba(255,255,255,0.22)] text-xs sm:text-sm"
            >
              Log in
            </CTA>
            <CTA
              href={"/register"}
              variant="default"
              className="px-4 h-8 sm:h-9 bg-linear-to-br from-(--indigo) to-[#4f46e5] hover:-translate-y-px hover:shadow-[0_6px_20px_rgba(99,102,241,0.35)] text-xs sm:text-sm border-none rounded-md"
            >
              Get started free
            </CTA>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderNav;
