export function ActionPlanList({ actions }: { actions: string[] }) {
  return (
    <ol className="space-y-3">
      {actions.map((action, index) => (
        <li
          key={`${action}-${index}`}
          className="flex gap-3 rounded-md border border-[#e4e1d8] bg-white p-4 text-sm leading-6 text-[#343434]"
        >
          <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-[#171717] font-mono text-xs text-white">
            {index + 1}
          </span>
          <span>{action}</span>
        </li>
      ))}
    </ol>
  );
}
