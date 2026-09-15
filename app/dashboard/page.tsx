"use client";

import { useState } from "react";

const ranking = [
  { posicao: 1, nome: "Marcos", entregas: 160 },
  { posicao: 2, nome: "João", entregas: 142 },
  { posicao: 3, nome: "Carlos", entregas: 128 },
  { posicao: 4, nome: "André", entregas: 115 },
  { posicao: 5, nome: "Lucas", entregas: 98 },
];

const menu = [
  "Dashboard",
  "Funcionários",
  "Lançamentos",
  "Ranking",
  "Descontos",
  "Quinzenas",
  "Notas Fiscais",
  "Pagamentos",
  "Relatórios",
];

export default function Dashboard() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [sidebarAberta, setSidebarAberta] = useState(true);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-900">

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-40 hidden h-screen border-r border-slate-800 bg-slate-950 text-white transition-all lg:block ${
          sidebarAberta ? "w-64" : "w-20"
        }`}
      >

        {/* LOGO */}
        <div className="flex h-20 items-center border-b border-slate-800 px-5">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-sm font-black text-slate-950">
            CRM
          </div>

          {sidebarAberta && (
            <div className="ml-3">
              <p className="font-black tracking-tight">
                CRM LOGÍSTICA
              </p>

              <p className="text-[10px] uppercase tracking-widest text-slate-500">
                Gestão de entregas
              </p>
            </div>
          )}

        </div>

        {/* MENU */}
        <nav className="px-3 py-6">

          {menu.map((item, index) => (

            <button
              key={item}
              className={`mb-1 flex w-full items-center rounded-xl px-3 py-3 text-left text-sm transition ${
                index === 0
                  ? "bg-white text-slate-950"
                  : "text-slate-400 hover:bg-slate-900 hover:text-white"
              }`}
            >

              <span className="flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold">
                {index + 1}
              </span>

              {sidebarAberta && (
                <span className="ml-2 font-medium">
                  {item}
                </span>
              )}

            </button>

          ))}

        </nav>

        {/* RECOLHER */}
        <button
          onClick={() => setSidebarAberta(!sidebarAberta)}
          className="absolute bottom-5 left-3 right-3 rounded-xl border border-slate-800 px-3 py-3 text-xs text-slate-400 hover:bg-slate-900 hover:text-white"
        >
          {sidebarAberta ? "Recolher menu" : "→"}
        </button>

      </aside>

      {/* ÁREA PRINCIPAL */}

      <div
        className={`min-h-screen transition-all ${
          sidebarAberta ? "lg:pl-64" : "lg:pl-20"
        }`}
      >

        {/* HEADER */}

        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">

          <div className="flex h-20 items-center justify-between px-5 lg:px-8">

            <div>

              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Painel administrativo
              </p>

              <h1 className="mt-1 text-xl font-black">
                Dashboard
              </h1>

            </div>

            <div className="relative">

              <button
                onClick={() => setMenuAberto(!menuAberto)}
                className="flex items-center gap-3 rounded-full border border-slate-200 bg-white p-1 pr-4 shadow-sm"
              >

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  RM
                </div>

                <div className="hidden text-left sm:block">
                  <p className="text-sm font-bold">
                    Rafael
                  </p>

                  <p className="text-[11px] text-slate-400">
                    Administrador
                  </p>
                </div>

              </button>

              {menuAberto && (

                <div className="absolute right-0 top-14 w-56 rounded-2xl bg-white p-2 shadow-xl ring-1 ring-slate-200">

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

            </div>

          </div>

        </header>

        {/* CONTEÚDO */}

        <div className="bg-slate-100 px-5 py-7 lg:px-8">

          {/* SAUDAÇÃO */}

          <section className="mb-7">

            <p className="text-sm font-medium text-slate-500">
              Visão geral da operação
            </p>

            <div className="mt-1 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

              <div>

                <h2 className="text-3xl font-black tracking-tight">
                  Olá, Rafael.
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Acompanhe o desempenho da CRM Logística.
                </p>

              </div>

              <div className="rounded-xl bg-white px-4 py-3 text-sm shadow-sm ring-1 ring-slate-200">
                <span className="text-slate-400">
                  Período:
                </span>{" "}
                <strong>
                  01/09 — 15/09/2026
                </strong>
              </div>

            </div>

          </section>

          {/* CARDS */}

          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

            <Card
              titulo="Entregas hoje"
              valor="160"
              descricao="Total registrado hoje"
              destaque="normal"
            />

            <Card
              titulo="Funcionários ativos"
              valor="12"
              descricao="Entregadores cadastrados"
              destaque="normal"
            />

            <Card
              titulo="Produzido hoje"
              valor="R$ 250,00"
              descricao="Valor bruto registrado"
              destaque="normal"
            />

            <Card
              titulo="A pagar na quinzena"
              valor="R$ 250,00"
              descricao="Valor acumulado"
              destaque="escuro"
            />

          </section>

          {/* CONTEÚDO PRINCIPAL */}

          <section className="mt-6 grid gap-6 xl:grid-cols-3">

            {/* RANKING */}

            <div className="xl:col-span-2 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

              <div className="flex items-start justify-between">

                <div>

                  <h3 className="text-lg font-black">
                    Ranking de entregadores
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Desempenho por quantidade de entregas.
                  </p>

                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                  Hoje
                </span>

              </div>

              <div className="mt-6 space-y-3">

                {ranking.map((funcionario) => (

                  <div
                    key={funcionario.posicao}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition hover:border-slate-200 hover:bg-slate-50"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                        {funcionario.posicao}
                      </div>

                      <div>

                        <p className="font-bold">
                          {funcionario.nome}
                        </p>

                        <p className="text-xs text-slate-400">
                          Entregador
                        </p>

                      </div>

                    </div>

                    <div className="text-right">

                      <p className="font-black">
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

            <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

              <h3 className="text-lg font-black">
                Resumo da quinzena
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                01/09/2026 — 15/09/2026
              </p>

              <div className="mt-7 space-y-6">

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

                    <div className="h-full w-[72%] rounded-full bg-slate-950" />

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

                <div className="rounded-2xl bg-slate-950 p-5 text-white">

                  <p className="text-xs font-medium text-slate-400">
                    Total líquido
                  </p>

                  <p className="mt-1 text-2xl font-black">
                    R$ 250,00
                  </p>

                </div>

              </div>

            </div>

          </section>

          {/* ACESSOS RÁPIDOS */}

          <section className="mt-6">

            <div className="mb-4">

              <h3 className="font-black">
                Acessos rápidos
              </h3>

              <p className="text-sm text-slate-500">
                Principais áreas do sistema.
              </p>

            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

              {[
                "Funcionários",
                "Lançamentos",
                "Descontos",
                "Quinzenas",
                "Notas Fiscais",
              ].map((item) => (

                <button
                  key={item}
                  className="rounded-2xl bg-white p-5 text-left shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md"
                >

                  <p className="font-bold">
                    {item}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Acessar módulo
                  </p>

                </button>

              ))}

            </div>

          </section>

        </div>

      </div>

    </main>
  );
}

/* CARD */

function Card({
  titulo,
  valor,
  descricao,
  destaque,
}: {
  titulo: string;
  valor: string;
  descricao: string;
  destaque: "normal" | "escuro";
}) {

  return (

    <div
      className={`rounded-3xl p-6 shadow-sm ${
        destaque === "escuro"
          ? "bg-slate-950 text-white"
          : "bg-white ring-1 ring-slate-200"
      }`}
    >

      <p
        className={`text-sm font-semibold ${
          destaque === "escuro"
            ? "text-slate-400"
            : "text-slate-500"
        }`}
      >
        {titulo}
      </p>

      <p className="mt-4 text-3xl font-black tracking-tight">
        {valor}
      </p>

      <p
        className={`mt-2 text-xs ${
          destaque === "escuro"
            ? "text-slate-500"
            : "text-slate-400"
        }`}
      >
        {descricao}
      </p>

    </div>

  );
}