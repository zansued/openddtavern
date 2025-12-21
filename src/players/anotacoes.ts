// Tipos para anotações de roleplay.

import type { Dados, Id } from "../core/types";

// Nota genérica anexada ao personagem.
export interface NotaPersonagem {
  id: Id;
  titulo: string;
  conteudo: string;
  tags?: string[];
  metadados?: Dados;
}
