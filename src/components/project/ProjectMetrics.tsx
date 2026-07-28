import {
  Activity,
  BarChart3,
  Braces,
  Database,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectMetricsProps = {
  metrics: ProjectDetail["metrics"];
};

const icons = [Braces, BarChart3, Database, Activity];

export default function ProjectMetrics({
  metrics,
}: ProjectMetricsProps) {
  if (!metrics.length) {
    return null;
  }

  return (
    <section className="border-b border-white/10 px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={`${metric.label}-${metric.value}`}
                className="group relative border-b border-white/10 p-6 transition hover:bg-white/[0.04] sm:p-7 lg:border-b-0 lg:border-r last:border-b-0 last:lg:border-r-0"
              >
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-semibold tracking-tight text-white">
                      {metric.value}
                    </p>

                    <h3 className="mt-2 text-sm font-medium text-slate-200">
                      {metric.label}
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-500/10 text-blue-300">
                    <Icon size={18} />
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-slate-500">
                  {metric.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}