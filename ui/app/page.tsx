import Link from "next/link";

const shortcuts = [
  {
    title: "Personagem (Demo)",
    description: "Veja uma ficha de personagem com dados mockados.",
    href: "/personagem/demo"
  },
  {
    title: "Campanhas",
    description: "Espaço reservado para gestão de campanhas.",
    href: "/campanhas"
  },
  {
    title: "Mestre",
    description: "Ferramentas futuras para mestres de mesa.",
    href: "/mestre"
  }
];

export default function HomePage() {
  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-tavern-surface p-6">
        <h2 className="text-2xl font-semibold">Dashboard</h2>
        <p className="mt-2 text-sm text-tavern-muted">
          Este é um MVP da interface do Open D&D Tavern. Navegue pelos atalhos
          abaixo para experimentar o fluxo principal.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {shortcuts.map((shortcut) => (
          <Link
            key={shortcut.title}
            href={shortcut.href}
            className="group rounded-2xl border border-white/10 bg-tavern-card p-5 transition hover:border-tavern-accent/70 hover:shadow-[0_0_30px_rgba(155,135,245,0.2)]"
          >
            <h3 className="text-lg font-semibold text-white group-hover:text-tavern-accent">
              {shortcut.title}
            </h3>
            <p className="mt-2 text-sm text-tavern-muted">
              {shortcut.description}
            </p>
            <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-tavern-muted">
              Abrir
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
