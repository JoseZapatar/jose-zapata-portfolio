import {
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  GraduationCap,
  MapPin,
  ServerCog,
} from "lucide-react";

const highlights = [
  "APIs REST",
  "Arquitectura por capas",
  "SQL Server",
  "React y Next.js",
  "ASP.NET Core",
  "Autenticación JWT",
];

const quickInfo = [
  {
    label: "Formación",
    value: "Ingeniería en Sistemas",
    icon: GraduationCap,
  },
  {
    label: "Ubicación",
    value: "Nicaragua",
    icon: MapPin,
  },
  {
    label: "Disponibilidad",
    value: "Abierto a oportunidades",
    icon: BriefcaseBusiness,
  },
  {
    label: "Enfoque",
    value: "Backend y Full Stack",
    icon: ServerCog,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(59,130,246,0.06),transparent_42%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-blue-400">
              Sobre mí
            </p>

            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Desarrollo soluciones que conectan una base técnica sólida con una
              experiencia de usuario clara.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              Soy estudiante de Ingeniería en Sistemas y desarrollador de
              software. Me especializo en aplicaciones web, APIs REST,
              autenticación, modelado de bases de datos y conexión entre
              frontend y backend.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-8 text-slate-500">
              Disfruto convertir requerimientos de negocio en sistemas
              organizados, mantenibles y fáciles de usar, cuidando tanto la
              arquitectura como los detalles de implementación.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300"
                >
                  <CheckCircle2 size={15} className="text-blue-400" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-white/[0.025] p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                <Code2 size={22} />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                  Perfil profesional
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white">
                  Información rápida
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              {quickInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-black/20 p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300">
                      <Icon size={18} />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.16em] text-slate-600">
                        {item.label}
                      </p>

                      <p className="mt-1 text-sm font-medium text-slate-200">
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-400/15 bg-emerald-500/[0.06] p-4">
              <p className="text-sm leading-6 text-emerald-200">
                Disponible para oportunidades remotas, prácticas profesionales
                y proyectos de desarrollo web.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}