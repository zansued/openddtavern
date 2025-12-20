// Utilitários simples de rolagem de dados para jogadores.

// Tipos de dados permitidos para rolagem simples.
export type DadoPermitido = 4 | 6 | 8 | 10 | 12 | 20;

// Resultado simples de uma rolagem.
export interface ResultadoRolagemJogador {
  total: number;
  valores: number[];
  dado: DadoPermitido;
}

// Histórico simples de rolagens.
export interface HistoricoRolagem {
  registros: ResultadoRolagemJogador[];
}

// Cria um histórico vazio.
export const criarHistoricoRolagem = (): HistoricoRolagem => ({
  registros: [],
});

// Realiza uma rolagem simples e atualiza o histórico.
export const rolarDado = (
  dado: DadoPermitido,
  quantidade = 1,
  historico?: HistoricoRolagem,
): ResultadoRolagemJogador => {
  const valores: number[] = [];

  for (let indice = 0; indice < quantidade; indice += 1) {
    const valor = Math.floor(Math.random() * dado) + 1;
    valores.push(valor);
  }

  const total = valores.reduce((soma, atual) => soma + atual, 0);
  const resultado: ResultadoRolagemJogador = {
    total,
    valores,
    dado,
  };

  if (historico) {
    historico.registros.push(resultado);
  }

  return resultado;
};
