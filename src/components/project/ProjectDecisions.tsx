import type { ProjectDetail } from "@/data/projectDetails";

type ProjectDecisionsProps = {
  decisions: ProjectDetail["decisions"];
};

export default function ProjectDecisions({
  decisions,
}: ProjectDecisionsProps) {
  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
            Decisiones técnicas
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Las herramientas fueron elegidas según las necesidades del sistema
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Cada tecnología cumple una responsabilidad específica dentro de la
            arquitectura y permite mantener una separación clara entre capas.
          </p>
        </div>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {decisions.map((decision) => (
            <article key={decision.question} className="py-7">
              <h3 className="text-lg font-semibold text-white">
                {decision.question}
              </h3>

              <p className="mt-4 leading-8 text-slate-400">
                {decision.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}