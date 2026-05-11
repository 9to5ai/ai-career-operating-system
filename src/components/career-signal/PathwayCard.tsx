import type { SignalResponse } from "@/lib/career-signal/types";

export function PathwayCard({
  pathway,
  index,
}: {
  pathway: SignalResponse["signalJson"]["bestFitPathways"][number];
  index: number;
}) {
  return (
    <div className="rounded-md border border-[#ded9ce] bg-white p-5">
      <p className="font-mono text-sm text-[#315c52]">Pathway {index + 1}</p>
      <h3 className="mt-3 text-xl font-semibold text-[#171717]">
        {pathway.title}
      </h3>
      <div className="mt-5 space-y-4 text-sm leading-6 text-[#59635f]">
        <p>
          <span className="font-semibold text-[#252525]">Why it fits: </span>
          {pathway.whyItFits}
        </p>
        <p>
          <span className="font-semibold text-[#252525]">
            What to test first:{" "}
          </span>
          {pathway.whatToTestFirst}
        </p>
        <p>
          <span className="font-semibold text-[#252525]">What to avoid: </span>
          {pathway.whatToAvoid}
        </p>
      </div>
    </div>
  );
}
