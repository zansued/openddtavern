// Tipos para inventário de personagens.

import type { Dados, Id } from "../core/types";

// Item genérico de inventário.
export interface ItemInventario {
  id: Id;
  nome: string;
  quantidade?: number;
  detalhes?: Dados;
}

// Inventário simples, sem regras específicas.
export interface Inventario {
  itens: ItemInventario[];
  capacidadeMaxima?: number;
  observacoes?: string;
}
