import { ArrowUpRight, ExternalLink, Server } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { Project } from "@/data/projects";

type ProjectCTAProps = {
  project: Project;
};

export default function ProjectCTA({ project }: ProjectCTAProps) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/15 via-white/[0.04] to-transparent px-6 py-16 text-center sm:px-12">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Explorar el proyecto
        </p>

        <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Prueba la plataforma o revisa su implementación
        </h2>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              <ExternalLink size={17} />
              Abrir demo
              <ArrowUpRight size={15} />
            </a>
          )}

          <a
            href={project.frontendUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            <FaGithub size={17} />
            Ver frontend
          </a>

          <a
            href={project.backendUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
          >
            <Server size={17} />
            Ver backend
          </a>
        </div>
      </div>
    </section>
  );
}