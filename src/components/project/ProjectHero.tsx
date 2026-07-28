import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  Server,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <>
      <section className="relative border-b border-white/10 px-6 py-20 lg:px-8 lg:py-24">
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-gradient-to-b ${project.accent}`}
        />

        <div className="relative mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Volver a proyectos
          </Link>

          <div className="mt-14 grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
                  Proyecto destacado
                </span>

                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
                  Aplicación en vivo
                </span>
              </div>

              <p className="mt-7 text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
                {project.category}
              </p>

              <h1 className="mt-5 text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
                {project.title}
              </h1>

              <p className="mt-5 max-w-3xl text-xl leading-8 text-slate-300">
                {project.subtitle}
              </p>

              <p className="mt-7 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 text-sm font-medium text-white transition hover:bg-blue-500"
                >
                  <ExternalLink size={17} />
                  Abrir aplicación
                  <ArrowUpRight size={16} />
                </a>
              )}

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={project.frontendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <FaGithub size={17} />
                  Frontend
                </a>

                <a
                  href={project.backendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                >
                  <Server size={17} />
                  Backend
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {project.image && (
        <section className="px-6 pb-12 pt-12 lg:px-8 lg:pb-20">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-3 shadow-2xl shadow-blue-950/20">
              <div className="overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={project.image}
                  alt={`Captura principal de ${project.title}`}
                  width={1919}
                  height={946}
                  priority
                  className="h-auto w-full object-cover object-top transition duration-700 hover:scale-[1.015]"
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between gap-4 text-sm text-slate-500">
              <p>Vista principal de la aplicación.</p>

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 transition hover:text-blue-300"
                >
                  Probar aplicación
                  <ArrowUpRight size={15} />
                </a>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
}