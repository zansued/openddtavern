"use client";

type TabsProps = {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
};

export default function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={`rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] transition ${
              isActive
                ? "bg-tavern-accent text-slate-950"
                : "border border-white/10 bg-tavern-card text-tavern-muted hover:text-white"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
