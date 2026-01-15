import type { AtributoDetalhado } from "../../src/players/atributos";

type SkillsListProps = {
  title: string;
  skills?: AtributoDetalhado[];
};

export default function SkillsList({ title, skills }: SkillsListProps) {
  return (
    <div className="rounded-xl border border-white/10 bg-tavern-card p-4">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-tavern-muted">
        {(skills ?? []).map((skill) => (
          <li key={skill.nome} className="flex items-center justify-between">
            <span>{skill.nome}</span>
            <span className="text-white">
              {skill.valor >= 0 ? `+${skill.valor}` : skill.valor}
            </span>
          </li>
        ))}
      </ul>
      {(!skills || skills.length === 0) && (
        <p className="mt-2 text-xs text-tavern-muted">Sem registros ainda.</p>
      )}
    </div>
  );
}
