// Contratos para rolagem de dados.

import type { Dados, Resultado } from "./types";

// Representa um dado genérico (ex: d6, d20).
export interface Dado {
  faces: number;
}

// Resultado detalhado de uma rolagem.
export interface ResultadoRolagem {
  total: number;
  valores: number[];
  metadados?: Dados;
}

// Contrato para serviços de rolagem.
export interface RoladorDados {
  rolar(dados: Dado[], modificador?: number): Resultado<ResultadoRolagem>;
}
