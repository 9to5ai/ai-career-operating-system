import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { GeminiSignalProvider } from "@/lib/ai/gemini";
import { createFallbackSignal } from "@/lib/career-signal/scan";
import {
  scanAnswersSchema,
  signalResponseSchema,
} from "@/lib/career-signal/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const answers = scanAnswersSchema.parse(body.answers ?? body);

    try {
      const provider = new GeminiSignalProvider();
      const result = await provider.generateCareerSignal(answers);

      return NextResponse.json(signalResponseSchema.parse(result));
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      const log = message.includes("GEMINI_API_KEY")
        ? console.warn
        : console.error;

      log("Gemini generation fallback used", error);

      const fallback = createFallbackSignal(answers);
      return NextResponse.json({
        ...fallback,
        warning:
          "Gemini was unavailable or returned malformed JSON, so a structured fallback signal was generated.",
      });
    }
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: "Invalid scan answers",
          issues: error.issues,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        error: "Unable to generate Career Signal Map",
      },
      { status: 500 }
    );
  }
}
