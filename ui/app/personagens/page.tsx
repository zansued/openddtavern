import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function PersonagensPage() {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-tavern-surface p-6">
        <h2 className="text-2xl font-semibold">Minhas fichas</h2>
        <p className="mt-2 text-sm text-tavern-muted">
          Área reservada para personagens cadastrados. Em breve você poderá
          gerenciar suas fichas aqui.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-tavern-card p-6">
        <p className="text-sm text-tavern-muted">
          Pronto para começar? Crie uma nova ficha e personalize seus heróis.
        </p>
        <Link
          href="/personagens/novo"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tavern-accent"
        >
          Criar personagem
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
