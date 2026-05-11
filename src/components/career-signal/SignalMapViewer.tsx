import type { SignalResponse } from "@/lib/career-signal/types";

import { ActionPlanList } from "./ActionPlanList";
import { OpportunityCard } from "./OpportunityCard";
import { PathwayCard } from "./PathwayCard";

export function SignalMapViewer({ result }: { result: SignalResponse }) {
  const { signalJson } = result;

  return (
    <div className="space-y-10">
      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
          1. Your Current Signal
        </p>
        <p className="mt-3 text-lg leading-8 text-[#343434]">
          {signalJson.currentSignal}
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            2. Strongest Career Assets
          </p>
          <div className="mt-4 grid gap-3">
            {signalJson.strongestCareerAssets.map((item) => (
              <OpportunityCard key={item}>{item}</OpportunityCard>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a5f22]">
            3. Career Risk Signals
          </p>
          <div className="mt-4 grid gap-3">
            {signalJson.careerRiskSignals.map((item) => (
              <OpportunityCard key={item}>{item}</OpportunityCard>
            ))}
          </div>
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
          4. AI Leverage Opportunities
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {signalJson.aiLeverageOpportunities.map((item) => (
            <OpportunityCard key={item}>{item}</OpportunityCard>
          ))}
        </div>
      </section>

      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
          5. Best-Fit Pathways
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {signalJson.bestFitPathways.map((pathway, index) => (
            <PathwayCard
              key={`${pathway.title}-${index}`}
              pathway={pathway}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="rounded-md border border-[#ded9ce] bg-[#f8f7f2] p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
          6. Positioning Statement
        </p>
        <div className="mt-4 space-y-4 text-sm leading-6 text-[#343434]">
          <p>
            <span className="font-semibold">One-line positioning: </span>
            {signalJson.positioningStatement.oneLinePositioning}
          </p>
          <p>
            <span className="font-semibold">LinkedIn headline: </span>
            {signalJson.positioningStatement.linkedInHeadline}
          </p>
          <p>
            <span className="font-semibold">I help statement: </span>
            {signalJson.positioningStatement.iHelpStatement}
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            7. Skill Gaps
          </p>
          <div className="mt-4 grid gap-3">
            {signalJson.skillGaps.map((item) => (
              <OpportunityCard key={item}>{item}</OpportunityCard>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            8. 7-Day Action Plan
          </p>
          <div className="mt-4">
            <ActionPlanList actions={signalJson.sevenDayActionPlan} />
          </div>
        </div>
      </section>

      <section className="rounded-md border border-[#315c52]/25 bg-[#171717] p-6 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9dd8c4]">
          9. Recommended Next Experiment
        </p>
        <p className="mt-4 text-xl font-semibold leading-8">
          {signalJson.recommendedNextExperiment}
        </p>
      </section>

      <section>
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
          10. Assistant Instructions
        </p>
        <pre className="mt-4 whitespace-pre-wrap rounded-md border border-[#ded9ce] bg-white p-5 text-sm leading-7 text-[#343434]">
          {signalJson.assistantInstructions}
        </pre>
      </section>
    </div>
  );
}
