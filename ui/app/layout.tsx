import "./globals.css";

export const metadata = {
  title: "Open D&D Tavern",
  description: "MVP UI for Open D&D Tavern"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen font-sans">
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-8">
          <header className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-tavern-muted">
                Open D&D Tavern
              </p>
              <h1 className="text-2xl font-semibold">Portal do Aventureiro</h1>
            </div>
            <div className="rounded-full bg-tavern-card px-4 py-2 text-xs text-tavern-muted">
              MVP em evolução
            </div>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="mt-10 text-xs text-tavern-muted">
            UI inicial para testes — pronta para deploy no Vercel.
          </footer>
        </div>
      </body>
    </html>
  );
}
