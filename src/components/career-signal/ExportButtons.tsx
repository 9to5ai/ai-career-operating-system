"use client";

import { Clipboard, Download, Printer } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { SignalResponse } from "@/lib/career-signal/types";

export function ExportButtons({ result }: { result: SignalResponse }) {
  function download(filename: string, body: string, type: string) {
    const blob = new Blob([body], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-wrap gap-2 print:hidden">
      <Button
        type="button"
        variant="outline"
        className="h-9 rounded-md"
        onClick={() => navigator.clipboard.writeText(result.signalMarkdown)}
      >
        <Clipboard className="size-4" />
        Copy markdown
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-9 rounded-md"
        onClick={() =>
          download(
            "career-signal-map.md",
            result.signalMarkdown,
            "text/markdown"
          )
        }
      >
        <Download className="size-4" />
        Download markdown
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-9 rounded-md"
        onClick={() =>
          download(
            "career-signal-map.json",
            JSON.stringify(result, null, 2),
            "application/json"
          )
        }
      >
        <Download className="size-4" />
        Download JSON
      </Button>
      <Button
        type="button"
        variant="outline"
        className="h-9 rounded-md"
        onClick={() => window.print()}
      >
        <Printer className="size-4" />
        Print
      </Button>
    </div>
  );
}
