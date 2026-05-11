import {
  BrainCircuit,
  Check,
  Compass,
  FileText,
  Layers3,
  LineChart,
  Radar,
  Workflow,
} from "lucide-react";

import { CTAButton } from "./CTAButton";

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-normal text-[#171717] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[#59635f]">{description}</p>
      ) : null}
    </div>
  );
}

export function ProblemSection() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="The problem"
          title="Most career advice is too slow, too generic, or built for the old world of work."
          description="Most AI courses teach tools, not career adaptation. Most surveys ask too many questions and return shallow answers. Career Signal quickly separates noise from signal and identifies practical next moves based on your experience, goals, constraints, and AI readiness."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            "Your experience still has value. The question is where it compounds next.",
            "This is not about chasing every AI tool. It is about building adaptive leverage.",
            "You do not need to answer everything. We just need enough to find useful patterns.",
          ].map((item) => (
            <div key={item} className="rounded-md border border-[#e4e1d8] p-5">
              <Check className="mb-5 size-5 text-[#315c52]" />
              <p className="text-lg font-medium leading-7 text-[#252525]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhyNowSection() {
  return (
    <section className="bg-[#171717] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Why now"
          title="AI is changing white-collar work, but not every professional needs to become technical."
          description="The winners will understand where their experience still compounds, which workflows AI can amplify, what roles or income paths are becoming more valuable, and how to reposition before the market forces them to."
        />
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            "Experience that compounds",
            "AI-amplified workflows",
            "More valuable income paths",
            "Repositioning before pressure",
          ].map((item) => (
            <div
              key={item}
              className="rounded-md border border-white/10 bg-white/[0.06] p-5"
            >
              <p className="text-lg font-semibold text-white">{item}</p>
              <p className="mt-3 text-sm leading-6 text-white/62">
                A directional signal to test, not a promise or diagnosis.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatYouGetSection() {
  const items = [
    "Career Signal Summary",
    "AI Leverage Score",
    "Market Relevance Score",
    "Career Risk Signals",
    "Strongest Transferable Strengths",
    "Best-Fit Career Pathways",
    "AI Workflow Opportunities",
    "7-Day Action Plan",
    "Suggested Positioning Statement",
    "Recommended Next Experiment",
  ];

  return (
    <section className="bg-[#f8f7f2] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="What you get"
          title="A Career Signal Map built for action."
          description="The output is designed to help you decide what to test next, not label your personality or sell you a course."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <div
              key={item}
              className="rounded-md border border-[#ded9ce] bg-white px-4 py-4 text-sm font-medium text-[#252525]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    "Answer a fast 5-minute scan",
    "AI identifies your strongest career signals",
    "Receive your personalised Career Signal Map",
    "Use it to decide what to test next",
    "Optionally join the waitlist for ongoing weekly signal updates",
  ];

  return (
    <section id="how-it-works" className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="How it works"
          title="Tap through a strategic scan. Leave with a clearer next move."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className="rounded-md border border-[#e4e1d8] p-5">
              <p className="font-mono text-sm text-[#315c52]">
                Step {index + 1}
              </p>
              <p className="mt-4 text-lg font-semibold leading-7 text-[#252525]">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ComparisonSection() {
  return (
    <section className="bg-[#f8f7f2] px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Different by design"
          title="Not a long survey. Not a generic readiness score."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <div className="rounded-md border border-[#ded9ce] bg-white p-6">
            <h3 className="text-xl font-semibold text-[#171717]">
              Traditional Career Survey
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-[#59635f]">
              {[
                "Long forms",
                "Too much typing",
                "Generic personality labels",
                "Static PDF",
                "No AI context",
                "No next action",
              ].map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-[#315c52]/30 bg-[#171717] p-6 text-white">
            <h3 className="text-xl font-semibold">Career Signal</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/70">
              {[
                "Under 5 minutes",
                "Mostly tap/select",
                "Personalised AI interpretation",
                "Strategic career map",
                "Action-focused",
                "Built for ongoing adaptation",
              ].map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FutureVisionSection() {
  const features = [
    { title: "Weekly AI Career Signal Briefing", icon: Radar },
    { title: "Opportunity Radar", icon: LineChart },
    { title: "LinkedIn Positioning Agent", icon: Compass },
    { title: "Resume Repositioning Agent", icon: FileText },
    { title: "AI Workflow Designer", icon: Workflow },
    { title: "Consulting Pathway Builder", icon: Layers3 },
    { title: "Skill Gap Tracker", icon: BrainCircuit },
    { title: "Human-in-the-loop strategy review", icon: Check },
  ];

  return (
    <section className="bg-white px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Future vision"
          title="A first step toward an adaptive career operating system."
          description="Career Signal begins with a fast scan. Over time, the same context can power weekly briefings, opportunity mapping, positioning agents, workflow design, and human advisor review."
        />
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="rounded-md border border-[#e4e1d8] p-4"
            >
              <Icon className="size-5 text-[#315c52]" />
              <p className="mt-4 text-sm font-semibold text-[#252525]">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TechnologySection() {
  const layers = [
    "Identity Signal Layer",
    "Career Context Layer",
    "Interpretation Layer",
    "Opportunity Layer",
    "Action Layer",
    "Future Agent Layer",
  ];

  return (
    <section className="bg-[#171717] px-5 py-20 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Architecture"
          title="Built as an AI-native context system, not a static quiz."
          description="The MVP starts as a human-in-the-loop AI system and can later evolve into a more agentic platform."
        />
        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {layers.map((layer) => (
            <div
              key={layer}
              className="rounded-md border border-white/10 bg-white/[0.06] p-5"
            >
              <p className="text-lg font-semibold text-white">{layer}</p>
              <p className="mt-3 text-sm leading-6 text-white/62">
                Structured context that can support future personalised agents
                while keeping the MVP focused and fast.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="bg-[#f0eee6] px-5 py-20 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            Let&apos;s find the signal
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight text-[#171717]">
            You don&apos;t need more noise. You need a clearer signal.
          </h2>
        </div>
        <CTAButton href="/start">Start the 5-Minute Scan</CTAButton>
      </div>
    </section>
  );
}
