type DefensesPanelProps = {
  hp: {
    max: number;
    current: number;
    temp: number;
  };
  armorClass: number;
  initiativeBonus: number;
  speed: string;
  conditions: string[];
  resistances: string[];
};

export default function DefensesPanel({
  hp,
  armorClass,
  initiativeBonus,
  speed,
  conditions,
  resistances
}: DefensesPanelProps) {
  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
            PV
          </p>
          <p className="mt-2 text-xl font-semibold text-white">
            {hp.current}/{hp.max}
          </p>
          <p className="text-xs text-tavern-muted">Temp {hp.temp}</p>
        </div>
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
            Classe de Armadura
          </p>
          <p className="mt-2 text-xl font-semibold text-white">{armorClass}</p>
        </div>
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
        <h3 className="text-sm font-semibold text-white">Condições</h3>
        <p className="mt-2 text-sm text-tavern-muted">
          {conditions.length > 0 ? conditions.join(", ") : "Nenhuma condição ativa."}
        </p>
      </div>
      <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
        <h3 className="text-sm font-semibold text-white">Resistências</h3>
        <p className="mt-2 text-sm text-tavern-muted">
          {resistances.length > 0
            ? resistances.join(", ")
            : "Sem resistências registradas."}
        </p>
      </div>
    </div>
  );
}
