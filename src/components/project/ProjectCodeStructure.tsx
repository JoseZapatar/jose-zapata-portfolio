import {
  Braces,
  ChevronRight,
  Code2,
  Database,
  FolderTree,
  Server,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectCodeStructureProps = {
  structures: ProjectDetail["codeStructure"];
};

const sectionIcons = {
  Frontend: Code2,
  Backend: Server,
  Persistencia: Database,
};

export default function ProjectCodeStructure({
  structures,
}: ProjectCodeStructureProps) {
  if (!structures.length) {
    return null;
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Organización del código
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Una estructura alineada con las responsabilidades del sistema
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            El proyecto divide la interfaz, la API y la persistencia para
            mantener una organización clara y facilitar la evolución de cada
            parte de la solución.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {structures.map((structure, structureIndex) => {
            const Icon =
              sectionIcons[structure.title as keyof typeof sectionIcons] ??
              FolderTree;

            return (
              <article
                key={structure.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/50"
              >
                <div className="grid lg:grid-cols-[0.7fr_1.3fr]">
                  <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                      <Icon size={22} />
                    </div>

                    <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-blue-400">
                      Capa {String(structureIndex + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold text-white">
                      {structure.title}
                    </h3>

                    <p className="mt-5 leading-8 text-slate-400">
                      {structure.description}
                    </p>
                  </div>

                  <div className="divide-y divide-white/10">
                    {structure.folders.map((folder) => (
                      <div
                        key={folder.name}
                        className="group grid gap-4 p-6 transition hover:bg-white/[0.025] sm:grid-cols-[220px_1fr] sm:p-7"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-slate-400 transition group-hover:border-blue-400/20 group-hover:text-blue-300">
                            <Braces size={17} />
                          </div>

                          <div>
                            <p className="font-mono text-sm font-medium text-white">
                              {folder.name}
                            </p>
                          </div>
                        </div>

                        <div className="flex gap-3">
                          <ChevronRight
                            size={17}
                            className="mt-1 hidden shrink-0 text-slate-700 sm:block"
                          />

                          <p className="text-sm leading-7 text-slate-400">
                            {folder.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}