import { GoogleGenAI } from "@google/genai";

import type { SignalAiProvider } from "./provider";
import { buildCareerSignalPrompt } from "./prompts/careerSignalPrompt";
import { signalResponseSchema, type ScanAnswers } from "@/lib/career-signal/types";

let client: GoogleGenAI | null = null;

function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured");
  }

  if (!client) {
    client = new GoogleGenAI({ apiKey });
  }

  return client;
}

function parseJsonResponse(text: string) {
  const trimmed = text.trim();
  const withoutFence = trimmed
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "");

  return JSON.parse(withoutFence);
}

export class GeminiSignalProvider implements SignalAiProvider {
  async generateCareerSignal(answers: ScanAnswers) {
    const model = process.env.GEMINI_MODEL || "gemini-1.5-pro-latest";
    const ai = getGeminiClient();

    const response = await ai.models.generateContent({
      model,
      contents: buildCareerSignalPrompt(answers),
      config: {
        responseMimeType: "application/json",
        temperature: 0.35,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error("Gemini returned an empty response");
    }

    return signalResponseSchema.parse(parseJsonResponse(text));
  }
}
