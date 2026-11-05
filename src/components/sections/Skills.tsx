"use client";

import type { ComponentType } from "react";
import { Database } from "lucide-react";
import {
  SiDotnet,
  SiGit,
  SiGithub,
  SiLinux,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";

type StackIcon = ComponentType<{ className?: string; "aria-hidden"?: boolean | "true" | "false" }>;

const stack: { name: string; note: string; icon: StackIcon }[] = [
  { name: ".NET", note: "APIs REST", icon: SiDotnet },
  { name: "React", note: "Interfaces", icon: SiReact },
  { name: "TypeScript", note: "Frontend más seguro", icon: SiTypescript },
  { name: "SQL Server", note: "Diseño relacional", icon: Database },
  { name: "Next.js", note: "Aplicaciones web", icon: SiNextdotjs },
  { name: "MySQL", note: "Datos relacionales", icon: SiMysql },
  { name: "Tailwind CSS", note: "Sistemas de UI", icon: SiTailwindcss },
  { name: "Git", note: "Control de versiones", icon: SiGit },
  { name: "GitHub", note: "Colaboración", icon: SiGithub },
  { name: "Postman", note: "Pruebas de API", icon: SiPostman },
  { name: "Swagger", note: "Documentación de API", icon: SiSwagger },
  { name: "Linux", note: "Servidores", icon: SiLinux },
  { name: "Vercel", note: "Despliegue", icon: SiVercel },
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24">
      <div className="editorial-container">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <p className="editorial-label">Stack técnico / 03</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-[#8D918B]">Stack actual y herramientas que uso con frecuencia.</p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 border-l border-t border-white/10 sm:grid-cols-3">
              {stack.map(({ name, note, icon: Icon }) => (
                <div key={name} className="group relative min-h-44 border-b border-r border-white/10 p-6 transition-colors hover:bg-[#11130F] md:min-h-52 md:p-8">
                  <Icon className="h-8 w-8 text-[#BFC3B8] transition-all duration-300 group-hover:text-[#D7FF43] md:h-10 md:w-10" aria-hidden="true" />
                  <div className="absolute inset-x-6 bottom-6 md:inset-x-8 md:bottom-8">
                    <p className="text-base font-medium">{name}</p>
                    <p className="mt-1 text-sm text-[#6F736C] transition-colors group-hover:text-[#9EA298]">{note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
