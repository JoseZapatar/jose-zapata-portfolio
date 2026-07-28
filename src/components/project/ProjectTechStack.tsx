import type { ProjectDetail } from "@/data/projectDetails";

type ProjectTechStackProps = {
  groups: ProjectDetail["techStack"];
};

export default function ProjectTechStack({
  groups,
}: ProjectTechStackProps) {
  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Stack tecnológico
        </p>

        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tecnologías utilizadas en la solución
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 space-y-3">
                {group.technologies.map((technology) => (
                  <div
                    key={technology}
                    className="border-b border-white/10 pb-3 text-sm text-slate-300 last:border-0 last:pb-0"
                  >
                    {technology}
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
} 