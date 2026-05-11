import { Hero } from "@/components/career-signal/Hero";
import {
  ComparisonSection,
  FinalCTA,
  FutureVisionSection,
  HowItWorks,
  ProblemSection,
  TechnologySection,
  WhatYouGetSection,
  WhyNowSection,
} from "@/components/career-signal/landing-sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <WhyNowSection />
      <WhatYouGetSection />
      <HowItWorks />
      <ComparisonSection />
      <FutureVisionSection />
      <TechnologySection />
      <FinalCTA />
    </main>
  );
}
