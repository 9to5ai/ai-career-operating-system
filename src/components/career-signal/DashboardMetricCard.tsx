import { ArrowUpRight } from "lucide-react";

import type { SignalResponse } from "@/lib/career-signal/types";

export function DashboardMetricCard({
  title,
  metric,
}: {
  title: string;
  metric: SignalResponse["dashboardJson"]["careerClarity"];
}) {
  return (
    <div className="rounded-md border border-[#e4e1d8] bg-white p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-semibold text-[#343434]">{title}</p>
          <p className="mt-1 text-xs text-[#7b8580]">Directional signal</p>
        </div>
        <ArrowUpRight className="size-4 text-[#315c52]" />
      </div>
      <div className="mt-5 flex items-end gap-2">
        <span className="font-mono text-4xl font-semibold text-[#171717]">
          {metric.score}
        </span>
        <span className="pb-1 text-sm text-[#65716c]">/100</span>
      </div>
      <div className="mt-4 h-2 rounded-full bg-[#ebe7dd]">
        <div
          className="h-full rounded-full bg-[#315c52]"
          style={{ width: `${metric.score}%` }}
        />
      </div>
      <p className="mt-4 text-sm leading-6 text-[#59635f]">
        {metric.explanation}
      </p>
      <p className="mt-4 rounded-md bg-[#f8f7f2] p-3 text-sm font-medium leading-6 text-[#252525]">
        {metric.nextAction}
      </p>
    </div>
  );
}
