// Contratos para entidades de domínio.

import type { Dados, Id } from "./types";

// Entidade base compartilhada.
export interface EntidadeBase {
  id: Id;
  nome: string;
  atributos?: Dados;
}

// Contrato para personagem.
export interface Personagem extends EntidadeBase {
  // Referências a dados adicionais, sem estrutura fixa neste momento.
  ficha?: Dados;
}

// Contrato para campanha.
export interface Campanha extends EntidadeBase {
  personagens?: Personagem[];
}
