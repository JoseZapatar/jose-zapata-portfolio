import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { getProjectDetail } from "@/data/projectDetails";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return { title: "Proyecto no encontrado", robots: { index: false, follow: false } };
  }

  const url = `${siteConfig.url}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url,
      siteName: `${siteConfig.name} Portfolio`,
      title: `${project.title} — Case Study`,
      description: project.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Case Study`,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  const detail = getProjectDetail(slug);

  if (!project || !detail) notFound();

  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-[76px]">
        <section className="border-b border-white/10">
          <div className="editorial-container py-[clamp(4rem,8vw,8rem)]">
            <Link href="/#projects" className="link-underline inline-flex items-center gap-2 pb-1 text-sm text-[#9EA298] hover:text-[#ECE9DF]">
              <ArrowLeft size={15} /> Volver a proyectos
            </Link>

            <div className="mt-[clamp(4rem,8vw,7rem)] grid gap-12 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="editorial-label">Case study / {project.title}</p>
                <h1 className="mt-7 text-[clamp(4rem,9vw,9rem)] font-medium leading-[0.88] tracking-[-0.07em]">
                  {project.title}
                </h1>
                <p className="mt-8 max-w-3xl text-[clamp(1.25rem,2vw,1.8rem)] leading-[1.45] text-[#B7BBB1]">
                  {project.subtitle}
                </p>
              </div>

              <div className="lg:col-span-4 lg:pb-2">
                <p className="text-sm leading-7 text-[#8D918B]">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 pb-1 hover:text-[#D7FF43]">
                      Live project <ArrowUpRight size={14} />
                    </a>
                  )}
                  <a href={project.frontendUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 pb-1 hover:text-[#D7FF43]">
                    Frontend <ArrowUpRight size={14} />
                  </a>
                  <a href={project.backendUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 pb-1 hover:text-[#D7FF43]">
                    Backend <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {project.image && (
          <section className="editorial-container py-[clamp(3rem,7vw,7rem)]">
            <div className="product-frame">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[0.62rem] bg-[#0d0e0c]">
                <Image src={project.image} alt={`Vista principal de ${project.title}`} fill priority sizes="100vw" className="object-cover object-top" />
              </div>
            </div>
          </section>
        )}

        <section className="border-y border-white/10">
          <div className="editorial-container grid lg:grid-cols-2">
            <article className="py-[clamp(4rem,7vw,7rem)] lg:border-r lg:border-white/10 lg:pr-16">
              <p className="editorial-label">Problem / 01</p>
              <p className="mt-7 text-[clamp(1.7rem,3vw,3.1rem)] leading-[1.12] tracking-[-0.035em]">{project.problem}</p>
            </article>
            <article className="border-t border-white/10 py-[clamp(4rem,7vw,7rem)] lg:border-t-0 lg:pl-16">
              <p className="editorial-label">Solution / 02</p>
              <p className="mt-7 text-[clamp(1.7rem,3vw,3.1rem)] leading-[1.12] tracking-[-0.035em] text-[#B7BBB1]">{project.solution}</p>
            </article>
          </div>
        </section>

        <section className="section-shell">
          <div className="editorial-container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="editorial-label">System / 03</p>
            </div>
            <div className="lg:col-span-9">
              <h2 className="section-heading max-w-4xl">{detail.architecture.title}</h2>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-[#9EA298]">{detail.architecture.description}</p>

              <div className="mt-16 border-t border-white/10">
                {detail.architecture.layers.map((layer, index) => (
                  <article key={layer.name} className="grid gap-5 border-b border-white/10 py-8 md:grid-cols-[80px_1fr_1fr]">
                    <p className="editorial-label">{String(index + 1).padStart(2, "0")}</p>
                    <div>
                      <h3 className="text-xl font-medium">{layer.name}</h3>
                      <p className="mt-3 leading-7 text-[#9EA298]">{layer.responsibility}</p>
                    </div>
                    <p className="text-sm leading-7 text-[#747870] md:text-right">{layer.technologies.join(" · ")}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-white/10 section-shell">
          <div className="editorial-container grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-3"><p className="editorial-label">Decisions / 04</p></div>
            <div className="lg:col-span-9 divide-y divide-white/10 border-y border-white/10">
              {detail.decisions.map((decision, index) => (
                <article key={decision.question} className="grid gap-5 py-8 md:grid-cols-[70px_1fr_1.15fr]">
                  <p className="editorial-label">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="text-xl leading-7">{decision.question}</h3>
                  <p className="leading-7 text-[#A6AAA1]">{decision.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {detail.gallery.length > 0 && (
          <section className="section-shell">
            <div className="editorial-container">
              <div className="grid gap-10 lg:grid-cols-12">
                <p className="editorial-label lg:col-span-3">Product / 05</p>
                <h2 className="section-heading lg:col-span-9">El resultado en uso.</h2>
              </div>
              <div className="mt-16 grid gap-10">
                {detail.gallery.slice(0, 3).map((item) => (
                  <figure key={item.image}>
                    <div className="product-frame">
                      <Image src={item.image} alt={item.title} width={1600} height={900} className="h-auto w-full rounded-[0.62rem]" />
                    </div>
                    <figcaption className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                      <span>{item.title}</span>
                      <span className="text-[#747870] sm:text-right">{item.description}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-y border-white/10 section-shell">
          <div className="editorial-container grid gap-12 lg:grid-cols-12">
            <p className="editorial-label lg:col-span-3">Lessons / 06</p>
            <div className="lg:col-span-9">
              <h2 className="section-heading">Lo que aprendí construyéndolo.</h2>
              <ol className="mt-14 divide-y divide-white/10 border-y border-white/10">
                {detail.lessons.map((lesson, index) => (
                  <li key={lesson} className="grid gap-4 py-7 sm:grid-cols-[70px_1fr]">
                    <span className="editorial-label">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-lg leading-8 text-[#B7BBB1]">{lesson}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="section-shell">
          <div className="editorial-container">
            <p className="editorial-label">Next case study</p>
            <Link href={`/projects/${nextProject.slug}`} className="group mt-8 flex items-end justify-between gap-8 border-b border-white/10 pb-8 hover:text-[#D7FF43]">
              <span className="text-[clamp(3.2rem,8vw,8rem)] font-medium leading-none tracking-[-0.065em]">{nextProject.title}</span>
              <ArrowUpRight className="mb-2 shrink-0 transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" size={36} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
