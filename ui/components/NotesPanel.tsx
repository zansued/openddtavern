type NotesPanelProps = {
  general: string;
  backstory?: string;
  personality?: string;
};

export default function NotesPanel({
  general,
  backstory,
  personality
}: NotesPanelProps) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
        <h3 className="text-sm font-semibold text-white">Notas gerais</h3>
        <p className="mt-2 text-sm text-tavern-muted">{general}</p>
      </div>
      {backstory && (
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <h3 className="text-sm font-semibold text-white">História</h3>
          <p className="mt-2 text-sm text-tavern-muted">{backstory}</p>
        </div>
      )}
      {personality && (
        <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
          <h3 className="text-sm font-semibold text-white">Personalidade</h3>
          <p className="mt-2 text-sm text-tavern-muted">{personality}</p>
        </div>
      )}
    </div>
  );
}
