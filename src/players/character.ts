// Contratos para personagens de jogadores.

import type { Id } from "../core/types";
import type { AtributosBase } from "./atributos";
import type { Inventario } from "./inventario";
import type { ProgressaoPersonagem } from "./progressao";
import type { NotaPersonagem } from "./anotacoes";

// Representa um personagem genérico, sem regras de sistema.
export interface Character {
  id: Id;
  nome: string;
  nivel: number;

  // Atributos base em formato genérico.
  atributos: AtributosBase;

  // Referências livres para raça e classe (IDs ou strings).
  raca?: string;
  classe?: string;

  // Estruturas separadas para inventário, progressão e notas.
  inventario: Inventario;
  progressao: ProgressaoPersonagem;
  notas: NotaPersonagem[];

  // Pontos de vida atuais e totais, sem regras específicas.
  pontosVidaAtual: number;
  pontosVidaMaximo: number;
}
