"use client";

import { useState } from "react";

const ranking = [
  { posicao: 1, nome: "Marcos", entregas: 160 },
  { posicao: 2, nome: "João", entregas: 142 },
  { posicao: 3, nome: "Carlos", entregas: 128 },
  { posicao: 4, nome: "André", entregas: 115 },
  { posicao: 5, nome: "Lucas", entregas: 98 },
];

export default function Dashboard() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-900">

      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

          <div>
            <h1 className="text-xl font-black tracking-tight">
              CRM <span className="text-slate-500">LOGÍSTICA</span>
            </h1>
            <p className="text-xs text-slate-500">
              Gestão de entregas
            </p>
          </div>

          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white"
          >
            RM
          </button>

        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-7">

        {/* SAUDAÇÃO */}
        <section className="mb-7">
          <p className="text-sm font-medium text-slate-500">
            Visão geral
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            Olá, Rafael 👋
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Acompanhe o desempenho da sua operação.
          </p>
        </section>

        {/* CARDS */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">
              Entregas hoje
            </p>

            <p className="mt-3 text-3xl font-black">
              160
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Total registrado hoje
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">
              Funcionários ativos
            </p>

            <p className="mt-3 text-3xl font-black">
              12
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Entregadores cadastrados
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
            <p className="text-sm font-medium text-slate-500">
              Produzido hoje
            </p>

            <p className="mt-3 text-3xl font-black">
              R$ 250,00
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Valor bruto registrado
            </p>
          </div>

          <div className="rounded-2xl bg-slate-900 p-5 text-white shadow-sm">
            <p className="text-sm font-medium text-slate-300">
              A pagar na quinzena
            </p>

            <p className="mt-3 text-3xl font-black">
              R$ 250,00
            </p>

            <p className="mt-2 text-xs text-slate-400">
              Valor acumulado
            </p>
          </div>

        </section>

        {/* CONTEÚDO */}
        <section className="mt-6 grid gap-6 lg:grid-cols-3">

          {/* RANKING */}
          <div className="lg:col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-bold text-lg">
                  Ranking de entregadores
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Desempenho por quantidade de entregas
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                Hoje
              </span>
            </div>

            <div className="mt-6 space-y-3">

              {ranking.map((funcionario) => (
                <div
                  key={funcionario.posicao}
                  className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50"
                >

                  <div className="flex items-center gap-4">

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                      {funcionario.posicao}
                    </div>

                    <div>
                      <p className="font-semibold">
                        {funcionario.nome}
                      </p>

                      <p className="text-xs text-slate-400">
                        Entregador
                      </p>
                    </div>

                  </div>

                  <div className="text-right">
                    <p className="font-bold">
                      {funcionario.entregas}
                    </p>

                    <p className="text-xs text-slate-400">
                      entregas
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* RESUMO */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

            <h3 className="text-lg font-bold">
              Resumo da quinzena
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              01/09/2026 — 15/09/2026
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500">
                    Entregas
                  </span>

                  <strong>
                    160
                  </strong>
                </div>

                <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-slate-900" />
                </div>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <p className="text-sm text-slate-500">
                  Valor produzido
                </p>

                <p className="mt-1 text-2xl font-black">
                  R$ 250,00
                </p>
              </div>

              <div className="border-t border-slate-100 pt-5">
                <p className="text-sm text-slate-500">
                  Descontos
                </p>

                <p className="mt-1 text-2xl font-black">
                  R$ 0,00
                </p>
              </div>

              <div className="rounded-xl bg-slate-100 p-4">
                <p className="text-xs font-medium text-slate-500">
                  Total líquido
                </p>

                <p className="mt-1 text-xl font-black">
                  R$ 250,00
                </p>
              </div>

            </div>

          </div>

        </section>

        {/* MENU */}
        <section className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">

          {[
            "Funcionários",
            "Lançamentos",
            "Ranking",
            "Descontos",
            "Quinzenas",
            "Relatórios",
          ].map((item) => (
            <button
              key={item}
              className="rounded-xl bg-white px-4 py-4 text-sm font-semibold shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              {item}
            </button>
          ))}

        </section>

      </div>

      {/* MENU DO USUÁRIO */}
      {menuAberto && (
        <div className="fixed right-5 top-20 z-30 w-56 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200">

          <div className="border-b border-slate-100 px-4 py-3">
            <p className="font-semibold">
              Rafael
            </p>

            <p className="text-xs text-slate-500">
              Administrador
            </p>
          </div>

          <button className="mt-1 w-full rounded-xl px-4 py-3 text-left text-sm hover:bg-slate-100">
            Configurações
          </button>

          <button className="w-full rounded-xl px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50">
            Sair
          </button>

        </div>
      )}

    </main>
  );
}