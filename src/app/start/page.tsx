import Link from "next/link";
import { ArrowRight, Clock, LockKeyhole, MousePointer2 } from "lucide-react";

export default function StartPage() {
  const cards = [
    {
      icon: Clock,
      title: "Under 5 minutes",
      copy: "No more than 12 steps, with smart defaults and minimal typing.",
    },
    {
      icon: MousePointer2,
      title: "Tap through the scan",
      copy: "Multiple choice, sliders, selectable cards, and short optional notes.",
    },
    {
      icon: LockKeyhole,
      title: "Sensitive by default",
      copy: "Your career information may be sensitive. We only use your answers to generate your Career Signal Map.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-10 sm:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            Career Signal Scan
          </p>
          <h1 className="mt-4 max-w-3xl text-5xl font-semibold leading-tight text-[#171717]">
            Five minutes. Mostly tap/select. Enough signal to choose the next
            useful test.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#59635f]">
            This scan is designed for experienced professionals who do not want
            a long form, a personality label, or generic AI advice. Let&apos;s
            find the signal.
          </p>
          <Link
            href="/scan"
            className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#171717] px-5 text-sm font-semibold text-white hover:bg-[#2b2b2b]"
          >
            Start the 5-Minute Scan
            <ArrowRight className="size-4" />
          </Link>
        </section>

        <section className="rounded-lg border border-[#ded9ce] bg-white p-6">
          <div className="grid gap-4">
            {cards.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="rounded-md border border-[#e4e1d8] p-5"
              >
                <Icon className="size-5 text-[#315c52]" />
                <h2 className="mt-4 text-lg font-semibold text-[#171717]">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-[#59635f]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#7b8580]">
            This is not financial, legal, psychological, or employment advice.
            It is a strategic reflection and planning tool.
          </p>
        </section>
      </div>
    </main>
  );
}
