"use client";

import { Progress } from "@/components/ui/progress";

export function ProgressBar({
  step,
  total,
}: {
  step: number;
  total: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-[0.14em] text-[#65716c]">
        <span>
          Step {step} of {total}
        </span>
        <span>{Math.round((step / total) * 100)}%</span>
      </div>
      <Progress value={(step / total) * 100} className="h-2" />
    </div>
  );
}
