import {
  ArrowUpRight,
  CircleDot,
  Flag,
  Gauge,
  Route,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectRoadmapProps = {
  roadmap: ProjectDetail["roadmap"];
};

const priorityClasses = {
  Alta: "border-red-400/20 bg-red-500/10 text-red-300",
  Media: "border-amber-400/20 bg-amber-500/10 text-amber-300",
  Baja: "border-slate-400/20 bg-slate-500/10 text-slate-300",
};

const statusClasses = {
  Planificado: "border-blue-400/20 bg-blue-500/10 text-blue-300",
  "En evaluación":
    "border-violet-400/20 bg-violet-500/10 text-violet-300",
};

export default function ProjectRoadmap({
  roadmap,
}: ProjectRoadmapProps) {
  if (!roadmap.length) {
    return null;
  }

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
              <Route size={22} />
            </div>

            <p className="mt-7 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
              Evolución del producto
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Mejoras propuestas para una versión 2
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              Estas mejoras no forman parte de la versión actual. Representan
              una posible evolución del producto orientada a automatización,
              escalabilidad, calidad y operación en producción.
            </p>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start gap-3">
                <Gauge
                  size={19}
                  className="mt-1 shrink-0 text-blue-400"
                />

                <p className="text-sm leading-7 text-slate-400">
                  Las prioridades se basan en el impacto esperado para el
                  usuario y en la estabilidad técnica de la plataforma.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {roadmap.map((item, index) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/20 hover:bg-white/[0.04] sm:p-7"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 font-mono text-xs text-slate-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={19}
                    className="hidden shrink-0 text-slate-700 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400 sm:block"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/10 pt-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
                      priorityClasses[item.priority]
                    }`}
                  >
                    <Flag size={13} />
                    Prioridad {item.priority.toLowerCase()}
                  </span>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs ${
                      statusClasses[item.status]
                    }`}
                  >
                    <CircleDot size={13} />
                    {item.status}
                  </span>

                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}