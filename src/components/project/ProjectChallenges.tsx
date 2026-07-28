import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Wrench,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectChallengesProps = {
  challenges: ProjectDetail["challenges"];
};

export default function ProjectChallenges({
  challenges,
}: ProjectChallengesProps) {
  if (!challenges.length) {
    return null;
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Retos técnicos
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Problemas reales resueltos durante el desarrollo
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            La plataforma debía mantener la integridad de las reservas,
            controlar la disponibilidad y conservar la trazabilidad de cada
            operación.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {challenges.map((challenge, index) => (
            <article
              key={challenge.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-white/20"
            >
              <header className="border-b border-white/10 p-7">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-500/10 text-amber-300">
                    <Wrench size={21} />
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {challenge.title}
                </h3>
              </header>

              <div className="p-7">
                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-red-400/15 bg-red-500/10 text-red-300">
                    <AlertTriangle size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-red-300">
                      Problema
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {challenge.problem}
                    </p>
                  </div>
                </div>

                <div className="my-6 flex items-center gap-3 pl-3 text-slate-700">
                  <div className="h-px flex-1 bg-white/10" />
                  <ArrowRight size={17} />
                  <div className="h-px flex-1 bg-white/10" />
                </div>

                <div className="flex gap-4">
                  <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-emerald-400/15 bg-emerald-500/10 text-emerald-300">
                    <CheckCircle2 size={17} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
                      Solución
                    </p>

                    <p className="mt-3 text-sm leading-7 text-slate-400">
                      {challenge.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {challenge.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}