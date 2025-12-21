// Tipos para atributos base de personagens.

// Representa atributos genéricos, sem amarração a sistemas específicos.
export type AtributosBase = Record<string, number>;

// Estrutura opcional para armazenar modificadores ou descrições livres.
export interface AtributoDetalhado {
  nome: string;
  valor: number;
  observacoes?: string;
}
