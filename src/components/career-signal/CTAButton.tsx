import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

export function CTAButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition",
        variant === "primary" &&
          "bg-[#171717] text-white hover:bg-[#2b2b2b]",
        variant === "secondary" &&
          "border-[#c8d3d0] bg-white text-[#171717] hover:bg-[#f4f7f5]",
        className
      )}
    >
      {children}
      <ArrowRight className="size-4" />
    </Link>
  );
}
