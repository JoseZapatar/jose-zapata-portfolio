import {
  Braces,
  Database,
  LayoutTemplate,
  Network,
} from "lucide-react";

const approaches = [
  {
    number: "01",
    title: "Arquitectura",
    description:
      "Antes de implementar, defino las responsabilidades, entidades, módulos y comunicación entre las distintas partes del sistema.",
    items: [
      "Separación por capas",
      "Diseño modular",
      "Flujos de negocio",
      "Escalabilidad",
    ],
    icon: Network,
  },
  {
    number: "02",
    title: "Backend",
    description:
      "Desarrollo APIs REST mantenibles, con contratos claros, validaciones y mecanismos de seguridad para cada operación.",
    items: [
      "ASP.NET Core",
      "DTOs",
      "JWT y roles",
      "Entity Framework",
    ],
    icon: Braces,
  },
  {
    number: "03",
    title: "Frontend",
    description:
      "Construyo interfaces reutilizables que presentan la información de forma clara y se mantienen sincronizadas con la API.",
    items: [
      "React y Next.js",
      "TypeScript",
      "Estado remoto",
      "Diseño responsive",
    ],
    icon: LayoutTemplate,
  },
  {
    number: "04",
    title: "Base de datos",
    description:
      "Diseño modelos relacionales enfocados en la integridad, la trazabilidad y el crecimiento futuro de la aplicación.",
    items: [
      "Normalización",
      "Relaciones",
      "Índices",
      "SQL Server",
    ],
    icon: Database,
  },
];

export default function WorkApproach() {
  return (
    <section
      id="enfoque"
      className="relative overflow-hidden border-t border-white/10 px-6 py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
            Mi forma de trabajar
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Diseño cada solución antes de convertirla en código.
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
            Mi enfoque combina arquitectura, backend, frontend y modelado de
            datos para construir aplicaciones completas y coherentes.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {approaches.map((approach) => {
            const Icon = approach.icon;

            return (
              <article
                key={approach.title}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.04] sm:p-8"
              >
                <div className="absolute right-6 top-5 font-mono text-5xl font-semibold text-white/[0.025] transition group-hover:text-blue-400/[0.06]">
                  {approach.number}
                </div>

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition duration-300 group-hover:scale-110 group-hover:border-blue-400/35">
                    <Icon size={21} />
                  </div>

                  <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-slate-600">
                    Área {approach.number}
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold text-white">
                    {approach.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {approach.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {approach.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                      >
                        {item}
                      </span>
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