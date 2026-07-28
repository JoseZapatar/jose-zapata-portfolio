import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import ProjectArchitecture from "@/components/project/ProjectArchitecture";
import ProjectCTA from "@/components/project/ProjectCTA";
import ProjectDecisions from "@/components/project/ProjectDecisions";
import ProjectFeatures from "@/components/project/ProjectFeatures";
import ProjectFlow from "@/components/project/ProjectFlow";
import ProjectHero from "@/components/project/ProjectHero";
import ProjectLessons from "@/components/project/ProjectLessons";
import ProjectOverview from "@/components/project/ProjectOverview";
import ProjectTechStack from "@/components/project/ProjectTechStack";
import { getProjectDetail } from "@/data/projectDetails";
import { projects } from "@/data/projects";
import ProjectGallery from "@/components/project/ProjectGallery";
import ProjectCodeStructure from "@/components/project/ProjectCodeStructure";
import ProjectApi from "@/components/project/ProjectApi";
import ProjectChallenges from "@/components/project/ProjectChallenges";
import ProjectRoadmap from "@/components/project/ProjectRoadmap";
import ProjectSystemDesign from "@/components/project/ProjectSystemDesign";
import ProjectDatabaseModel from "@/components/project/ProjectDatabaseModel";
import ProjectMetrics from "@/components/project/ProjectMetrics";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find(
    (currentProject) => currentProject.slug === slug,
  );

  if (!project) {
    return {
      title: "Proyecto no encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectUrl = `${siteConfig.url}/projects/${project.slug}`;


  return {
    title: project.title,
    description: project.description,

    alternates: {
      canonical: projectUrl,
    },

    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      url: projectUrl,
      siteName: `${siteConfig.name} Portfolio`,
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
    },

    twitter: {
      card: "summary_large_image",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
    },
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);
  const detail = getProjectDetail(slug);

  if (!project || !detail) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="overflow-hidden pt-16">
        <ProjectHero project={project} />

        <ProjectMetrics metrics={detail.metrics} />

        <ProjectSystemDesign design={detail.systemDesign} />

        <ProjectOverview overview={detail.overview} />

        <ProjectArchitecture architecture={detail.architecture} />

        <ProjectDatabaseModel model={detail.databaseModel} />

        <ProjectCodeStructure structures={detail.codeStructure} />

        <ProjectApi groups={detail.apiEndpoints} />

        <ProjectChallenges challenges={detail.challenges} />

        <ProjectFlow flows={detail.flow} />

        <ProjectFeatures features={detail.features} />

        <ProjectTechStack groups={detail.techStack} />

        <ProjectDecisions decisions={detail.decisions} />

        <ProjectGallery gallery={detail.gallery} />

        <ProjectRoadmap roadmap={detail.roadmap} />

        <ProjectLessons lessons={detail.lessons} />

        <ProjectCTA project={project} />
      </main>
    </>
  );
} 