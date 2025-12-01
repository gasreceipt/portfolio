'use client';

import { useState, useMemo } from 'react';
import { Hero } from '@/components/Hero';
import { FilterBar } from '@/components/FilterBar';
import { ProjectCard } from '@/components/ProjectCard';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';

interface PortfolioContentProps {
    initialProjects: Project[];
}

export function PortfolioContent({ initialProjects }: PortfolioContentProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Extract all unique tags
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        initialProjects.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [initialProjects]);

    // Filter projects
    const filteredProjects = useMemo(() => {
        return initialProjects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;
            return matchesSearch && matchesTag;
        });
    }, [initialProjects, searchQuery, selectedTag]);

    return (
        <div className="min-h-screen pb-20">
            <Hero />

            <div className="container mx-auto px-4">
                <FilterBar
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    selectedTag={selectedTag}
                    setSelectedTag={setSelectedTag}
                    allTags={allTags}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
                    {filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 text-zinc-500"
                    >
                        No projects found matching your criteria.
                    </motion.div>
                )}
            </div>
        </div>
    );
}
