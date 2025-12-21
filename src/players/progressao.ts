// Tipos para progressão de personagens.

import type { Dados } from "../core/types";

// Estrutura genérica de progressão.
export interface ProgressaoPersonagem {
  nivel: number;
  experienciaAtual?: number;
  experienciaParaProximoNivel?: number;
  marcadores?: Dados;
}
