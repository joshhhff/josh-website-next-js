import AboutClient from "../components/about-client";
import ScrollTo from "../components/scroll-to";

export default async function About({ searchParams }: { searchParams?: Promise<{ scrollTo?: string }> }) {
  const params = await searchParams;
  
  return (
    <>
      {params?.scrollTo && <ScrollTo id={params.scrollTo} />}
      <AboutClient />
    </>
  );
}