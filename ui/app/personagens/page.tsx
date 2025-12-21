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
        <h2 className="text-2xl font-semibold">Seus personagens</h2>
        <p className="mt-2 text-sm text-tavern-muted">
          Área reservada para personagens cadastrados. Em breve você poderá
          gerenciar suas fichas aqui.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-tavern-card p-6">
        <p className="text-sm text-tavern-muted">
          Quer ver um exemplo? Acesse a ficha demo para explorar o layout.
        </p>
        <Link
          href="/personagem/demo"
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-tavern-accent"
        >
          Ver ficha demo
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
