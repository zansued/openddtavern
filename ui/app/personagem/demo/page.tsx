"use client";

import { useMemo, useState } from "react";
import AbilityCard from "@/components/AbilityCard";
import CombatPanel from "@/components/CombatPanel";
import DefensesPanel from "@/components/DefensesPanel";
import FeaturesPanel from "@/components/FeaturesPanel";
import InventoryPanel from "@/components/InventoryPanel";
import NotesPanel from "@/components/NotesPanel";
import SkillsList from "@/components/SkillsList";
import Tabs from "@/components/Tabs";
import { characterSheet } from "@/lib/mock/characterSheet";

const tabOptions = ["Combate", "Inventário", "Características", "Notas"];

function downloadBlob(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  anchor.click();
  URL.revokeObjectURL(url);
}

function createMarkdown() {
  const sheet = characterSheet;
  const abilities = Object.values(sheet.abilities)
    .map((ability) => `- ${ability.label}: ${ability.score} (${ability.modifier >= 0 ? "+" : ""}${ability.modifier})`)
    .join("\n");
  const skills = (sheet.proficiencies.skills ?? [])
    .map((skill) => `- ${skill.name}: ${skill.bonus >= 0 ? "+" : ""}${skill.bonus}`)
    .join("\n");

  return `# ${sheet.identity.name}

**Raça/Classe/Nível:** ${sheet.identity.race ?? "-"} · ${sheet.identity.class ?? "-"} · Nível ${sheet.progression.level}

## Atributos
${abilities}

## Perícias
${skills || "-"}

## Combate
- Iniciativa: ${sheet.combat.initiativeBonus >= 0 ? "+" : ""}${sheet.combat.initiativeBonus}
- Deslocamento: ${sheet.combat.speed}

## Defesas
- PV: ${sheet.defenses.hp.current}/${sheet.defenses.hp.max} (Temp ${sheet.defenses.hp.temp})
- CA: ${sheet.defenses.armorClass}

## Inventário
${sheet.inventory.items.map((item) => `- ${item.name}: ${item.detail}`).join("\n")}

## Características
${sheet.features.map((feature) => `- ${feature.name}: ${feature.description}`).join("\n")}

## Notas
${sheet.notes.general}
`;
}

export default function CharacterDemoPage() {
  const [activeTab, setActiveTab] = useState(tabOptions[0]);

  const identityLine = useMemo(() => {
    const parts = [characterSheet.identity.race, characterSheet.identity.class]
      .filter(Boolean)
      .join(" · ");
    return `${parts} · Nível ${characterSheet.progression.level}`;
  }, []);

  const handleExportJson = () => {
    downloadBlob(
      "personagem-demo.json",
      JSON.stringify(characterSheet, null, 2),
      "application/json"
    );
  };

  const handleExportMarkdown = () => {
    downloadBlob("personagem-demo.md", createMarkdown(), "text/markdown");
  };

  return (
    <section className="space-y-6">
      <header className="rounded-2xl border border-white/10 bg-tavern-surface p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-tavern-muted">
              Ficha de Personagem (Demo)
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              {characterSheet.identity.name}
            </h2>
            <p className="mt-1 text-sm text-tavern-muted">{identityLine}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full border border-white/10 bg-tavern-card px-4 py-2 text-xs uppercase tracking-[0.3em] text-tavern-muted"
            >
              Salvar
            </button>
            <button
              type="button"
              onClick={handleExportJson}
              className="rounded-full bg-tavern-accent px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-950"
            >
              Exportar JSON
            </button>
            <button
              type="button"
              onClick={handleExportMarkdown}
              className="rounded-full border border-tavern-accent/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-tavern-accent"
            >
              Exportar Markdown
            </button>
          </div>
        </div>
      </header>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {Object.values(characterSheet.abilities).map((ability) => (
              <AbilityCard
                key={ability.label}
                label={ability.label}
                score={ability.score}
                modifier={ability.modifier}
              />
            ))}
          </div>
          <SkillsList title="Perícias" skills={characterSheet.proficiencies.skills} />
          <SkillsList
            title="Testes de resistência"
            skills={characterSheet.proficiencies.saves}
          />
        </div>

        <div className="space-y-6">
          <Tabs tabs={tabOptions} active={activeTab} onChange={setActiveTab} />
          {activeTab === "Combate" && (
            <CombatPanel
              initiativeBonus={characterSheet.combat.initiativeBonus}
              speed={characterSheet.combat.speed}
              attacks={characterSheet.combat.attacks}
            />
          )}
          {activeTab === "Inventário" && (
            <InventoryPanel
              items={characterSheet.inventory.items}
              coins={characterSheet.inventory.coins}
            />
          )}
          {activeTab === "Características" && (
            <FeaturesPanel features={characterSheet.features} />
          )}
          {activeTab === "Notas" && (
            <NotesPanel
              general={characterSheet.notes.general}
              backstory={characterSheet.notes.backstory}
              personality={characterSheet.notes.personality}
            />
          )}
        </div>

        <DefensesPanel
          hp={characterSheet.defenses.hp}
          armorClass={characterSheet.defenses.armorClass}
          initiativeBonus={characterSheet.combat.initiativeBonus}
          speed={characterSheet.combat.speed}
          conditions={["Inspirado"]}
          resistances={["Necrótico", "Frio"]}
        />
      </div>
    </section>
  );
}
