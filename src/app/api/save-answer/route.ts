import { NextResponse } from "next/server";
import { z, ZodError } from "zod";

import {
  getSupabaseServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";

export const runtime = "nodejs";

const payloadSchema = z.object({
  sessionId: z.string().min(1),
  currentStep: z.number().int().min(0).max(12),
  scanAnswers: z.record(z.string(), z.unknown()),
});

export async function POST(request: Request) {
  try {
    const payload = payloadSchema.parse(await request.json());

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        ok: true,
        stored: false,
        message: "Answer saved client-side. Configure Supabase to persist it.",
      });
    }

    const supabase = getSupabaseServiceClient();
    const { error } = await supabase.from("career_signal_sessions").upsert(
      {
        id: payload.sessionId,
        status: "draft",
        current_step: payload.currentStep,
        scan_answers_json: payload.scanAnswers,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid answer payload", issues: error.issues },
        { status: 400 }
      );
    }

    console.error("Answer save failed", error);
    return NextResponse.json(
      { error: "Unable to save answer" },
      { status: 500 }
    );
  }
}
