import { CharacterSheet } from "../types/characterSheet";

export const mockCharacter: CharacterSheet = {
  meta: {
    id: "char-001",
    createdAt: "2024-07-15T10:00:00Z",
    updatedAt: "2024-07-21T15:42:00Z",
    version: "v1"
  },
  identity: {
    name: "Ayla Ventobravo",
    ancestry: "Humana",
    classRole: "Guardiã Arcana",
    background: "Cartógrafa",
    alignment: "Neutra"
  },
  system: {
    level: 5,
    experience: 6500,
    proficiencyBonus: 3
  },
  progression: {
    nextMilestone: "Explorar o Santuário Ancestral",
    achievements: [
      "Mapa da costa revelado",
      "Aliada da Guilda das Lâminas",
      "Relíquia recuperada"
    ]
  },
  abilities: [
    { name: "Força", score: 12, modifier: 1 },
    { name: "Destreza", score: 16, modifier: 3 },
    { name: "Constituição", score: 14, modifier: 2 },
    { name: "Inteligência", score: 13, modifier: 1 },
    { name: "Sabedoria", score: 10, modifier: 0 },
    { name: "Carisma", score: 15, modifier: 2 }
  ],
  skills: [
    { name: "Acrobacia", ability: "Destreza", proficient: true, bonus: 5 },
    { name: "Arcanismo", ability: "Inteligência", proficient: false, bonus: 1 },
    { name: "Atletismo", ability: "Força", proficient: false, bonus: 1 },
    { name: "História", ability: "Inteligência", proficient: true, bonus: 4 },
    { name: "Intuição", ability: "Sabedoria", proficient: true, bonus: 3 },
    { name: "Percepção", ability: "Sabedoria", proficient: false, bonus: 0 },
    { name: "Persuasão", ability: "Carisma", proficient: true, bonus: 5 },
    { name: "Furtividade", ability: "Destreza", proficient: true, bonus: 5 }
  ],
  defenses: [
    { label: "Resistência Física", value: 12, detail: "Armadura leve" },
    { label: "Resistência Mental", value: 11, detail: "Foco arcano" },
    { label: "Resistência Mística", value: 13, detail: "Amuleto protetor" }
  ],
  combat: {
    hitPoints: { current: 32, max: 40, temp: 3 },
    armorClass: 16,
    initiative: 3,
    speed: "9m",
    conditions: ["Inspirada", "Protegida"],
    attacks: [
      {
        name: "Espada curta",
        bonus: "+5",
        damage: "1d6 + 3",
        notes: "Corpo a corpo"
      },
      {
        name: "Raio arcano",
        bonus: "+6",
        damage: "1d10 + 2",
        notes: "Distância"
      },
      {
        name: "Adaga",
        bonus: "+5",
        damage: "1d4 + 3",
        notes: "Arremesso"
      }
    ]
  },
  inventory: {
    coins: [
      { label: "Moedas de cobre", amount: 45 },
      { label: "Moedas de prata", amount: 18 },
      { label: "Moedas de ouro", amount: 12 }
    ],
    items: [
      { name: "Rações de viagem", quantity: 6, weight: 1 },
      { name: "Corda de cânhamo", quantity: 1, weight: 3 },
      { name: "Kit de cartografia", quantity: 1, weight: 5 },
      { name: "Poção de vitalidade", quantity: 2, weight: 0.5 }
    ]
  },
  notes: {
    traits: ["Curiosa", "Metódica", "Observadora"],
    bonds: ["Lealdade à tripulação da Taverna", "Protege o legado familiar"],
    flaws: ["Desconfia de estranhos", "Evita improvisos"],
    freeform:
      "Mantém mapas atualizados e observa padrões místicos nas ruínas antigas."
  }
};
