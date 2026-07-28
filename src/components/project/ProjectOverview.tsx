import type { ProjectDetail } from "@/data/projectDetails";

type ProjectOverviewProps = {
  overview: ProjectDetail["overview"];
};

const labels = {
  status: "Estado",
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de datos",
  authentication: "Autenticación",
  deployment: "Despliegue",
};

export default function ProjectOverview({
  overview,
}: ProjectOverviewProps) {
  const items = Object.entries(overview) as [
    keyof typeof overview,
    string,
  ][];

  return (
    <section className="border-y border-white/10 bg-white/[0.02] px-6 py-14 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {items.map(([key, value]) => (
          <div key={key}>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
              {labels[key]}
            </p>

            <p className="mt-3 font-medium text-white">{value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}