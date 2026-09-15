"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  async function entrar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setErro("");
    setCarregando(true);

    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password: senha,
    });

    if (error) {
      setErro("E-mail ou senha inválidos.");
      setCarregando(false);
      return;
    }

    window.location.href = "/dashboard";
  }

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center px-5">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl">
            <span className="text-3xl font-black text-slate-950">
              CRM
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            CRM Logística
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Gestão de entregas
          </p>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-2xl">

          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900">
              Acessar sua conta
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Entre com seus dados para continuar.
            </p>
          </div>

          <form onSubmit={entrar} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                E-mail
              </label>

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Senha
              </label>

              <input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                required
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10"
              />
            </div>

            {erro && (
              <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                {erro}
              </div>
            )}

            <button
              type="submit"
              disabled={carregando}
              className="w-full rounded-xl bg-slate-950 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {carregando ? "Entrando..." : "Entrar"}
            </button>

          </form>

          <button
            type="button"
            className="mt-5 w-full text-center text-sm font-medium text-slate-500 transition hover:text-slate-900"
          >
            Esqueci minha senha
          </button>

        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          CRM Logística • Sistema de gestão de entregas
        </p>

      </div>
    </main>
  );
}