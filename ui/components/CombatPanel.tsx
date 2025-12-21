type Attack = {
  name: string;
  bonus: string;
  damage: string;
};

type CombatPanelProps = {
  initiativeBonus: number;
  speed: string;
  attacks: Attack[];
};

export default function CombatPanel({
  initiativeBonus,
  speed,
  attacks
}: CombatPanelProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
            Iniciativa
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {initiativeBonus >= 0 ? `+${initiativeBonus}` : initiativeBonus}
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
            Deslocamento
          </p>
          <p className="mt-2 text-xl font-semibold text-white">{speed}</p>
        </div>
      </div>
      <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
        <h3 className="text-sm font-semibold text-white">Ataques</h3>
        <ul className="mt-3 space-y-2 text-sm text-tavern-muted">
          {attacks.map((attack) => (
            <li key={attack.name} className="flex items-center justify-between">
              <div>
                <p className="text-white">{attack.name}</p>
                <p className="text-xs text-tavern-muted">Dano {attack.damage}</p>
              </div>
              <span className="text-white">{attack.bonus}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
