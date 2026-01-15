import type { AtributoDetalhado } from "../../src/players/atributos";

import { calcularModificadorBase } from "@/lib/atributos";

type AbilityCardProps = {
  atributo: AtributoDetalhado;
};

export default function AbilityCard({ atributo }: AbilityCardProps) {
  const modifier = calcularModificadorBase(atributo.valor);
  const formattedModifier = modifier >= 0 ? `+${modifier}` : `${modifier}`;

  return (
    <div className="rounded-xl border border-white/10 bg-tavern-card p-4 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
        {atributo.nome}
      </p>
      <p className="mt-2 text-3xl font-semibold text-white">
        {atributo.valor}
      </p>
      <p className="mt-1 text-sm text-tavern-accent">{formattedModifier}</p>
      {atributo.observacoes && (
        <p className="mt-1 text-[11px] text-tavern-muted">
          {atributo.observacoes}
        </p>
      )}
    </div>
  );
}
