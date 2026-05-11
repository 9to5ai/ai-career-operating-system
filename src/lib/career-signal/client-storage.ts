"use client";

import type { ScanAnswers, SignalResponse } from "./types";

const ANSWERS_KEY = "career-signal.answers";
const RESULT_KEY = "career-signal.result";
const SESSION_KEY = "career-signal.session-id";

let cachedResultRaw: string | null = null;
let cachedResult: SignalResponse | null = null;

export function loadStoredAnswers(): Partial<ScanAnswers> {
  try {
    const value = window.localStorage.getItem(ANSWERS_KEY);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

export function storeAnswers(answers: Partial<ScanAnswers>) {
  window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(answers));
}

export function loadStoredResult(): SignalResponse | null {
  try {
    const value = window.localStorage.getItem(RESULT_KEY);
    if (value === cachedResultRaw) {
      return cachedResult;
    }

    cachedResultRaw = value;
    cachedResult = value ? JSON.parse(value) : null;
    return cachedResult;
  } catch {
    return null;
  }
}

export function storeResult(result: SignalResponse) {
  window.localStorage.setItem(RESULT_KEY, JSON.stringify(result));
  window.dispatchEvent(new Event("career-signal-storage"));
}

export function subscribeToStoredResult(callback: () => void) {
  window.addEventListener("career-signal-storage", callback);
  window.addEventListener("storage", callback);

  return () => {
    window.removeEventListener("career-signal-storage", callback);
    window.removeEventListener("storage", callback);
  };
}

export function getSessionId() {
  const existing = window.localStorage.getItem(SESSION_KEY);
  if (existing) {
    return existing;
  }
  const id = crypto.randomUUID();
  window.localStorage.setItem(SESSION_KEY, id);
  return id;
}
