import { MetadataRoute } from 'next';
import { getProjects } from '@/lib/supabase';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const projects = await getProjects();
    const baseUrl = 'https://maxwell.ltd';

    const projectUrls = projects.map((project) => ({
        url: `${baseUrl}/project/${project.id}`,
        lastModified: new Date(project.created_at),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        ...projectUrls,
    ];
}
