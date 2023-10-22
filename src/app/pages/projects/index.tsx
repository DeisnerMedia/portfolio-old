// Projects.tsx
import React, { useState, useEffect } from 'react';
import { getGitHubRepos } from '@/app/services/api/github-api/githubApi';

// Components
import ProjectCard from '@/app/components/project-card/project-card';

interface GitHubRepo {
    id: number;
    name: string;
    description: string;
    html_url: string;
    fork: boolean;
}

export default function Projects() {
    const [projects, setProjects] = useState<GitHubRepo[]>([]);

    useEffect(() => {
        const githubUsername = 'deisnermedia';

        getGitHubRepos(githubUsername)
            .then((data: GitHubRepo[]) => {
                const filteredData = data.filter((project) => !project.fork && project.description !== 'README');
                setProjects(filteredData);
            })
            .catch((error) => {
                console.error('Fehler beim Abrufen der GitHub-Daten:', error);
            });
    }, []);

    return (
        <div className="flex justify-center items-center mt-44">
            <div className="p-8 mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center -mt-20">
                    <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">Projects</span>
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 justify-center mt-20">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            name={project.name}
                            githubUsername={'deisnermedia'}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
