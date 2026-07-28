import {
  ArrowDown,
  CheckCircle2,
  GitBranch,
  UserRound,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectFlowProps = {
  flows: ProjectDetail["flow"];
};

export default function ProjectFlow({ flows }: ProjectFlowProps) {
  if (!flows.length) {
    return null;
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Flujos principales
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Recorridos según el tipo de usuario
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Cada actor interactúa con el sistema mediante un flujo diferente,
            desde el inicio de la operación hasta la obtención del resultado.
          </p>
        </div>

        <div
          className={`mt-14 grid gap-6 ${
            flows.length === 1
              ? "mx-auto max-w-3xl"
              : "lg:grid-cols-2"
          }`}
        >
          {flows.map((flow, flowIndex) => (
            <article
              key={flow.actor}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
            >
              <header className="border-b border-white/10 p-7 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    {flowIndex === 0 ? (
                      <UserRound size={22} />
                    ) : (
                      <GitBranch size={22} />
                    )}
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                      Flujo {String(flowIndex + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {flow.actor}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {flow.description}
                    </p>
                  </div>
                </div>
              </header>

              <div className="p-7 sm:p-8">
                <div className="space-y-0">
                  {flow.steps.map((step, stepIndex) => {
                    const isLast = stepIndex === flow.steps.length - 1;

                    return (
                      <div key={`${flow.actor}-${step}`} className="relative">
                        <div className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <div
                              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs ${
                                isLast
                                  ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                                  : "border-blue-400/20 bg-blue-500/10 text-blue-300"
                              }`}
                            >
                              {isLast ? (
                                <CheckCircle2 size={18} />
                              ) : (
                                String(stepIndex + 1).padStart(2, "0")
                              )}
                            </div>

                            {!isLast && (
                              <div className="flex min-h-12 flex-1 flex-col items-center py-2">
                                <div className="h-full w-px flex-1 bg-white/10" />
                                <ArrowDown
                                  size={15}
                                  className="mt-1 text-slate-700"
                                />
                              </div>
                            )}
                          </div>

                          <div
                            className={`pb-8 ${
                              isLast ? "pb-0" : ""
                            }`}
                          >
                            <div className="rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
                              <p className="text-sm font-medium leading-7 text-slate-200">
                                {step}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}