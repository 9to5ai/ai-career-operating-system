import { NextResponse } from "next/server";
import { ZodError } from "zod";

import {
  getSupabaseServiceClient,
  isSupabaseConfigured,
} from "@/lib/supabase/server";
import { waitlistSchema } from "@/lib/career-signal/types";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const payload = waitlistSchema.parse(await request.json());

    if (!isSupabaseConfigured()) {
      return NextResponse.json({
        ok: true,
        stored: false,
        message: "Waitlist captured locally. Configure Supabase to persist it.",
      });
    }

    const supabase = getSupabaseServiceClient();
    const { error } = await supabase.from("waitlist").insert({
      name: payload.name,
      email: payload.email,
      role: payload.role,
      career_status: payload.careerStatus,
      biggest_challenge: payload.biggestChallenge,
    });

    if (error) {
      throw error;
    }

    return NextResponse.json({ ok: true, stored: true });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid waitlist details", issues: error.issues },
        { status: 400 }
      );
    }

    console.error("Waitlist save failed", error);
    return NextResponse.json(
      { error: "Unable to save waitlist details" },
      { status: 500 }
    );
  }
}

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json({
      configured: false,
      waitlist: [],
      message: "Supabase is not configured.",
    });
  }

  const supabase = getSupabaseServiceClient();
  const { data, error } = await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(50);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ configured: true, waitlist: data ?? [] });
}
