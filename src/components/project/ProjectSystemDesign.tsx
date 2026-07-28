import {
  ArrowDown,
  Cloud,
  Code2,
  Database,
  KeyRound,
  ServerCog,
  UsersRound,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectSystemDesignProps = {
  design: ProjectDetail["systemDesign"];
};

const nodeStyles = {
  actor: {
    icon: UsersRound,
    classes:
      "border-violet-400/25 bg-violet-500/10 text-violet-300",
  },
  frontend: {
    icon: Code2,
    classes:
      "border-blue-400/25 bg-blue-500/10 text-blue-300",
  },
  backend: {
    icon: ServerCog,
    classes:
      "border-emerald-400/25 bg-emerald-500/10 text-emerald-300",
  },
  security: {
    icon: KeyRound,
    classes:
      "border-amber-400/25 bg-amber-500/10 text-amber-300",
  },
  persistence: {
    icon: Database,
    classes:
      "border-cyan-400/25 bg-cyan-500/10 text-cyan-300",
  },
  external: {
    icon: Cloud,
    classes:
      "border-slate-400/25 bg-slate-500/10 text-slate-300",
  },
};

export default function ProjectSystemDesign({
  design,
}: ProjectSystemDesignProps) {
  if (!design.nodes.length) {
    return null;
  }

  return (
    <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.07),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            System design
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {design.title}
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            {design.description}
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="pointer-events-none absolute left-1/2 top-10 hidden h-[calc(100%-5rem)] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent md:block" />

          <div className="space-y-8 md:space-y-10">
            {design.nodes.map((node, index) => {
              const style = nodeStyles[node.type];
              const Icon = style.icon;
              const isLast = index === design.nodes.length - 1;
              const alignLeft = index % 2 === 0;

              return (
                <div key={node.id}>
                  <div
                    className={`relative flex ${
                      alignLeft
                        ? "md:justify-start"
                        : "md:justify-end"
                    }`}
                  >
                    <article className="group relative w-full rounded-3xl border border-white/10 bg-[#080b12]/90 p-6 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)] md:w-[46%]">
                      <div
                        className={`absolute top-1/2 hidden h-px w-[9%] bg-blue-400/30 md:block ${
                          alignLeft
                            ? "-right-[9%]"
                            : "-left-[9%]"
                        }`}
                      />

                      <div className="absolute top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border border-blue-300/40 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.6)] md:block left-auto right-auto" />

                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border transition duration-300 group-hover:scale-110 ${style.classes}`}
                        >
                          <Icon size={21} />
                        </div>

                        <div>
                          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                            {node.type}
                          </span>

                          <h3 className="mt-2 text-lg font-semibold text-white">
                            {node.label}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-slate-400">
                            {node.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                  {!isLast && (
                    <div className="flex h-10 items-center justify-center md:hidden">
                      <ArrowDown
                        size={17}
                        className="text-blue-400/50"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}