'use client';

import Image from 'next/image';
import { Project } from '@/lib/types';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="group block h-full"
        >
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-white dark:bg-black border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] transition-all duration-100 flex flex-col"
            >
                {/* Title Bar */}
                <div className="border-b-2 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 p-2 flex justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 border border-black dark:border-white bg-white dark:bg-black" />
                        <div className="w-3 h-3 border border-black dark:border-white bg-white dark:bg-black" />
                        <div className="w-3 h-3 border border-black dark:border-white bg-white dark:bg-black" />
                    </div>
                    <span className="text-xs uppercase font-bold tracking-widest">System.View</span>
                </div>

                {/* Image Container */}
                <div className="relative aspect-[16/10] w-full border-b-2 border-black dark:border-white grayscale group-hover:grayscale-0 transition-all duration-300">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow space-y-4">
                    <div className="flex justify-between items-start">
                        <h3 className="text-lg font-bold uppercase tracking-tight text-black dark:text-white group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors px-1">
                            {project.title}
                        </h3>
                        <ExternalLink
                            size={20}
                            className="text-black dark:text-white"
                        />
                    </div>

                    <p className="text-black dark:text-white text-xs leading-relaxed line-clamp-3 flex-grow border-l-2 border-black dark:border-white pl-3">
                        {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2 py-1 text-[10px] font-bold border border-black dark:border-white bg-transparent text-black dark:text-white uppercase"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    );
}
