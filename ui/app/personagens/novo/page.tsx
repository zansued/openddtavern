import { createClient } from "@/lib/supabase/server";

export default async function NovoPersonagemPage() {
  const supabase = createClient();
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-tavern-surface p-6">
        <h2 className="text-2xl font-semibold">Criar personagem</h2>
        <p className="mt-2 text-sm text-tavern-muted">
          Preencha o básico para iniciar sua ficha. Em breve este formulário será
          conectado ao banco de dados.
        </p>
      </div>
      <div className="rounded-2xl border border-white/10 bg-tavern-card p-6">
        <p className="text-xs uppercase tracking-[0.2em] text-tavern-muted">
          Logado como
        </p>
        <p className="mt-1 text-sm text-white">{user?.email}</p>
        <form className="mt-6 grid gap-4 md:max-w-md">
          <label className="text-sm text-tavern-muted">
            Nome do personagem
            <input
              type="text"
              name="nome"
              required
              placeholder="Ex: Lyra, a Arqueira"
              className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white"
            />
          </label>
          <label className="text-sm text-tavern-muted">
            Nível
            <input
              type="number"
              name="nivel"
              min={1}
              max={20}
              defaultValue={1}
              className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white"
            />
          </label>
          <button
            type="button"
            className="rounded-xl bg-tavern-accent px-4 py-2 text-sm font-semibold text-white"
          >
            Salvar (em breve)
          </button>
        </form>
      </div>
    </section>
  );
}
