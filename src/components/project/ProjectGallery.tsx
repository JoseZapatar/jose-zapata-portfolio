import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { ProjectDetail } from "@/data/projectDetails";

type ProjectGalleryProps = {
  gallery: ProjectDetail["gallery"];
};

export default function ProjectGallery({
  gallery,
}: ProjectGalleryProps) {
  if (!gallery.length) {
    return null;
  }

  return (
    <section className="px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
          Galería
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Recorrido por las principales pantallas
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-slate-400">
          Estas vistas muestran el flujo principal de la plataforma y la forma
          en que los usuarios interactúan con viajes, reservas y herramientas
          de gestión.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {gallery.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className={`group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="relative overflow-hidden border-b border-white/10 bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1919}
                  height={946}
                  className="h-auto w-full object-cover object-top transition duration-700 group-hover:scale-[1.015]"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex items-start justify-between gap-6 p-6 sm:p-7">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-blue-400">
                    Pantalla {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                    {item.description}
                  </p>
                </div>

                <ArrowUpRight
                  size={20}
                  className="mt-1 shrink-0 text-slate-600 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}   