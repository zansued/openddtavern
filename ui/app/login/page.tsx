"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/browser";

type Feedback = {
  type: "success" | "error";
  message: string;
} | null;

export default function LoginPage() {
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signInEmail, setSignInEmail] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [feedback, setFeedback] = useState<Feedback>(null);
  const [loading, setLoading] = useState(false);

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
      email: signUpEmail,
      password: signUpPassword
    });

    if (error) {
      setFeedback({
        type: "error",
        message: `Não foi possível criar a conta: ${error.message}`
      });
    } else {
      setFeedback({
        type: "success",
        message:
          "Conta criada com sucesso! Verifique seu e-mail caso a confirmação seja necessária."
      });
      setSignUpPassword("");
    }

    setLoading(false);
  };

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback(null);
    setLoading(true);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({
      email: signInEmail,
      password: signInPassword
    });

    if (error) {
      setFeedback({
        type: "error",
        message: `Não foi possível entrar: ${error.message}`
      });
    } else {
      setFeedback({
        type: "success",
        message: "Login realizado! Você já pode voltar ao dashboard."
      });
      setSignInPassword("");
    }

    setLoading(false);
  };

  return (
    <section className="space-y-6">
      <div className="rounded-2xl border border-white/10 bg-tavern-surface p-6">
        <h2 className="text-2xl font-semibold">Entrar ou criar conta</h2>
        <p className="mt-2 text-sm text-tavern-muted">
          Use e-mail e senha para acessar seu painel e proteger seus personagens.
        </p>
      </div>

      {feedback ? (
        <div
          className={`rounded-2xl border px-6 py-4 text-sm ${
            feedback.type === "success"
              ? "border-emerald-400/50 bg-emerald-500/10 text-emerald-100"
              : "border-rose-400/50 bg-rose-500/10 text-rose-100"
          }`}
        >
          {feedback.message}
        </div>
      ) : null}

      <div className="grid gap-6 lg:grid-cols-2">
        <form
          onSubmit={handleSignUp}
          className="rounded-2xl border border-white/10 bg-tavern-card p-6"
        >
          <h3 className="text-lg font-semibold">Criar conta</h3>
          <div className="mt-4 space-y-3">
            <label className="block text-sm text-tavern-muted">
              E-mail
              <input
                type="email"
                required
                value={signUpEmail}
                onChange={(event) => setSignUpEmail(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white"
                placeholder="voce@email.com"
              />
            </label>
            <label className="block text-sm text-tavern-muted">
              Senha
              <input
                type="password"
                required
                value={signUpPassword}
                onChange={(event) => setSignUpPassword(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white"
                placeholder="Crie uma senha"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-tavern-accent px-4 py-2 text-sm font-semibold text-white transition hover:bg-tavern-accent/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Criando..." : "Criar conta"}
          </button>
        </form>

        <form
          onSubmit={handleSignIn}
          className="rounded-2xl border border-white/10 bg-tavern-card p-6"
        >
          <h3 className="text-lg font-semibold">Entrar</h3>
          <div className="mt-4 space-y-3">
            <label className="block text-sm text-tavern-muted">
              E-mail
              <input
                type="email"
                required
                value={signInEmail}
                onChange={(event) => setSignInEmail(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white"
                placeholder="voce@email.com"
              />
            </label>
            <label className="block text-sm text-tavern-muted">
              Senha
              <input
                type="password"
                required
                value={signInPassword}
                onChange={(event) => setSignInPassword(event.target.value)}
                className="mt-2 w-full rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm text-white"
                placeholder="Sua senha"
              />
            </label>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-tavern-accent/70 hover:text-tavern-accent disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>
      </div>
    </section>
  );
}
