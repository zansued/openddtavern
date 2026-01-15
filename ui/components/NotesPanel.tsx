import type { NotaPersonagem } from "../../src/players/anotacoes";

type NotesPanelProps = {
  notas: NotaPersonagem[];
};

export default function NotesPanel({ notas }: NotesPanelProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
        <h3 className="text-sm font-semibold text-white">Notas</h3>
        {notas.length > 0 ? (
          <ul className="mt-3 space-y-4 text-sm text-tavern-muted">
            {notas.map((nota) => (
              <li key={nota.id}>
                <p className="text-white">{nota.titulo}</p>
                <p className="mt-1 text-xs text-tavern-muted">{nota.conteudo}</p>
                {nota.tags && nota.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {nota.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-tavern-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-sm text-tavern-muted">
            Nenhuma nota registrada.
          </p>
        )}
      </div>
    </div>
  );
}
