import { PortfolioContent } from '@/components/PortfolioContent';
import { getProjects } from '@/lib/supabase';
export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const projects = await getProjects();

  return <PortfolioContent initialProjects={projects} />;
}
