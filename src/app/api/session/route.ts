import { NextResponse } from "next/server";
import { ZodError } from "zod";

import {
  getSupabaseServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { sessionPayloadSchema } from "@/lib/career-signal/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = sessionPayloadSchema.parse(await request.json());
    const sessionId = payload.sessionId ?? crypto.randomUUID();

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        ok: true,
        stored: false,
        sessionId,
        message: "Session kept client-side. Configure Supabase to persist it.",
      });
    }

    const supabase = getSupabaseServiceClient();

    let userId: string | null = null;
    if (payload.email) {
      const { data: existingUser } = await supabase
        .from("users")
        .select("id")
        .eq("email", payload.email)
        .maybeSingle();

      if (existingUser?.id) {
        userId = existingUser.id;
      } else {
        const { data: user, error: userError } = await supabase
          .from("users")
          .insert({
            email: payload.email,
            name: payload.name ?? "",
          })
          .select("id")
          .single();

        if (userError) {
          throw userError;
        }

        userId = user.id;
      }
    }

    const { error } = await supabase.from("career_signal_sessions").upsert(
      {
        id: sessionId,
        user_id: userId,
        status: payload.status,
        current_step: payload.currentStep,
        scan_answers_json: payload.scanAnswers,
        generated_signal_markdown: payload.signalMarkdown,
        generated_signal_json: payload.signalJson,
        dashboard_json: payload.dashboardJson,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "id" }
    );

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true, stored: true, sessionId });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid session payload", issues: error.issues },
        { status: 400 }
      );
    }

    console.error("Session save failed", error);
    return NextResponse.json(
      { error: "Unable to save session" },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      configured: false,
      sessions: [],
      message: "Supabase is not configured.",
    });
  }

  const supabase = getSupabaseServiceClient();
  const { data, error } = await supabase
    .from("career_signal_sessions")
    .select("id,status,current_step,created_at,updated_at,users(email,name)")
    .order("updated_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ configured: true, sessions: data ?? [] });
}
