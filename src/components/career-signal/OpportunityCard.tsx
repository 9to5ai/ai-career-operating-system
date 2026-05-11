export function OpportunityCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-[#e4e1d8] bg-white p-4 text-sm leading-6 text-[#343434]">
      {children}
    </div>
  );
}
