# Open D&D Tavern

Companheiro open source e modular para RPGs de mesa, focado inicialmente em D&D 5e (SRD), com arquitetura agnóstica de sistema e ferramentas para jogadores e mestres.

## Visão geral

O Open D&D Tavern nasce para organizar regras como dados, facilitar expansão por módulos e manter a experiência em português desde o início. O projeto é escalável, com separação clara de responsabilidades e sem acoplamento a UI ou engine específica.

## Princípios do projeto

- **Regras como dados**: regras não são hardcoded; são representadas por definições serializáveis e avaliadas por contratos.
- **IA como assistente**: a IA apenas auxilia na narração e explicações, nunca é autoridade de regras.
- **Foco no SRD**: apenas conteúdo permitido pelo SRD para D&D 5e.
- **Modularidade**: cada módulo tem responsabilidades bem definidas.
- **Código em português**: nomenclaturas, comentários e documentação em português.

## Estrutura inicial do módulo `core`

O módulo `core` define tipos e contratos compartilhados, sem lógica concreta de jogo.

```
src/
  core/
    types.ts
    regras.ts
    rolagem.ts
    entidades.ts
    index.ts
```

### Tipos base (`src/core/types.ts`)

- `Id`: identificador opaco para entidades e regras.
- `Dados`: dicionário genérico para informações sem estrutura fixa.
- `Resultado<T>`: contrato simples para respostas sem exceções.

### Regras como dados (`src/core/regras.ts`)

- `RegraDefinicao`: representação serializável de uma regra.
- `ContextoRegra`: dados de entrada para avaliação.
- `AvaliadorRegras`: contrato para avaliar regras.
- `RepositorioRegras`: contrato para listar e buscar regras.

### Rolagem de dados (`src/core/rolagem.ts`)

- `Dado`: definição de um dado com `faces`.
- `ResultadoRolagem`: resultado detalhado, com totais e metadados.
- `RoladorDados`: contrato para serviços de rolagem.

### Entidades (`src/core/entidades.ts`)

- `EntidadeBase`: base comum para entidades.
- `Personagem`: contrato inicial de personagem.
- `Campanha`: contrato inicial de campanha.

### Exportação central (`src/core/index.ts`)

Arquivo que expõe os contratos do `core` para uso pelos demais módulos.

## Objetivos imediatos

- Consolidar o `core` com contratos estáveis.
- Preparar a base para módulos de regras, dados SRD e ferramentas auxiliares.
- Evitar qualquer implementação de lógica concreta nesta etapa.

## Como contribuir

- Abra issues com sugestões, melhorias ou dúvidas.
- Proponha mudanças pequenas e incrementais.
- Priorize clareza e consistência em português.

## Licença

Consulte o arquivo [LICENSE](LICENSE).
