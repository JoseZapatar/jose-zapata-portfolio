"use client";

import {
  Braces,
  Code2,
  Database,
  GitBranch,
  ServerCog,
  Wrench,
} from "lucide-react";

import { motion } from "motion/react";

const skillGroups = [
  {
    number: "01",
    title: "Backend",
    subtitle: "APIs y lógica de negocio",
    description:
      "Desarrollo servicios REST, autenticación, validaciones y acceso a datos utilizando una arquitectura organizada.",
    technologies: [
      "ASP.NET Core",
      "C#",
      "REST APIs",
      "JWT",
      "Entity Framework",
      "PHP",
    ],
    icon: ServerCog,
  },
  {
    number: "02",
    title: "Frontend",
    subtitle: "Interfaces modernas",
    description:
      "Construyo aplicaciones web responsivas, reutilizables y conectadas de forma eficiente con servicios backend.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
    ],
    icon: Code2,
  },
  {
    number: "03",
    title: "Bases de datos",
    subtitle: "Modelado y persistencia",
    description:
      "Diseño modelos relacionales orientados a la integridad, trazabilidad y crecimiento de las aplicaciones.",
    technologies: [
      "SQL Server",
      "MySQL",
      "Supabase",
      "Normalización",
      "Consultas SQL",
      "Relaciones",
    ],
    icon: Database,
  },
  {
    number: "04",
    title: "Herramientas",
    subtitle: "Flujo de desarrollo",
    description:
      "Utilizo herramientas de control de versiones, pruebas de API y despliegue para mantener un proceso de trabajo consistente.",
    technologies: [
      "Git",
      "GitHub",
      "Postman",
      "Swagger",
      "Linux",
      "Vercel",
    ],
    icon: Wrench,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.985,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative scroll-mt-24 overflow-hidden px-6 py-24 lg:px-8"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(59,130,246,0.055),transparent_42%)]"
        animate={{
          opacity: [0.55, 0.85, 0.55],
        }}
        transition={{
          duration: 7,
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
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
            Tecnologías
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Herramientas que utilizo para construir soluciones completas.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400">
            Trabajo con un stack orientado al desarrollo Full Stack, combinando
            backend, frontend, bases de datos y herramientas de despliegue para
            cubrir el ciclo completo de una aplicación.
          </p>
        </motion.div>

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.title}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition-colors duration-300 hover:border-blue-400/25 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="absolute right-6 top-4 font-mono text-6xl font-semibold text-white/[0.025] transition duration-300 group-hover:text-blue-400/[0.07]">
                  {group.number}
                </div>

                <div className="relative">
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/[0.06] text-blue-300 transition duration-300 group-hover:scale-110 group-hover:border-blue-400/35 group-hover:bg-blue-500/10">
                      <Icon size={22} />
                    </div>

                    <span className="font-mono text-xs uppercase tracking-[0.18em] text-slate-600">
                      {group.number}
                    </span>
                  </div>

                  <p className="mt-6 text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                    {group.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
                    {group.description}
                  </p>

                  <div className="mt-6 grid gap-2 sm:grid-cols-2">
                    {group.technologies.map((technology, index) => (
                      <motion.div
                        key={technology}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                        }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/20 px-4 py-3 transition duration-300 hover:border-blue-400/20 hover:bg-blue-500/[0.04]"
                      >
                        <Braces
                          size={14}
                          className="shrink-0 text-blue-400"
                        />

                        <span className="text-sm text-slate-300">
                          {technology}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
          initial={{
            opacity: 0,
            y: 24,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            borderColor: "rgba(167, 139, 250, 0.25)",
          }}
        >
          <div className="flex items-start gap-4">
            <motion.div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300"
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <GitBranch size={20} />
            </motion.div>

            <div>
              <p className="text-sm font-medium text-white">
                Mi stack continúa evolucionando
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-500">
                Actualmente estoy profundizando en Docker, arquitectura limpia,
                CI/CD y despliegue en la nube.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 sm:justify-end">
            {["Docker", "Clean Architecture", "CI/CD", "Cloud"].map(
              (technology, index) => (
                <motion.span
                  key={technology}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + index * 0.07,
                  }}
                  className="rounded-full border border-violet-400/15 bg-violet-500/[0.06] px-3 py-1.5 text-xs text-violet-200 transition duration-300 hover:border-violet-400/30 hover:bg-violet-500/10"
                >
                  {technology}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}