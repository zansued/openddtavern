// Contratos para regras tratadas como dados.

import type { Dados, Id, Resultado } from "./types";

// Definição serializável de uma regra.
export interface RegraDefinicao {
  id: Id;
  nome: string;
  descricao?: string;
  dados: Dados;
}

// Contexto fornecido para avaliação de regras.
export interface ContextoRegra {
  // Dados de entrada necessários para avaliar uma regra.
  entrada: Dados;
}

// Contrato para avaliadores de regras.
export interface AvaliadorRegras {
  avaliar(regra: RegraDefinicao, contexto: ContextoRegra): Resultado<Dados>;
}

// Contrato para repositórios de regras.
export interface RepositorioRegras {
  listar(): RegraDefinicao[];
  obterPorId(id: Id): RegraDefinicao | undefined;
}
