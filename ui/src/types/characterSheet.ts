export type CharacterMeta = {
  id: string;
  createdAt: string;
  updatedAt: string;
  version: "v1";
};

export type CharacterIdentity = {
  name: string;
  ancestry: string;
  classRole: string;
  background: string;
  alignment: string;
};

export type CharacterSystem = {
  level: number;
  experience: number;
  proficiencyBonus: number;
};

export type CharacterProgression = {
  nextMilestone: string;
  achievements: string[];
};

export type AbilityScore = {
  name: string;
  score: number;
  modifier: number;
};

export type Skill = {
  name: string;
  ability: string;
  proficient: boolean;
  bonus: number;
};

export type Defense = {
  label: string;
  value: number | string;
  detail?: string;
};

export type CombatAttack = {
  name: string;
  bonus: string;
  damage: string;
  notes?: string;
};

export type InventoryItem = {
  name: string;
  quantity: number;
  weight: number;
};

export type CharacterNotes = {
  traits: string[];
  bonds: string[];
  flaws: string[];
  freeform: string;
};

export type CharacterSheet = {
  meta: CharacterMeta;
  identity: CharacterIdentity;
  system: CharacterSystem;
  progression: CharacterProgression;
  abilities: AbilityScore[];
  skills: Skill[];
  defenses: Defense[];
  combat: {
    hitPoints: { current: number; max: number; temp: number };
    armorClass: number;
    initiative: number;
    speed: string;
    conditions: string[];
    attacks: CombatAttack[];
  };
  inventory: {
    coins: { label: string; amount: number }[];
    items: InventoryItem[];
  };
  notes: CharacterNotes;
};
