import type { Character } from "../../../src/players/character";
import type { ItemInventario } from "../../../src/players/inventario";
import type { NotaPersonagem } from "../../../src/players/anotacoes";
import type { AtributosBase } from "../../../src/players/atributos";

const atributosDemo: AtributosBase = {
  forca: 10,
  destreza: 16,
  constituicao: 12,
  inteligencia: 14,
  sabedoria: 11,
  carisma: 18
};

const inventarioDemo: ItemInventario[] = [
  {
    id: "item-001",
    nome: "Lira do Crepúsculo",
    detalhes: {
      tipo: "Instrumento",
      foco: true
    }
  },
  {
    id: "item-002",
    nome: "Capa Sombria",
    detalhes: {
      bonus: "Vantagem em furtividade",
      origem: "Artesão de Mirabar"
    }
  },
  {
    id: "item-003",
    nome: "Kit de exploração",
    quantidade: 1,
    detalhes: {
      conteudo: "20 peças diversas"
    }
  }
];

const notasDemo: NotaPersonagem[] = [
  {
    id: "nota-001",
    titulo: "Notas gerais",
    conteudo: "Fala baixo, mas domina a taverna quando canta.",
    tags: ["roleplay"]
  },
  {
    id: "nota-002",
    titulo: "História",
    conteudo: "Cresceu em caravanas e aprendeu segredos antigos.",
    tags: ["background"]
  },
  {
    id: "nota-003",
    titulo: "Personalidade",
    conteudo: "Curiosa e leal ao grupo.",
    tags: ["traços"]
  }
];

export const personagemDemo: Character = {
  id: "char-001",
  nome: "Lyra Sussurro de Bronze",
  nivel: 5,
  atributos: atributosDemo,
  raca: "Meio-elfa",
  classe: "Bardo",
  inventario: {
    itens: inventarioDemo,
    observacoes: "Equipamentos pessoais e itens herdados."
  },
  progressao: {
    nivel: 5,
    experienciaAtual: 6500
  },
  notas: notasDemo,
  pontosVidaAtual: 34,
  pontosVidaMaximo: 38
};

export const personagemDemoExtras = {
  pericias: [
    { nome: "Acrobacia", valor: 5 },
    { nome: "Atuação", valor: 7 },
    { nome: "Enganação", valor: 6 },
    { nome: "Investigação", valor: 4 }
  ],
  salvaguardas: [
    { nome: "Destreza", valor: 5 },
    { nome: "Carisma", valor: 6 }
  ],
  defesa: {
    classeArmadura: 15,
    pontosVidaTemporario: 0,
    condicoes: [],
    resistencias: ["Encantamento"]
  },
  combate: {
    iniciativa: 3,
    deslocamento: "9m",
    ataques: [
      { nome: "Rapier", bonus: "+5", dano: "1d8+3" },
      { nome: "Rajada Arcana", bonus: "+6", dano: "2d6" }
    ]
  },
  recursos: {
    moedas: {
      gp: 52,
      sp: 17,
      cp: 4
    }
  },
  caracteristicas: [
    { nome: "Inspiração Bárdica", descricao: "Dado d8 para aliados." },
    { nome: "Canção de Descanso", descricao: "+1d6 em descanso curto." },
    { nome: "Especialização", descricao: "Perícias extra treinadas." }
  ]
};
