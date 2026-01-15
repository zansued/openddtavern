import type { AtributoDetalhado, AtributosBase } from "../../src/players/atributos";

const MAPA_ATRIBUTOS: Record<string, string> = {
  forca: "Força",
  destreza: "Destreza",
  constituicao: "Constituição",
  inteligencia: "Inteligência",
  sabedoria: "Sabedoria",
  carisma: "Carisma"
};

const ORDEM_ATRIBUTOS = [
  "forca",
  "destreza",
  "constituicao",
  "inteligencia",
  "sabedoria",
  "carisma"
];

export const calcularModificadorBase = (valor: number): number =>
  Math.floor((valor - 10) / 2);

export const criarAtributosDetalhados = (
  atributos: AtributosBase
): AtributoDetalhado[] => {
  const ordenados = Object.entries(atributos).sort(([nomeA], [nomeB]) => {
    const indiceA = ORDEM_ATRIBUTOS.indexOf(nomeA);
    const indiceB = ORDEM_ATRIBUTOS.indexOf(nomeB);

    if (indiceA === -1 && indiceB === -1) {
      return nomeA.localeCompare(nomeB);
    }

    if (indiceA === -1) {
      return 1;
    }

    if (indiceB === -1) {
      return -1;
    }

    return indiceA - indiceB;
  });

  return ordenados.map(([nome, valor]) => ({
    nome: MAPA_ATRIBUTOS[nome] ?? nome,
    valor
  }));
};
