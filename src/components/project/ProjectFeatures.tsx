import {
  BadgeCheck,
  CalendarCheck,
  Plane,
  RefreshCcw,
  Settings,
  ShieldCheck,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectFeaturesProps = {
  features: ProjectDetail["features"];
};

const icons = {
  Plane,
  CalendarCheck,
  ShieldCheck,
  BadgeCheck,
  Settings,
  RefreshCcw,
};

export default function ProjectFeatures({
  features,
}: ProjectFeaturesProps) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Funcionalidades
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Procesos principales de la plataforma
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = icons[feature.icon as keyof typeof icons] ?? Settings;

            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:-translate-y-1 hover:border-white/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {feature.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}