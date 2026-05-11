import { BarChart3, BrainCircuit, Gauge, Radar, ShieldCheck } from "lucide-react";

import { CTAButton } from "./CTAButton";

export function Hero() {
  const metrics = [
    { label: "Career Clarity", score: 68, icon: BarChart3 },
    { label: "AI Leverage", score: 74, icon: BrainCircuit },
    { label: "Market Relevance", score: 81, icon: ShieldCheck },
    { label: "Urgency", score: 63, icon: Gauge },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8f7f2]">
      <div className="absolute inset-x-0 top-0 h-px bg-[#d8d3c6]" />
      <div className="mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:py-24">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#c8d3d0] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            <Radar className="size-3.5" />
            Career Signal
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-normal text-[#171717] sm:text-6xl lg:text-7xl">
            Find your career signal in the age of AI.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#505854] sm:text-lg">
            A 5-minute AI-powered scan for experienced professionals navigating
            redundancy, career uncertainty, or AI disruption. Discover where
            your experience still has leverage, where AI can amplify you, and
            what moves to test next.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="/start">Start the 5-Minute Scan</CTAButton>
            <CTAButton href="#how-it-works" variant="secondary">
              See How It Works
            </CTAButton>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm text-[#59635f] sm:grid-cols-3">
            {["Minimal typing", "Directional signals", "Exportable report"].map(
              (item) => (
                <div
                  key={item}
                  className="rounded-md border border-[#dad7ce] bg-white/70 px-3 py-2"
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        <div className="relative min-h-[560px] overflow-hidden rounded-lg border border-[#d8d3c6] bg-[#171717] p-5 shadow-2xl">
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(#ffffff_1px,transparent_1px),linear-gradient(90deg,#ffffff_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="relative flex h-full flex-col justify-between gap-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-white">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#9dd8c4]">
                  Signal map preview
                </p>
                <p className="mt-1 text-sm text-white/62">
                  Directional, practical, exportable
                </p>
              </div>
              <Gauge className="size-5 text-[#9dd8c4]" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {metrics.map(({ label, score, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-md border border-white/10 bg-white/[0.06] p-4 text-white"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm text-white/64">{label}</p>
                    <Icon className="size-4 text-[#f0c36a]" />
                  </div>
                  <p className="mt-4 text-4xl font-semibold">{score}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[#9dd8c4]"
                      style={{ width: `${score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-md border border-white/10 bg-[#f8f7f2] p-5 text-[#171717]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
                Recommended next experiment
              </p>
              <p className="mt-3 text-xl font-semibold leading-snug">
                Test an AI-enabled advisory positioning statement with 5 market
                contacts in the next 14 days.
              </p>
              <p className="mt-4 text-sm leading-6 text-[#58615d]">
                The goal is not to predict the future perfectly. It is to choose
                the next useful test.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
