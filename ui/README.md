# Open D&D Tavern UI

## Como rodar

```bash
cd ui
npm install
npm run dev
```

## Variáveis de ambiente (Supabase)

Crie um arquivo `.env.local` dentro da pasta `ui`:

```bash
NEXT_PUBLIC_SUPABASE_URL=cole_a_url_do_seu_projeto
NEXT_PUBLIC_SUPABASE_ANON_KEY=cole_a_anon_key_do_seu_projeto
```

No Vercel, configure as mesmas variáveis em **Project Settings → Environment Variables** para cada ambiente (Development, Preview e Production).

## Rotas

- `/` — dashboard inicial
- `/login` — autenticação (criar conta e entrar)
- `/personagem/demo` — ficha de personagem demo
- `/personagens` — área protegida para personagens
