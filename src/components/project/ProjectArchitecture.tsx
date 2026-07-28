import {
  ArrowDown,
  Boxes,
  Database,
  Layers3,
  Monitor,
  ServerCog,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectArchitectureProps = {
  architecture: ProjectDetail["architecture"];
};

const layerStyles = {
  presentation: {
    icon: Monitor,
    classes:
      "border-blue-400/20 bg-blue-500/10 text-blue-300",
  },
  application: {
    icon: ServerCog,
    classes:
      "border-emerald-400/20 bg-emerald-500/10 text-emerald-300",
  },
  domain: {
    icon: Boxes,
    classes:
      "border-violet-400/20 bg-violet-500/10 text-violet-300",
  },
  infrastructure: {
    icon: Layers3,
    classes:
      "border-amber-400/20 bg-amber-500/10 text-amber-300",
  },
  persistence: {
    icon: Database,
    classes:
      "border-cyan-400/20 bg-cyan-500/10 text-cyan-300",
  },
};

export default function ProjectArchitecture({
  architecture,
}: ProjectArchitectureProps) {
  if (!architecture.layers.length) {
    return null;
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Arquitectura por capas
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {architecture.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            {architecture.description}
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-5xl">
          {architecture.layers.map((layer, index) => {
            const style = layerStyles[layer.type];
            const Icon = style.icon;
            const isLast =
              index === architecture.layers.length - 1;

            return (
              <div key={layer.name}>
                <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.035] sm:p-8">
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-blue-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border ${style.classes}`}
                    >
                      <Icon size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <h3 className="text-xl font-semibold text-white">
                          {layer.name}
                        </h3>

                        <span className="font-mono text-xs uppercase tracking-[0.16em] text-slate-600">
                          {layer.type}
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {layer.responsibility}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {layer.technologies.map((technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-slate-300"
                          >
                            {technology}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>

                {!isLast && (
                  <div className="flex h-16 flex-col items-center justify-center">
                    <div className="h-5 w-px bg-white/15" />

                    <ArrowDown
                      size={17}
                      className="text-blue-400/60"
                    />

                    <div className="h-5 w-px bg-white/15" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}