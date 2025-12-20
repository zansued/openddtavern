# Módulo players

Ferramentas voltadas ao jogador para criação e gerenciamento de personagens,
rolagem de dados e anotações de roleplay.

## Objetivos

- Fornecer estruturas genéricas para personagens.
- Manter inventário, progressão e notas separados.
- Oferecer rolagem simples de dados (d4, d6, d8, d10, d12, d20).
- Não implementar regras de sistemas específicos.

## Estrutura

```
players/
  atributos.ts
  inventario.ts
  progressao.ts
  anotacoes.ts
  character.ts
  rolagem.ts
  index.ts
```

## Uso básico

```ts
import {
  Character,
  criarHistoricoRolagem,
  rolarDado,
} from "./players";

const personagem: Character = {
  id: "personagem-01",
  nome: "Ayla",
  nivel: 1,
  atributos: {
    forca: 10,
    destreza: 14,
  },
  raca: "elfo",
  classe: "patrulheiro",
  inventario: {
    itens: [],
  },
  progressao: {
    nivel: 1,
  },
  notas: [],
  pontosVidaAtual: 12,
  pontosVidaMaximo: 12,
};

const historico = criarHistoricoRolagem();
const resultado = rolarDado(20, 1, historico);
```

## Observações

Este módulo não contém regras específicas de D&D ou de qualquer outro sistema.
Ele apenas oferece estruturas básicas para apoiar ferramentas de jogadores.
