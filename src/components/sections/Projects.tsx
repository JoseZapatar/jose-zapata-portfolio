"use client";

import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  Server,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

import { projects } from "@/data/projects";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 lg:px-8"
    >
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/[0.04] blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="max-w-3xl"
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Proyectos seleccionados
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Aplicaciones completas, desde la base de datos hasta la interfaz.
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-400 sm:text-lg">
            Casos de estudio donde documento la arquitectura, el modelo de
            datos, los endpoints, las decisiones técnicas y los principales
            retos de implementación.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b0f18] transition-colors duration-300 hover:border-white/20 hover:shadow-[0_24px_80px_rgba(0,0,0,0.35)]"
            >
              <div
                className={`pointer-events-none absolute inset-x-0 top-0 h-80 bg-gradient-to-b ${project.accent}`}
              />

              {project.image ? (
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block overflow-hidden border-b border-white/10 bg-black/30"
                  aria-label={`Ver caso de estudio de ${project.title}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={`Vista principal de ${project.title}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.025]"
                    />

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0f18]/70 via-transparent to-transparent" />
                  </div>
                </Link>
              ) : (
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden border-b border-white/10 bg-black/25">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.accent}`}
                  />

                  <div className="relative text-center">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
                      Proyecto {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-3 text-3xl font-semibold text-white/80">
                      {project.title}
                    </p>
                  </div>
                </div>
              )}

              <div className="relative flex flex-1 flex-col p-7 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-slate-600">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium ${
                      project.status === "Live"
                        ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "border-slate-400/20 bg-slate-400/10 text-slate-300"
                    }`}
                  >
                    <span className="relative flex h-1.5 w-1.5">
                      {project.status === "Live" && (
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      )}

                      <span
                        className={`relative inline-flex h-1.5 w-1.5 rounded-full ${
                          project.status === "Live"
                            ? "bg-emerald-400"
                            : "bg-slate-400"
                        }`}
                      />
                    </span>

                    {project.status === "Live"
                      ? "Aplicación en vivo"
                      : "Código disponible"}
                  </span>
                </div>

                <div className="mt-7">
                  <p className="text-sm font-medium text-blue-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    {project.subtitle}
                  </p>

                  <p className="mt-5 min-h-[84px] leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="mt-7 min-h-[132px] rounded-2xl border border-white/10 bg-black/20 p-5 transition duration-300 group-hover:border-white/15 group-hover:bg-black/25">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                    Problema abordado
                  </p>

                  <p className="mt-3 line-clamp-3 text-sm leading-7 text-slate-400">
                    {project.problem}
                  </p>
                </div>

                <div className="mt-7 space-y-3">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 text-sm text-slate-300"
                    >
                      <CheckCircle2
                        size={16}
                        className="shrink-0 text-blue-400"
                      />

                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5 font-mono text-xs text-slate-300 transition duration-200 hover:border-blue-400/20 hover:bg-blue-500/[0.07] hover:text-blue-200"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-9">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)]"
                  >
                    Ver caso de estudio
                    <ArrowUpRight size={16} />
                  </Link>

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/25 bg-blue-500/10 px-5 py-3.5 text-sm font-medium text-blue-200 transition duration-300 hover:border-blue-400/45 hover:bg-blue-500/20"
                    >
                      <ExternalLink size={16} />
                      Ver aplicación
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <a
                      href={project.frontendUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    >
                      <FaGithub size={16} />
                      Frontend
                    </a>

                    <a
                      href={project.backendUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-300 transition duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                    >
                      <Server size={16} />
                      Backend
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center"
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.55,
            delay: 0.2,
          }}
        >
          <a
            href="https://github.com/JoseZapatar"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.025] px-5 py-3 text-sm font-medium text-slate-400 transition duration-300 hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
          >
            <FaGithub size={17} />
            Ver más proyectos en GitHub
            <ArrowUpRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}