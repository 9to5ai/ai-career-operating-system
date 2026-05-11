"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function ScanCard({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-lg border border-[#ded9ce] bg-white p-5 shadow-sm sm:p-7">
      {children}
    </div>
  );
}

export function SelectableCard({
  selected,
  disabled,
  children,
  onClick,
}: {
  selected: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "min-h-14 rounded-md border px-4 py-3 text-left text-sm font-medium leading-5 transition",
        selected
          ? "border-[#315c52] bg-[#e8f2ed] text-[#17342e]"
          : "border-[#e3dfd5] bg-white text-[#343434] hover:border-[#b9c8c3] hover:bg-[#f8fbf9]",
        disabled && "cursor-not-allowed opacity-45"
      )}
    >
      {children}
    </button>
  );
}

export function MultiSelectGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-3 sm:grid-cols-2">{children}</div>;
}
