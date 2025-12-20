// Tipos base compartilhados pelo módulo core.

// Identificador opaco para entidades e regras.
export type Id = string;

// Representa um dicionário de dados sem estrutura fixa.
export type Dados = Record<string, unknown>;

// Resultado genérico para operações sem exceções.
export interface Resultado<T> {
  sucesso: boolean;
  valor?: T;
  erros?: string[];
}
