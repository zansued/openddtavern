type InventoryPanelProps = {
  items: Array<{ name: string; detail: string }>;
  coins?: { gp: number; sp: number; cp: number };
};

export default function InventoryPanel({ items, coins }: InventoryPanelProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
        <h3 className="text-sm font-semibold text-white">Itens</h3>
        <ul className="mt-3 space-y-2 text-sm text-tavern-muted">
          {items.map((item) => (
            <li key={item.name}>
              <p className="text-white">{item.name}</p>
              <p className="text-xs text-tavern-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
      {coins && (
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <h3 className="text-sm font-semibold text-white">Moedas</h3>
          <div className="mt-3 flex gap-4 text-sm text-tavern-muted">
            <span>
              <strong className="text-white">{coins.gp}</strong> PO
            </span>
            <span>
              <strong className="text-white">{coins.sp}</strong> PP
            </span>
            <span>
              <strong className="text-white">{coins.cp}</strong> PC
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
