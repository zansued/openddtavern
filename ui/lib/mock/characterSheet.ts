export type CharacterSheet = {
  meta: {
    id: string;
    ownerUserId: string;
    schemaVersion: string;
    createdAt: string;
    updatedAt: string;
  };
  identity: {
    name: string;
    playerName?: string;
    race?: string;
    class?: string;
  };
  system: {
    systemId: string;
    source: string;
    references: string[];
  };
  progression: {
    level: number;
    xp?: number;
  };
  abilities: Record<
    string,
    {
      label: string;
      score: number;
      modifier: number;
    }
  >;
  proficiencies: {
    skills?: Array<{ name: string; bonus: number }>; 
    saves?: Array<{ name: string; bonus: number }>;
  };
  defenses: {
    hp: {
      max: number;
      current: number;
      temp: number;
    };
    armorClass: number;
  };
  inventory: {
    items: Array<{ name: string; detail: string }>;
    coins?: {
      gp: number;
      sp: number;
      cp: number;
    };
  };
  combat: {
    initiativeBonus: number;
    speed: string;
    attacks: Array<{ name: string; bonus: string; damage: string }>;
  };
  features: Array<{ name: string; description: string }>;
  notes: {
    general: string;
    backstory?: string;
    personality?: string;
  };
  extensions: Record<string, unknown>;
};

export const characterSheet: CharacterSheet = {
  meta: {
    id: "char-001",
    ownerUserId: "user-hero-001",
    schemaVersion: "v1",
    createdAt: "2024-06-01T10:00:00Z",
    updatedAt: "2024-06-05T22:15:00Z"
  },
  identity: {
    name: "Lyra Sussurro de Bronze",
    playerName: "Jogadora Demo",
    race: "Meio-elfa",
    class: "Bardo",
  },
  system: {
    systemId: "open-ddtavern",
    source: "MVP",
    references: ["Documentação interna", "Livro-base livre"]
  },
  progression: {
    level: 5,
    xp: 6500
  },
  abilities: {
    strength: { label: "Força", score: 10, modifier: 0 },
    dexterity: { label: "Destreza", score: 16, modifier: 3 },
    constitution: { label: "Constituição", score: 12, modifier: 1 },
    intelligence: { label: "Inteligência", score: 14, modifier: 2 },
    wisdom: { label: "Sabedoria", score: 11, modifier: 0 },
    charisma: { label: "Carisma", score: 18, modifier: 4 }
  },
  proficiencies: {
    skills: [
      { name: "Acrobacia", bonus: 5 },
      { name: "Atuação", bonus: 7 },
      { name: "Enganação", bonus: 6 },
      { name: "Investigação", bonus: 4 }
    ],
    saves: [
      { name: "Destreza", bonus: 5 },
      { name: "Carisma", bonus: 6 }
    ]
  },
  defenses: {
    hp: {
      max: 38,
      current: 34,
      temp: 0
    },
    armorClass: 15
  },
  inventory: {
    items: [
      { name: "Lira do Crepúsculo", detail: "Instrumento focal" },
      { name: "Capa Sombria", detail: "Vantagem em furtividade" },
      { name: "Kit de exploração", detail: "20 peças diversas" }
    ],
    coins: {
      gp: 52,
      sp: 17,
      cp: 4
    }
  },
  combat: {
    initiativeBonus: 3,
    speed: "9m",
    attacks: [
      { name: "Rapier", bonus: "+5", damage: "1d8+3" },
      { name: "Rajada Arcana", bonus: "+6", damage: "2d6" }
    ]
  },
  features: [
    { name: "Inspiração Bárdica", description: "Dado d8 para aliados." },
    { name: "Canção de Descanso", description: "+1d6 em descanso curto." },
    { name: "Especialização", description: "Perícias extra treinadas." }
  ],
  notes: {
    general: "Fala baixo, mas domina a taverna quando canta.",
    backstory: "Cresceu em caravanas e aprendeu segredos antigos.",
    personality: "Curiosa e leal ao grupo."
  },
  extensions: {
    theme: "midnight",
    uiHints: {
      highlightTabs: true
    }
  }
};
