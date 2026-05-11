"use client";

import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  ChevronRight,
  CircleDot,
  Compass,
  Cpu,
  FileText,
  Gauge,
  Layers3,
  Mail,
  Map,
  Network,
  Radar,
  ShieldCheck,
  Sparkles,
  Target,
  UserRoundCheck,
  Workflow,
} from "lucide-react";
import { FormEvent, ReactNode, useState } from "react";

type IconType = typeof Radar;

const featureCards: Array<{
  title: string;
  description: string;
  icon: IconType;
}> = [
  {
    title: "AI Opportunity Radar",
    description:
      "Spot where AI can create leverage in your role, industry, client work, and next income path before the market makes it obvious.",
    icon: Radar,
  },
  {
    title: "Personal Workflow Designer",
    description:
      "Translate your real work into practical AI-enabled workflows for analysis, strategy, communication, delivery, and decision support.",
    icon: Workflow,
  },
  {
    title: "Career Positioning Agent",
    description:
      "Reframe your experience into sharper narratives for employers, clients, advisory work, consulting, and fractional opportunities.",
    icon: Target,
  },
  {
    title: "Skill Gap Tracker",
    description:
      "Track the capabilities that matter commercially, not just the newest tools, and focus your learning on market relevance.",
    icon: Gauge,
  },
  {
    title: "Weekly Action Plan",
    description:
      "Receive a focused set of next actions so momentum does not depend on hype cycles, scattered tabs, or another unfinished course.",
    icon: CalendarCheck,
  },
  {
    title: "Human-in-the-loop Guidance",
    description:
      "Use agentic systems with strategic oversight, judgment, and accountability while the product matures from MVP into automation.",
    icon: UserRoundCheck,
  },
];

const audienceCards = [
  "Recently redundant or retrenched professionals rebuilding confidence",
  "Corporate leaders and operators worried about AI changing their role",
  "Consultants, coaches, advisors, and fractional executives seeking leverage",
  "Senior knowledge workers who need a practical path beyond generic upskilling",
  "Commercially experienced professionals exploring portfolio income paths",
];

const howItWorks = [
  {
    title: "Map your professional background",
    description:
      "Capture your experience, operating strengths, industry context, risk areas, and income goals.",
  },
  {
    title: "Identify your AI leverage zones",
    description:
      "Prioritise the workflows, offers, and market opportunities where AI can compound your expertise.",
  },
  {
    title: "Build your workflows and positioning",
    description:
      "Turn your experience into AI-supported delivery systems, sharper messaging, and credible next moves.",
  },
  {
    title: "Adapt every week",
    description:
      "Use briefings, action plans, and guided review cycles to keep your career operating system current.",
  },
];

const techLayers = [
  {
    title: "Personal context layer",
    description:
      "A structured profile of your background, goals, strengths, work samples, and evolving career strategy.",
  },
  {
    title: "Agent workflow layer",
    description:
      "Reasoning and orchestration across OpenAI, Claude, Gemini, LangGraph, CrewAI, AutoGen, or lightweight MVP alternatives.",
  },
  {
    title: "Market intelligence layer",
    description:
      "Signals from roles, industries, client demand, and emerging AI use cases to keep recommendations commercially grounded.",
  },
  {
    title: "Execution and accountability layer",
    description:
      "Weekly briefings, automations, task plans, and implementation prompts through tools like n8n, Zapier, Make, Notion, or Airtable.",
  },
  {
    title: "Human strategy layer",
    description:
      "A practical human-in-the-loop model first, with automation increasing only where it improves clarity, quality, and trust.",
  },
];

const foundingOffer = [
  "AI Career Diagnostic",
  "Personal AI Workflow Map",
  "Weekly AI Career Briefing",
  "Career Positioning Review",
  "Agentic Workflow Toolkit",
  "Monthly group implementation session",
];

