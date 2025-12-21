type AbilityCardProps = {
  label: string;
  score: number;
  modifier: number;
};

export default function AbilityCard({ label, score, modifier }: AbilityCardProps) {
  const formattedModifier = modifier >= 0 ? `+${modifier}` : `${modifier}`;

  return (
    <div className="rounded-xl border border-white/10 bg-tavern-card p-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
        {label}
      </p>
      <p className="mt-2 text-3xl font-semibold text-white">{score}</p>
      <p className="mt-1 text-sm text-tavern-accent">{formattedModifier}</p>
    </div>
  );
}
