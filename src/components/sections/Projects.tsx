"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";

const narratives = [
  {
    problem: "Una agencia sin certificación no debía poder publicar viajes.",
    decision: "La validación debía protegerse desde la API y no depender del cliente.",
    result: "La regla permanece activa aunque cambie el frontend o se agregue una aplicación móvil.",
  },
  {
    problem: "Adoptantes, mascotas y solicitudes necesitaban convivir sin perder control de permisos.",
    decision: "Separar responsabilidades mediante roles, JWT y endpoints especializados.",
    result: "El flujo de adopción quedó más claro para usuarios y administradores.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24">
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-3"><p className="editorial-label">Selected work / 02</p></Reveal>
          <Reveal className="lg:col-span-9" delay={0.05}><h2 className="section-heading max-w-[920px] text-balance">
            Proyectos donde las decisiones técnicas importaron más que la cantidad de funcionalidades.
          </h2></Reveal>
        </div>

        <div className="mt-[clamp(7rem,12vw,12rem)] space-y-[clamp(11rem,16vw,18rem)]">
          {projects.map((project, index) => {
            const story = narratives[index] ?? narratives[0];
            const reverse = index % 2 === 1;

            return (
              <Reveal key={project.id} y={24}><article className="border-t border-white/10 pt-6">
                <div className="mb-12 flex items-start justify-between gap-6">
                  <p className="editorial-label">Case {String(index + 1).padStart(2, "0")}</p>
                  <p className="max-w-xs text-right text-sm text-[#8D918B]">{project.category}</p>
                </div>

                <div className="grid gap-12 lg:grid-cols-12 lg:items-start xl:gap-16">
                  <Link href={`/projects/${project.slug}`} className={`product-frame group block lg:col-span-8 ${reverse ? "lg:order-2" : ""}`}>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[0.62rem] bg-[#0d0e0c]">
                      {project.image ? (
                        <Image src={project.image} alt={`Vista principal de ${project.title}`} fill sizes="(max-width: 1024px) 100vw, 68vw" className="object-cover object-top transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.015]" />
                      ) : (
                        <div className="flex h-full items-center justify-center text-4xl font-medium">{project.title}</div>
                      )}
                    </div>
                  </Link>

                  <div className={`lg:col-span-4 ${reverse ? "lg:order-1 lg:pr-3" : "lg:pl-2"}`}>
                    <h3 className="text-[clamp(2.65rem,4.45vw,4.8rem)] font-medium leading-[0.97] tracking-[-0.052em]">
                      {index === 0 ? "Sistema de reservas para agencias certificadas." : "Una plataforma para organizar procesos de adopción."}
                    </h3>
                    <p className="mt-5 text-sm text-[#8D918B]">{project.title}</p>

                    <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
                      {[["Problem", story.problem], ["Decision", story.decision], ["Result", story.result]].map(([label, value]) => (
                        <div key={label} className="group/row grid gap-3 py-6 sm:grid-cols-[105px_1fr]">
                          <p className="editorial-label transition-colors duration-300 group-hover/row:text-[#D7FF43]">{label}</p>
                          <p className="leading-7 text-[#B8BCB2] transition-colors duration-300 group-hover/row:text-[#D2D5CD]">{value}</p>
                        </div>
                      ))}
                    </div>

                    <Link href={`/projects/${project.slug}`} className="link-underline mt-8 inline-flex items-center gap-2 pb-1 text-sm transition-colors duration-300 hover:text-[#D7FF43]">
                      Explore case study <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </article></Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
