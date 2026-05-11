"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import {
  loadStoredResult,
  subscribeToStoredResult,
} from "@/lib/career-signal/client-storage";

import { ExportButtons } from "./ExportButtons";
import { SignalMapViewer } from "./SignalMapViewer";

export function SignalMapPageClient() {
  const result = useSyncExternalStore(
    subscribeToStoredResult,
    loadStoredResult,
    () => null
  );

  if (!result) {
    return (
      <main className="min-h-screen bg-[#f8f7f2] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-2xl rounded-md border border-[#ded9ce] bg-white p-8">
          <h1 className="text-3xl font-semibold text-[#171717]">
            No report available yet.
          </h1>
          <p className="mt-4 text-[#59635f]">
            Complete the scan to generate your Career Signal Map.
          </p>
          <Link
            href="/scan"
            className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-[#171717] px-4 text-sm font-semibold text-white"
          >
            Start scan
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-8 sm:px-8 print:bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
              Exportable report
            </p>
            <h1 className="mt-3 text-4xl font-semibold text-[#171717]">
              Career Signal Map
            </h1>
          </div>
          <ExportButtons result={result} />
        </div>
        <div className="rounded-md border border-[#ded9ce] bg-white p-6 print:border-0 print:p-0">
          <SignalMapViewer result={result} />
        </div>
      </div>
    </main>
  );
}
