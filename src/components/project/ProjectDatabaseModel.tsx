import {
  ArrowRight,
  Database,
  KeyRound,
  Network,
  Table2,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectDatabaseModelProps = {
  model: ProjectDetail["databaseModel"];
};

export default function ProjectDatabaseModel({
  model,
}: ProjectDatabaseModelProps) {
  if (!model.entities.length) {
    return null;
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Modelo de datos
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {model.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            {model.description}
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {model.entities.map((entity) => (
            <article
              key={entity.name}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] transition hover:-translate-y-1 hover:border-white/20"
            >
              <header className="border-b border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-500/10 text-cyan-300">
                    <Table2 size={20} />
                  </div>

                  <div>
                    <h3 className="font-mono text-lg font-semibold text-white">
                      {entity.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {entity.description}
                    </p>
                  </div>
                </div>
              </header>

              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Campos representativos
                </p>

                <div className="mt-4 space-y-2">
                  {entity.fields.map((field, index) => (
                    <div
                      key={`${entity.name}-${field}`}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3"
                    >
                      {index === 0 ? (
                        <KeyRound
                          size={14}
                          className="shrink-0 text-amber-300"
                        />
                      ) : (
                        <Database
                          size={14}
                          className="shrink-0 text-slate-600"
                        />
                      )}

                      <code className="break-all text-xs text-slate-300">
                        {field}
                      </code>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {model.relationships.length > 0 && (
          <div className="mt-14 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
                <Network size={22} />
              </div>

              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                  Relaciones principales
                </p>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  Cómo se conectan las entidades
                </h3>
              </div>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              {model.relationships.map((relationship, index) => (
                <div
                  key={`${relationship.from}-${relationship.to}-${index}`}
                  className="rounded-2xl border border-white/10 bg-black/20 p-5"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <code className="rounded-lg border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs text-blue-300">
                      {relationship.from}
                    </code>

                    <ArrowRight
                      size={17}
                      className="shrink-0 text-slate-600"
                    />

                    <code className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                      {relationship.to}
                    </code>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {relationship.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}