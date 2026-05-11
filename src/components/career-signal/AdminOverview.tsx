"use client";

import { useEffect, useState } from "react";

type AdminData = {
  configured?: boolean;
  waitlist?: unknown[];
  sessions?: unknown[];
  message?: string;
};

export function AdminOverview() {
  const [waitlist, setWaitlist] = useState<AdminData | null>(null);
  const [sessions, setSessions] = useState<AdminData | null>(null);

  useEffect(() => {
    fetch("/api/waitlist")
      .then((response) => response.json())
      .then(setWaitlist)
      .catch(() => setWaitlist({ configured: false, message: "Unable to load" }));

    fetch("/api/session")
      .then((response) => response.json())
      .then(setSessions)
      .catch(() => setSessions({ configured: false, message: "Unable to load" }));
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f7f2] px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#315c52]">
          Admin
        </p>
        <h1 className="mt-3 text-4xl font-semibold text-[#171717]">
          Career Signal operations
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#59635f]">
          Placeholder admin page for MVP review. Add real authentication before
          exposing this route in production.
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <AdminPanel title="Waitlist" data={waitlist} field="waitlist" />
          <AdminPanel title="Sessions" data={sessions} field="sessions" />
        </div>
      </div>
    </main>
  );
}

function AdminPanel({
  title,
  data,
  field,
}: {
  title: string;
  data: AdminData | null;
  field: "waitlist" | "sessions";
}) {
  const rows = data?.[field] ?? [];

  return (
    <section className="rounded-md border border-[#ded9ce] bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#171717]">{title}</h2>
        <span className="rounded-md bg-[#f0eee6] px-2 py-1 font-mono text-xs text-[#59635f]">
          {data?.configured ? "Supabase" : "Not configured"}
        </span>
      </div>
      <p className="mt-3 text-sm text-[#59635f]">
        {data?.message ?? `${rows.length} recent records`}
      </p>
      <pre className="mt-4 max-h-[420px] overflow-auto rounded-md bg-[#171717] p-4 text-xs leading-5 text-white/80">
        {JSON.stringify(rows, null, 2)}
      </pre>
    </section>
  );
}
