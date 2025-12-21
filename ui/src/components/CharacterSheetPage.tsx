import { useMemo, useState } from "react";
import { mockCharacter } from "../data/mockCharacter";
import { CharacterSheet } from "../types/characterSheet";
import AbilityCard from "./AbilityCard";
import SkillsList from "./SkillsList";
import Tabs from "./Tabs";
import CombatPanel from "./CombatPanel";
import InventoryPanel from "./InventoryPanel";
import NotesPanel from "./NotesPanel";
import DefensesPanel from "./DefensesPanel";

const tabs = [
  { id: "combat", label: "Combate" },
  { id: "inventory", label: "Inventário" },
  { id: "traits", label: "Características" },
  { id: "notes", label: "Notas" }
];

const downloadFile = (filename: string, content: string, type: string) => {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const buildMarkdown = (sheet: CharacterSheet) => {
  const abilityLines = sheet.abilities
    .map((ability) => `- ${ability.name}: ${ability.score} (${ability.modifier >= 0 ? "+" : ""}${ability.modifier})`)
    .join("\n");
  const skillLines = sheet.skills
    .map((skill) => `- ${skill.name} (${skill.ability}) ${skill.bonus >= 0 ? "+" : ""}${skill.bonus}`)
    .join("\n");
  const attackLines = sheet.combat.attacks
    .map((attack) => `- ${attack.name}: ${attack.bonus} | ${attack.damage}`)
    .join("\n");
  const inventoryLines = sheet.inventory.items
    .map((item) => `- ${item.name} x${item.quantity}`)
    .join("\n");

  return `# ${sheet.identity.name}

## Identidade
- Ancestralidade: ${sheet.identity.ancestry}
- Classe/Função: ${sheet.identity.classRole}
- Antecedente: ${sheet.identity.background}
- Alinhamento: ${sheet.identity.alignment}

## Sistema
- Nível: ${sheet.system.level}
- Experiência: ${sheet.system.experience}
- Bônus de Proficiência: ${sheet.system.proficiencyBonus}

## Atributos
${abilityLines}

## Perícias
${skillLines}

## Combate
- PV: ${sheet.combat.hitPoints.current}/${sheet.combat.hitPoints.max}
- CA: ${sheet.combat.armorClass}
- Iniciativa: ${sheet.combat.initiative >= 0 ? "+" : ""}${sheet.combat.initiative}
- Deslocamento: ${sheet.combat.speed}

### Ataques
${attackLines}

## Inventário
${inventoryLines}

## Notas
${sheet.notes.freeform}
`;
};

const CharacterSheetPage = () => {
  const [activeTab, setActiveTab] = useState("combat");
  const sheet = useMemo(() => mockCharacter, []);

  return (
    <div className="page">
      <header className="header">
        <div>
          <p className="eyebrow">Ficha do Personagem</p>
          <h1>{sheet.identity.name}</h1>
          <div className="header-sub">
            <span>Nível {sheet.system.level}</span>
            <span>• {sheet.identity.ancestry}</span>
            <span>• {sheet.identity.classRole}</span>
          </div>
        </div>
        <div className="header-actions">
          <button type="button" className="ghost-button">
            Salvar rascunho
          </button>
          <button
            type="button"
            className="ghost-button"
            onClick={() =>
              downloadFile(
                `${sheet.identity.name}-ficha.json`,
                JSON.stringify(sheet, null, 2),
                "application/json"
              )
            }
          >
            Exportar JSON
          </button>
          <button
            type="button"
            className="primary-button"
            onClick={() =>
              downloadFile(
                `${sheet.identity.name}-ficha.md`,
                buildMarkdown(sheet),
                "text/markdown"
              )
            }
          >
            Exportar Markdown
          </button>
        </div>
      </header>

      <section className="identity-grid">
        <div className="identity-card">
          <span>Antecedente</span>
          <strong>{sheet.identity.background}</strong>
        </div>
        <div className="identity-card">
          <span>Alinhamento</span>
          <strong>{sheet.identity.alignment}</strong>
        </div>
        <div className="identity-card">
          <span>Experiência</span>
          <strong>{sheet.system.experience}</strong>
        </div>
        <div className="identity-card">
          <span>Próximo marco</span>
          <strong>{sheet.progression.nextMilestone}</strong>
        </div>
      </section>

      <main className="layout">
        <div className="column">
          <div className="card">
            <h3 className="section-title">Atributos</h3>
            <div className="abilities-grid">
              {sheet.abilities.map((ability) => (
                <AbilityCard key={ability.name} ability={ability} />
              ))}
            </div>
          </div>
          <SkillsList skills={sheet.skills} />
        </div>

        <div className="column">
          <Tabs items={tabs} activeId={activeTab} onChange={setActiveTab} />
          {activeTab === "combat" && <CombatPanel combat={sheet.combat} />}
          {activeTab === "inventory" && (
            <InventoryPanel inventory={sheet.inventory} />
          )}
          {activeTab === "traits" && <NotesPanel notes={sheet.notes} />}
          {activeTab === "notes" && <NotesPanel notes={sheet.notes} />}
        </div>

        <div className="column">
          <DefensesPanel sheet={sheet} />
          <div className="card">
            <h3 className="section-title">Progressão</h3>
            <ul className="list">
              {sheet.progression.achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CharacterSheetPage;
