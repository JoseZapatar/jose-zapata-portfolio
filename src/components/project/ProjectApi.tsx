import {
  Database,
  Globe2,
  KeyRound,
  LockKeyhole,
  ServerCog,
  ShieldCheck,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectApiProps = {
  groups: ProjectDetail["apiEndpoints"];
};

const methodClasses = {
  GET: "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
  POST: "border-blue-400/20 bg-blue-500/10 text-blue-300",
  PUT: "border-amber-400/20 bg-amber-500/10 text-amber-300",
  PATCH: "border-violet-400/20 bg-violet-500/10 text-violet-300",
  DELETE: "border-red-400/20 bg-red-500/10 text-red-300",
};

const groupIcons = {
  Autenticación: KeyRound,
  Viajes: Globe2,
  Reservas: ServerCog,
  Disponibilidad: Database,
};

const accessIcons = {
  Público: Globe2,
  Autenticado: LockKeyhole,
  Administrador: ShieldCheck,
};

export default function ProjectApi({ groups }: ProjectApiProps) {
  if (!groups.length) {
    return null;
  }

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Diseño de la API
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Endpoints representativos del sistema
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            La API REST organiza sus operaciones por dominio y aplica distintos
            niveles de acceso para usuarios públicos, autenticados y
            administradores.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {groups.map((group) => {
            const GroupIcon =
              groupIcons[group.group as keyof typeof groupIcons] ?? ServerCog;

            return (
              <article
                key={group.group}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025]"
              >
                <header className="border-b border-white/10 p-7 sm:p-8">
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                      <GroupIcon size={22} />
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-white">
                        {group.group}
                      </h3>

                      <p className="mt-3 max-w-3xl leading-7 text-slate-400">
                        {group.description}
                      </p>
                    </div>
                  </div>
                </header>

                <div className="divide-y divide-white/10">
                  {group.endpoints.map((endpoint) => {
                    const AccessIcon = accessIcons[endpoint.access];

                    return (
                      <div
                        key={`${endpoint.method}-${endpoint.path}`}
                        className="grid gap-5 p-6 transition hover:bg-white/[0.025] sm:p-7 lg:grid-cols-[110px_1fr_180px]"
                      >
                        <div>
                          <span
                            className={`inline-flex min-w-20 justify-center rounded-lg border px-3 py-1.5 font-mono text-xs font-semibold ${
                              methodClasses[endpoint.method]
                            }`}
                          >
                            {endpoint.method}
                          </span>
                        </div>

                        <div>
                          <code className="break-all font-mono text-sm font-medium text-white sm:text-base">
                            {endpoint.path}
                          </code>

                          <p className="mt-3 text-sm leading-7 text-slate-400">
                            {endpoint.description}
                          </p>
                        </div>

                        <div className="flex lg:justify-end">
                          <span className="inline-flex h-fit items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-400">
                            <AccessIcon size={14} />
                            {endpoint.access}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}