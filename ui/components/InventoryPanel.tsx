import type { Dados } from "../../src/core/types";
import type { Inventario, ItemInventario } from "../../src/players/inventario";

type InventoryPanelProps = {
  inventario: Inventario;
  moedas?: { gp: number; sp: number; cp: number };
};

const formatarDetalhesItem = (detalhes?: Dados): string | null => {
  if (!detalhes) {
    return null;
  }

  if (typeof detalhes === "string" || typeof detalhes === "number" || typeof detalhes === "boolean") {
    return String(detalhes);
  }

  if (Array.isArray(detalhes)) {
    return detalhes.join(", ");
  }

  return Object.entries(detalhes)
    .map(([chave, valor]) => `${chave}: ${String(valor)}`)
    .join(" · ");
};

const renderizarItem = (item: ItemInventario) => {
  const detalhe = formatarDetalhesItem(item.detalhes);
  const quantidade = item.quantidade ? `×${item.quantidade}` : null;

  return (
    <li key={item.id}>
      <p className="text-white">
        {item.nome} {quantidade && <span className="text-xs text-tavern-muted">{quantidade}</span>}
      </p>
      {detalhe && <p className="text-xs text-tavern-muted">{detalhe}</p>}
    </li>
  );
};

export default function InventoryPanel({ inventario, moedas }: InventoryPanelProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
        <h3 className="text-sm font-semibold text-white">Inventário</h3>
        <ul className="mt-3 space-y-2 text-sm text-tavern-muted">
          {inventario.itens.map(renderizarItem)}
        </ul>
        {inventario.observacoes && (
          <p className="mt-3 text-xs text-tavern-muted">{inventario.observacoes}</p>
        )}
      </div>
      {moedas && (
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <h3 className="text-sm font-semibold text-white">Moedas</h3>
          <div className="mt-3 flex gap-4 text-sm text-tavern-muted">
            <span>
              <strong className="text-white">{moedas.gp}</strong> PO
            </span>
            <span>
              <strong className="text-white">{moedas.sp}</strong> PP
            </span>
            <span>
              <strong className="text-white">{moedas.cp}</strong> PC
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
