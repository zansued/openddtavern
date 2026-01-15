import AbilityCard from "@/components/AbilityCard";
import CombatPanel from "@/components/CombatPanel";
import DefensesPanel from "@/components/DefensesPanel";
import FeaturesPanel from "@/components/FeaturesPanel";
import InventoryPanel from "@/components/InventoryPanel";
import NotesPanel from "@/components/NotesPanel";
import SkillsList from "@/components/SkillsList";
import { criarAtributosDetalhados } from "@/lib/atributos";
import { personagemDemo, personagemDemoExtras } from "@/lib/mock/personagem";

export default function PersonagemDemoPage() {
  const atributosDetalhados = criarAtributosDetalhados(personagemDemo.atributos);

  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-white/10 bg-tavern-surface p-6">
        <p className="text-xs uppercase tracking-[0.3em] text-tavern-muted">
          Ficha de personagem (demo)
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white">
          {personagemDemo.nome}
        </h2>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-tavern-muted">
          {personagemDemo.raca && <span>{personagemDemo.raca}</span>}
          {personagemDemo.classe && <span>{personagemDemo.classe}</span>}
          <span>Nível {personagemDemo.nivel}</span>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {atributosDetalhados.map((atributo) => (
              <AbilityCard key={atributo.nome} atributo={atributo} />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <SkillsList title="Perícias" skills={personagemDemoExtras.pericias} />
            <SkillsList
              title="Testes de resistência"
              skills={personagemDemoExtras.salvaguardas}
            />
          </div>

          <CombatPanel
            initiativeBonus={personagemDemoExtras.combate.iniciativa}
            speed={personagemDemoExtras.combate.deslocamento}
            attacks={personagemDemoExtras.combate.ataques.map((ataque) => ({
              name: ataque.nome,
              bonus: ataque.bonus,
              damage: ataque.dano
            }))}
          />

          <FeaturesPanel
            features={personagemDemoExtras.caracteristicas.map((caracteristica) => ({
              name: caracteristica.nome,
              description: caracteristica.descricao
            }))}
          />
        </div>

        <div className="space-y-6">
          <DefensesPanel
            personagem={personagemDemo}
            pontosVidaTemporario={personagemDemoExtras.defesa.pontosVidaTemporario}
            armorClass={personagemDemoExtras.defesa.classeArmadura}
            initiativeBonus={personagemDemoExtras.combate.iniciativa}
            speed={personagemDemoExtras.combate.deslocamento}
            conditions={personagemDemoExtras.defesa.condicoes}
            resistances={personagemDemoExtras.defesa.resistencias}
          />

          <InventoryPanel
            inventario={personagemDemo.inventario}
            moedas={personagemDemoExtras.recursos.moedas}
          />

          <NotesPanel notas={personagemDemo.notas} />
        </div>
      </div>
    </section>
  );
}
