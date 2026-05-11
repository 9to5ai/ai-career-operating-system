import type { ScanAnswers, SignalResponse } from "@/lib/career-signal/types";

export interface SignalAiProvider {
  generateCareerSignal(answers: ScanAnswers): Promise<SignalResponse>;
}
