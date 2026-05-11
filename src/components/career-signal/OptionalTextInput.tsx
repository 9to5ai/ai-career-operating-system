"use client";

import { Textarea } from "@/components/ui/textarea";

export function OptionalTextInput({
  label,
  value,
  placeholder,
  maxLength = 280,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  maxLength?: number;
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-[#343434]">{label}</span>
      <Textarea
        value={value}
        maxLength={maxLength}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 min-h-24 resize-none rounded-md"
      />
      <span className="mt-1 block text-right text-xs text-[#7b8580]">
        {value.length}/{maxLength}
      </span>
    </label>
  );
}
