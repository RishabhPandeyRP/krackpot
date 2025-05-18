import { notFound } from "next/navigation";
import ProjectsCard from "@/components/ProjectsCard";
import { projectData } from "@/data/projectData";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectData.find(p => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.heading} | Projects`,
    description: project.content,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projectData.find(p => p.slug === slug);

  if (!project) return notFound();

  return (
    <div className="bg-white mt-[110px] w-[100.1%]">
      <ProjectsCard item={project} />
    </div>
  );
}