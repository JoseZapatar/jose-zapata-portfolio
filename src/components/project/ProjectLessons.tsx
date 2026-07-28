import {
  BrainCircuit,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectLessonsProps = {
  lessons: ProjectDetail["lessons"];
};

const icons = [
  BrainCircuit,
  Lightbulb,
  Sparkles,
  CheckCircle2,
];

export default function ProjectLessons({
  lessons,
}: ProjectLessonsProps) {
  if (!lessons.length) {
    return null;
  }

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Aprendizajes
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Lo que aprendí construyéndolo
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-400">
            Conocimientos técnicos y decisiones que fortalecieron mi
            forma de diseñar aplicaciones.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {lessons.map((lesson, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={lesson}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-white/[0.035]"
              >
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl transition group-hover:bg-blue-500/10" />

                <div className="relative flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-500/10 text-blue-300 transition group-hover:scale-110">
                    <Icon size={21} />
                  </div>

                  <div>
                    <span className="font-mono text-xs text-slate-600">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-2 text-base leading-8 text-slate-200">
                      {lesson}
                    </p>
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