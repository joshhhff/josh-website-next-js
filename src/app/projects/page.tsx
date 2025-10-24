import ProjectsClient from "../components/projects-client";
import ScrollTo from "../components/scroll-to";

export default async function Projects({ searchParams }: { searchParams?: Promise<{ scrollTo?: string }> }) {
  const params = await searchParams;
  
  return (
    <>
      {params?.scrollTo && <ScrollTo id={params.scrollTo} />}
      <ProjectsClient />
    </>
  );
}