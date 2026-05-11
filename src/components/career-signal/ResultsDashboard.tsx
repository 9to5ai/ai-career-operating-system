"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";
import { ArrowRight, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  loadStoredResult,
  subscribeToStoredResult,
} from "@/lib/career-signal/client-storage";
import type { SignalResponse } from "@/lib/career-signal/types";

import { DashboardMetricCard } from "./DashboardMetricCard";
import { ExportButtons } from "./ExportButtons";
import { OpportunityCard } from "./OpportunityCard";
import { PathwayCard } from "./PathwayCard";

const metricLabels: Array<[keyof SignalResponse["dashboardJson"], string]> = [
  ["careerClarity", "Career Clarity"],
  ["aiLeverage", "AI Leverage"],
  ["marketRelevance", "Market Relevance"],
  ["executionUrgency", "Execution Urgency"],
  ["confidenceRisk", "Confidence Risk"],
];

export function ResultsDashboard() {
  const result = useSyncExternalStore(
    subscribeToStoredResult,
    loadStoredResult,
    () => null
  );
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [waitlistState, setWaitlistState] = useState("");

  async function joinWaitlist(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setWaitlistState("Saving...");
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        role: result?.signalJson.positioningStatement.linkedInHeadline ?? "",
        careerStatus: result?.signalJson.currentSignal.slice(0, 140) ?? "",
        biggestChallenge: result?.signalJson.recommendedNextExperiment ?? "",
      }),
    });
    setWaitlistState(response.ok ? "You're on the waitlist." : "Could not save yet.");
  }

  if (!result) {
    return (
      <main className="min-h-screen bg-[#f8f7f2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl rounded-md border border-[#ded9ce] bg-white p-8">
          <h1 className="text-3xl font-semibold text-[#171717]">
            No Career Signal Map yet.
          </h1>
          <p className="mt-4 text-[#59635f]">
            Complete the 5-minute scan to generate your dashboard.
          </p>
          <Link
            href="/scan"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#171717] px-4 text-sm font-semibold text-white"
          >
            Start scan
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
              Results dashboard
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-normal text-[#171717]">
              Your directional career signals
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-[#59635f]">
              These scores are directional signals, not scientifically validated
              measures. Use them to choose the next useful test.
            </p>
          </div>
          <ExportButtons result={result} />
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-5">
          {metricLabels.map(([key, label]) => (
            <DashboardMetricCard
              key={key}
              title={label}
              metric={result.dashboardJson[key]}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <section className="rounded-md border border-[#ded9ce] bg-white p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
              Career Signal Summary
            </p>
            <p className="mt-4 text-lg leading-8 text-[#343434]">
              {result.signalJson.currentSignal}
            </p>
            <Link
              href="/signal-map"
              className="mt-6 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-[#171717] px-4 text-sm font-semibold text-white hover:bg-[#2b2b2b]"
            >
              View full Signal Map
              <ArrowRight className="size-4" />
            </Link>
          </section>

          <section className="rounded-md border border-[#315c52]/25 bg-[#171717] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#9dd8c4]">
              Recommended next experiment
            </p>
            <p className="mt-4 text-xl font-semibold leading-8">
              {result.signalJson.recommendedNextExperiment}
            </p>
          </section>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
              AI leverage opportunities
            </p>
            <div className="mt-4 grid gap-3">
              {result.signalJson.aiLeverageOpportunities.map((item) => (
                <OpportunityCard key={item}>{item}</OpportunityCard>
              ))}
            </div>
          </section>

          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
              Best-fit pathways
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-3">
              {result.signalJson.bestFitPathways.map((pathway, index) => (
                <PathwayCard
                  key={`${pathway.title}-${index}`}
                  pathway={pathway}
                  index={index}
                />
              ))}
            </div>
          </section>
        </div>

        <section className="mt-8 rounded-md border border-[#ded9ce] bg-white p-6">
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
                Ongoing signal updates
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#171717]">
                Join the waitlist for the adaptive career operating system.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#59635f]">
                Future updates may include weekly signal briefings, opportunity
                radar, positioning agents, workflow design, and human advisor
                review.
              </p>
            </div>
            <form onSubmit={joinWaitlist} className="grid gap-3 sm:grid-cols-2">
              <Input
                required
                placeholder="Name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                required
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <Button
                type="submit"
                className="h-10 rounded-md bg-[#171717] text-white sm:col-span-2"
              >
                <Mail className="size-4" />
                Join waitlist
              </Button>
              {waitlistState ? (
                <p className="text-sm text-[#59635f] sm:col-span-2">
                  {waitlistState}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
