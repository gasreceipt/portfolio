import { PortfolioContent } from '@/components/PortfolioContent';
import { projects as mockProjects } from '@/lib/data';
import { supabase } from '@/lib/supabase';
import { Project } from '@/lib/types';

async function getProjects(): Promise<Project[]> {
  if (!supabase) {
    console.warn('Supabase client not initialized (missing env vars). Using mock data.');
    return mockProjects;
  }

  try {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching projects from Supabase:', error);
      return mockProjects;
    }

    if (!data || data.length === 0) {
      console.warn('No projects found in Supabase. Using mock data.');
      return mockProjects;
    }

    return data as Project[];
  } catch (err) {
    console.error('Unexpected error fetching projects:', err);
    return mockProjects;
  }
}

export default async function Home() {
  const projects = await getProjects();

  return <PortfolioContent initialProjects={projects} />;
}
