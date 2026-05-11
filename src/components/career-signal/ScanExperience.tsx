"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  getSessionId,
  loadStoredAnswers,
  storeAnswers,
  storeResult,
} from "@/lib/career-signal/client-storage";
import {
  initialScanAnswers,
  scanSteps,
  type ScanStep,
} from "@/lib/career-signal/scan";
import {
  scanAnswersSchema,
  type ScanAnswers,
} from "@/lib/career-signal/types";

import { MultiSelectGrid, ScanCard, SelectableCard } from "./ScanCard";
import { OptionalTextInput } from "./OptionalTextInput";
import { ProgressBar } from "./ProgressBar";
import { SliderQuestion } from "./SliderQuestion";

function isAnswered(step: ScanStep, answers: Partial<ScanAnswers>) {
  if (step.type === "text") {
    return true;
  }

  const value = answers[step.id];
  if (step.type === "slider") {
    return typeof value === "number";
  }

  if (step.type === "multi") {
    return Array.isArray(value) && value.length > 0;
  }

  return typeof value === "string" && value.length > 0;
}

export function ScanExperience() {
  const router = useRouter();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<ScanAnswers>>(() =>
    typeof window === "undefined"
      ? initialScanAnswers
      : { ...initialScanAnswers, ...loadStoredAnswers() }
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const step = scanSteps[stepIndex];
  const total = scanSteps.length;
  const canContinue = useMemo(() => isAnswered(step, answers), [answers, step]);

  useEffect(() => {
    storeAnswers(answers);
  }, [answers]);

  function updateAnswer<Key extends keyof ScanAnswers>(
    key: Key,
    value: ScanAnswers[Key]
  ) {
    setAnswers((current) => ({ ...current, [key]: value }));
  }

  function toggleMulti(id: keyof ScanAnswers, option: string, max?: number) {
    const current = Array.isArray(answers[id])
      ? ([...(answers[id] as string[])] as string[])
      : [];
    const next = current.includes(option)
      ? current.filter((item) => item !== option)
      : max && current.length >= max
        ? current
        : [...current, option];

    updateAnswer(id, next as ScanAnswers[typeof id]);
  }

  async function saveDraft(nextStep: number) {
    try {
      await fetch("/api/save-answer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: getSessionId(),
          currentStep: nextStep,
          scanAnswers: answers,
        }),
      });
    } catch {
      // Client-side storage remains the MVP fallback when persistence is absent.
    }
  }

  async function generateSignal() {
    setError("");
    setIsGenerating(true);

    try {
      const parsed = scanAnswersSchema.parse(answers);
      const response = await fetch("/api/generate-signal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answers: parsed }),
      });

      if (!response.ok) {
        throw new Error("Generation failed");
      }

      const result = await response.json();
      storeResult(result);

      await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId: getSessionId(),
          status: "generated",
          currentStep: total,
          scanAnswers: parsed,
          signalMarkdown: result.signalMarkdown,
          signalJson: result.signalJson,
          dashboardJson: result.dashboardJson,
        }),
      }).catch(() => undefined);

      router.push("/dashboard");
    } catch {
      setError("We could not generate the map yet. Check the required scan steps and try again.");
      setIsGenerating(false);
    }
  }

  function goNext() {
    if (stepIndex === total - 1) {
      void generateSignal();
      return;
    }

    const next = stepIndex + 1;
    setStepIndex(next);
    void saveDraft(next);
  }

  function renderStep() {
    if (step.type === "single") {
      return (
        <div className="space-y-3">
          {step.options.map((option) => (
            <SelectableCard
              key={option}
              selected={answers[step.id] === option}
              onClick={() => updateAnswer(step.id, option)}
            >
              {option}
            </SelectableCard>
          ))}
          {step.optionalText ? (
            <div className="pt-3">
              <OptionalTextInput
                label={step.optionalText.label}
                placeholder={step.optionalText.placeholder}
                value={(answers[step.optionalText.id] as string) ?? ""}
                onChange={(value) =>
                  updateAnswer(
                    step.optionalText!.id,
                    value as ScanAnswers[typeof step.optionalText.id]
                  )
                }
              />
            </div>
          ) : null}
        </div>
      );
    }

    if (step.type === "multi") {
      const current = Array.isArray(answers[step.id])
        ? (answers[step.id] as string[])
        : [];

      return (
        <MultiSelectGrid>
          {step.options.map((option) => {
            const selected = current.includes(option);
            const disabled = Boolean(
              step.max && current.length >= step.max && !selected
            );

            return (
              <SelectableCard
                key={option}
                selected={selected}
                disabled={disabled}
                onClick={() => toggleMulti(step.id, option, step.max)}
              >
                {option}
              </SelectableCard>
            );
          })}
        </MultiSelectGrid>
      );
    }

    if (step.type === "slider") {
      return (
        <SliderQuestion
          value={(answers.aiComfort as number) ?? 3}
          minLabel={step.minLabel}
          maxLabel={step.maxLabel}
          onChange={(value) => updateAnswer("aiComfort", value)}
        />
      );
    }

    return (
      <OptionalTextInput
        label="Optional short context"
        placeholder={step.placeholder}
        value={(answers[step.id] as string) ?? ""}
        maxLength={step.maxLength}
        onChange={(value) =>
          updateAnswer(step.id, value as ScanAnswers[typeof step.id])
        }
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f2] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6">
          <ProgressBar step={stepIndex + 1} total={total} />
        </div>

        <ScanCard>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
            Career Signal Scan
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight text-[#171717]">
            {step.question}
          </h1>
          {step.helper ? (
            <p className="mt-3 text-sm leading-6 text-[#59635f]">
              {step.helper}
            </p>
          ) : null}
          <div className="mt-7">{renderStep()}</div>

          {error ? (
            <p className="mt-5 rounded-md bg-[#fff3e0] p-3 text-sm text-[#7a4e12]">
              {error}
            </p>
          ) : null}

          <div className="mt-8 flex items-center justify-between gap-3">
            <Button
              type="button"
              variant="outline"
              className="h-10 rounded-md"
              disabled={stepIndex === 0 || isGenerating}
              onClick={() => setStepIndex((current) => Math.max(0, current - 1))}
            >
              <ArrowLeft className="size-4" />
              Back
            </Button>
            <Button
              type="button"
              className="h-10 rounded-md bg-[#171717] px-5 text-white hover:bg-[#2b2b2b]"
              disabled={!canContinue || isGenerating}
              onClick={goNext}
            >
              {isGenerating ? (
                <>
                  <Loader2 className="size-4 animate-spin" />
                  Finding signal
                </>
              ) : stepIndex === total - 1 ? (
                "Generate Signal Map"
              ) : (
                <>
                  Continue
                  <ArrowRight className="size-4" />
                </>
              )}
            </Button>
          </div>
        </ScanCard>

        <div className="mt-5 rounded-md border border-[#ded9ce] bg-white p-4 text-sm leading-6 text-[#59635f]">
          <p>
            Your career information may be sensitive. We only use your answers
            to generate your Career Signal Map.
          </p>
          <p className="mt-2">
            This is not financial, legal, psychological, or employment advice.
            It is a strategic reflection and planning tool.
          </p>
        </div>
      </div>
    </div>
  );
}
