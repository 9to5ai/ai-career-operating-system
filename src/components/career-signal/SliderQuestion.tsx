"use client";

export function SliderQuestion({
  value,
  onChange,
  minLabel,
  maxLabel,
}: {
  value: number;
  onChange: (value: number) => void;
  minLabel: string;
  maxLabel: string;
}) {
  return (
    <div>
      <div className="flex items-end justify-between">
        <span className="text-sm text-[#59635f]">{minLabel}</span>
        <span className="rounded-md bg-[#171717] px-3 py-2 font-mono text-2xl font-semibold text-white">
          {value}
        </span>
        <span className="max-w-36 text-right text-sm text-[#59635f]">
          {maxLabel}
        </span>
      </div>
      <input
        type="range"
        min={1}
        max={5}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-8 w-full accent-[#315c52]"
      />
      <div className="mt-3 flex justify-between font-mono text-xs text-[#7b8580]">
        {[1, 2, 3, 4, 5].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