function ButtonLink({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary:
      "bg-[#101827] text-white shadow-[0_18px_45px_rgba(16,24,39,0.22)] hover:bg-[#1d2b3f]",
    secondary:
      "border border-[#b8c6bd] bg-white text-[#101827] hover:border-[#759a8b] hover:bg-[#f5faf7]",
    light:
      "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/18",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition ${styles[variant]}`}
    >
      {children}
    </a>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-semibold uppercase tracking-[0.18em] ${
            light ? "text-[#9fe0c5]" : "text-[#327c69]"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-semibold tracking-normal sm:text-4xl ${
          light ? "text-white" : "text-[#101827]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-8 sm:text-lg ${
            light ? "text-white/72" : "text-[#53615d]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#dfe8e2] bg-white shadow-[0_30px_80px_rgba(20,32,43,0.14)]">
      <div className="flex items-center justify-between border-b border-[#e7eee9] bg-[#f8fbf9] px-5 py-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#327c69]">
            Live career system
          </p>
          <p className="mt-1 text-sm font-semibold text-[#101827]">
            Executive transition dashboard
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-md bg-[#101827] px-3 py-2 text-xs font-semibold text-white">
          <CircleDot className="h-3.5 w-3.5 text-[#9fe0c5]" />
          Updating weekly
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-lg border border-[#e4ece7] bg-[#fbfdfb] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-[#53615d]">
                Career Relevance Score
              </p>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-5xl font-semibold tracking-normal text-[#101827]">
                  82
                </span>
                <span className="pb-2 text-sm font-semibold text-[#327c69]">
                  +14 pts
                </span>
              </div>
            </div>
            <Gauge className="h-8 w-8 text-[#327c69]" />
          </div>
          <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#e1eae5]">
            <div className="h-full w-[82%] rounded-full bg-[#2f8f78]" />
          </div>
          <p className="mt-4 text-sm leading-6 text-[#5e6d68]">
            Strong commercial foundation. Highest leverage now: AI-enabled
            advisory workflows and positioning around transformation delivery.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <MiniPanel
            title="AI Workflow Opportunities"
            icon={Workflow}
            items={[
              "Board update synthesis",
              "Client discovery agent",
              "Market scan briefing",
            ]}
          />
          <MiniPanel
            title="Weekly Action Plan"
            icon={Map}
            items={[
              "Publish repositioning note",
              "Prototype 1 workflow",
              "Contact 3 warm leads",
            ]}
          />
          <MiniPanel
            title="Market Signals"
            icon={BarChart3}
            items={[
              "AI governance demand rising",
              "Fractional COO searches up",
              "Prompt-only skills commoditising",
            ]}
          />
          <MiniPanel
            title="Positioning Recommendations"
            icon={FileText}
            items={[
              "Lead with operator judgment",
              "Package AI adoption sprint",
              "Show outcomes, not tools",
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function MiniPanel({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: IconType;
  items: string[];
}) {
  return (
    <div className="rounded-lg border border-[#e4ece7] bg-white p-4">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-[#ecf6f1] text-[#327c69]">
          <Icon className="h-4 w-4" />
        </div>
        <p className="text-sm font-semibold text-[#101827]">{title}</p>
      </div>
      <div className="space-y-2">
        {items.map((item) => (
          <div key={item} className="flex gap-2 text-sm leading-5 text-[#5b6964]">
            <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[#327c69]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <form
      id="waitlist"
      onSubmit={handleSubmit}
      className="rounded-lg border border-[#dfe8e2] bg-white p-5 shadow-[0_18px_50px_rgba(21,31,43,0.09)] sm:p-6"
    >
      <div className="mb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#327c69]">
          Founding member waitlist
        </p>
        <h3 className="mt-2 text-2xl font-semibold tracking-normal text-[#101827]">
          Get early access to the AI Career Operating System.
        </h3>
        <p className="mt-3 text-sm leading-6 text-[#5c6965]">
          Share enough context to help shape the first cohort experience. This
          demo form confirms interest locally and can be connected to CRM or
          email automation in the next build.
        </p>
      </div>

      <div className="grid gap-4">
        <label className="grid gap-2 text-sm font-medium text-[#26342f]">
          Name
          <input
            required
            name="name"
            type="text"
            placeholder="Jane Lee"
            className="min-h-12 rounded-md border border-[#cbd8d1] bg-white px-3 text-base outline-none transition placeholder:text-[#9ba8a3] focus:border-[#327c69] focus:ring-4 focus:ring-[#dceee7]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#26342f]">
          Email
          <input
            required
            name="email"
            type="email"
            placeholder="jane@example.com"
            className="min-h-12 rounded-md border border-[#cbd8d1] bg-white px-3 text-base outline-none transition placeholder:text-[#9ba8a3] focus:border-[#327c69] focus:ring-4 focus:ring-[#dceee7]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#26342f]">
          Role or background
          <input
            required
            name="background"
            type="text"
            placeholder="Former GM, consultant, HR leader, finance operator..."
            className="min-h-12 rounded-md border border-[#cbd8d1] bg-white px-3 text-base outline-none transition placeholder:text-[#9ba8a3] focus:border-[#327c69] focus:ring-4 focus:ring-[#dceee7]"
          />
        </label>
        <label className="grid gap-2 text-sm font-medium text-[#26342f]">
          Biggest AI or career challenge
          <textarea
            required
            name="challenge"
            placeholder="What feels uncertain, urgent, or commercially important right now?"
            rows={4}
            className="resize-none rounded-md border border-[#cbd8d1] bg-white px-3 py-3 text-base outline-none transition placeholder:text-[#9ba8a3] focus:border-[#327c69] focus:ring-4 focus:ring-[#dceee7]"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-[#101827] px-5 text-sm font-semibold text-white transition hover:bg-[#1d2b3f]"
      >
        <Mail className="h-4 w-4" />
        Join the Waitlist
      </button>

      {submitted ? (
        <p className="mt-4 rounded-md bg-[#ecf6f1] px-4 py-3 text-sm font-medium text-[#236a59]">
          Thanks. Your interest has been captured for this prototype experience.
        </p>
      ) : null}
    </form>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7faf8] text-[#101827]">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f8fbf9_0%,#eef7f2_48%,#f8f4ea_100%)]">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9fd7c1] to-transparent" />
        <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:px-10">
          <div className="pt-8 lg:pt-0">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#c8d9d1] bg-white/74 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#327c69] shadow-sm">
              <Compass className="h-4 w-4" />
              Career GPS for the AI era
            </div>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold tracking-normal text-[#101827] sm:text-6xl lg:text-7xl">
              Stay valuable in the age of agentic AI.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4d5d58] sm:text-xl">
              For experienced professionals navigating redundancy, career
              uncertainty, or AI disruption, this adaptive system helps you
              reposition, upskill, and build leverage continuously.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#waitlist">
                <Mail className="h-4 w-4" />
                Join the Waitlist
              </ButtonLink>
              <ButtonLink href="#strategy-call" variant="secondary">
                <CalendarCheck className="h-4 w-4" />
                Book a Strategy Call
              </ButtonLink>
            </div>
            <div className="mt-8 grid gap-3 text-sm text-[#52625d] sm:grid-cols-3">
              {[
                "No generic course path",
                "Built around your experience",
                "Human-guided first",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[#327c69]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="pb-8 lg:pb-0">
            <DashboardMockup />
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The problem"
            title="Static AI education goes stale. Careers need adaptive infrastructure."
            description="Prompt packs, templates, and one-time courses can help for a week. Then the tools change, the role expectations shift, and the professional is left trying to translate generic advice into real commercial relevance."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              {
                title: "The market is moving faster than career advice.",
                description:
                  "White-collar work is being redesigned around AI-enabled execution, but most professionals are still using job-search tactics built for a slower market.",
              },
              {
                title: "Experience is valuable, but it needs translation.",
                description:
                  "Years of judgment, stakeholder skill, and industry knowledge can become leverage if it is packaged into AI-native workflows and outcomes.",
              },
              {
                title: "Overwhelm blocks action.",
                description:
                  "The goal is not to chase every tool. The goal is to know which systems matter for your next role, client, or income stream.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-[#e3ebe6] bg-[#fbfdfb] p-6"
              >
                <h3 className="text-xl font-semibold tracking-normal text-[#101827]">
                  {card.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#5b6964]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#327c69]">
              Who it is for
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#101827] sm:text-4xl">
              Built for commercially experienced people who cannot afford to
              drift.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#53615d]">
              The AI Career Operating System is for professionals with judgment,
              context, and hard-won experience who need a practical bridge into
              AI-enabled work and income.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {audienceCards.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-lg border border-[#dfe8e2] bg-white p-5 shadow-sm"
              >
                <BriefcaseBusiness className="mt-1 h-5 w-5 shrink-0 text-[#327c69]" />
                <p className="text-base leading-7 text-[#35433f]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#101827] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="The product"
            title="Your AI-native career operating system."
            description="A living support layer for career reinvention, practical AI workflow design, positioning, and continuous relevance."
            light
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((feature) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-lg border border-white/12 bg-white/[0.055] p-6 text-white shadow-[0_18px_55px_rgba(0,0,0,0.18)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#9fe0c5] text-[#101827]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold tracking-normal">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/68">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="How it works"
            title="From uncertainty to a repeatable adaptation cycle."
            description="The system turns professional experience into structured context, then uses that context to guide opportunity discovery, workflow design, and weekly execution."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {howItWorks.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-lg border border-[#e3ebe6] bg-[#fbfdfb] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#101827] text-sm font-semibold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-normal text-[#101827]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5b6964]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#327c69]">
              Why now
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal text-[#101827] sm:text-4xl">
              The winners will not be the people who know every tool.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#53615d]">
              AI is changing white-collar work, but most professionals are still
              trying to catch up with static learning. The advantage belongs to
              people who can keep adapting their workflows, market positioning,
              and income strategy as expectations change.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#waitlist">
                <ArrowRight className="h-4 w-4" />
                Join the Waitlist
              </ButtonLink>
              <ButtonLink href="#strategy-call" variant="secondary">
                <CalendarCheck className="h-4 w-4" />
                Book a Strategy Call
              </ButtonLink>
            </div>
          </div>
          <div className="rounded-lg border border-[#dfe8e2] bg-white p-6 shadow-[0_20px_65px_rgba(16,24,39,0.1)]">
            <div className="grid gap-4">
              {[
                ["Tool familiarity", "Useful, but quickly commoditised."],
                ["Workflow leverage", "Turns judgment into repeatable output."],
                ["Market relevance", "Connects capability to paid demand."],
                ["Adaptation rhythm", "Keeps your direction current."],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-start justify-between gap-5 border-b border-[#edf2ef] pb-4 last:border-0 last:pb-0"
                >
                  <p className="font-semibold text-[#101827]">{label}</p>
                  <p className="max-w-xs text-right text-sm leading-6 text-[#5b6964]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Technology approach"
            title="Agentic AI-native infrastructure, built pragmatically."
            description="The product can start as a lightweight human-in-the-loop MVP, then become more automated as the workflows, data model, and user value are proven."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-5">
            {techLayers.map((layer) => (
              <article
                key={layer.title}
                className="rounded-lg border border-[#e3ebe6] bg-[#fbfdfb] p-5"
              >
                <Layers3 className="h-6 w-6 text-[#327c69]" />
                <h3 className="mt-4 text-base font-semibold tracking-normal text-[#101827]">
                  {layer.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#5b6964]">
                  {layer.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 rounded-lg border border-[#dfe8e2] bg-[#f8fbf9] p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <h3 className="flex items-center gap-2 text-xl font-semibold tracking-normal text-[#101827]">
                  <Cpu className="h-5 w-5 text-[#327c69]" />
                  Practical MVP stack options
                </h3>
                <p className="mt-3 text-base leading-7 text-[#5b6964]">
                  Next.js or Astro for the front end, Supabase or PostgreSQL for
                  profiles and structured memory, model APIs for reasoning,
                  vector retrieval for personal knowledge, and email automation
                  for weekly briefings.
                </p>
              </div>
              <div className="grid gap-2 text-sm text-[#35433f] sm:grid-cols-2 lg:min-w-[420px]">
                {[
                  "OpenAI / Claude / Gemini",
                  "LangGraph / CrewAI / AutoGen",
                  "n8n / Zapier / Make",
                  "Notion / Airtable MVP layer",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#327c69]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Different by design"
            title="Not another AI course. A career system that keeps adapting."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-[#e5ded2] bg-[#fffaf1] p-6">
              <h3 className="text-2xl font-semibold tracking-normal text-[#101827]">
                Generic AI course
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  "One-time content",
                  "Static lessons",
                  "Same for everyone",
                  "Quickly outdated",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-[#635a4a]">
                    <CircleDot className="h-4 w-4 text-[#b8862d]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
            <div className="rounded-lg border border-[#b7d9cc] bg-[#ecf6f1] p-6">
              <h3 className="text-2xl font-semibold tracking-normal text-[#101827]">
                AI Career Operating System
              </h3>
              <div className="mt-6 space-y-3">
                {[
                  "Dynamic",
                  "Personalised",
                  "Continuously updated",
                  "Agentic workflow-driven",
                  "Built around career outcomes",
                ].map((item) => (
                  <p key={item} className="flex items-center gap-3 text-[#29453b]">
                    <ShieldCheck className="h-4 w-4 text-[#327c69]" />
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="strategy-call"
        className="bg-[#101827] px-5 py-20 text-white sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#9fe0c5]">
              Founding offer
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-normal sm:text-4xl">
              Join the Founding Member Waitlist.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Early members will help shape the diagnostic, workflow maps,
              briefing rhythm, and implementation support before the system
              becomes more automated.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {foundingOffer.map((item) => (
                <div key={item} className="flex items-center gap-3 text-white/82">
                  <Check className="h-4 w-4 text-[#9fe0c5]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <ButtonLink href="mailto:hello@9to5ai.co?subject=AI Career Operating System strategy call" variant="light">
                <CalendarCheck className="h-4 w-4" />
                Book a Strategy Call
              </ButtonLink>
            </div>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#f8fbf9_0%,#eef7f2_52%,#f8f4ea_100%)] px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Sparkles className="mx-auto h-8 w-8 text-[#327c69]" />
          <h2 className="mt-5 text-3xl font-semibold tracking-normal text-[#101827] sm:text-5xl">
            The future of work will not wait for you to catch up.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#53615d]">
            Build a career system that adapts with it, grounded in your
            experience, aimed at commercial relevance, and designed for the
            agentic AI era.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="#waitlist">
              <Mail className="h-4 w-4" />
              Join the Waitlist
            </ButtonLink>
            <ButtonLink href="mailto:hello@9to5ai.co?subject=AI Career Operating System strategy call" variant="secondary">
              <CalendarCheck className="h-4 w-4" />
              Book a Strategy Call
            </ButtonLink>
          </div>
        </div>
      </section>

      <footer className="bg-white px-5 py-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#5b6964] sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 font-semibold text-[#101827]">
            <Network className="h-4 w-4 text-[#327c69]" />
            AI Career Operating System
          </div>
          <p>AI-enabled career strategy for experienced professionals.</p>
        </div>
      </footer>
    </main>
  );
}
