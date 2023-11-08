import React, { useEffect, useState } from 'react';
import { FaGithub, FaRegEye } from "react-icons/fa6";
import Image from "next/image";

interface ProjectCardProps {
    name: string;
    githubUsername: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, githubUsername }) => {
    const [description, setDescription] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string>('');
    const [mainBranch, setMainBranch] = useState<string>('main'); // Standardmäßig als "main" festlegen
    const [demoLink, setDemoLink] = useState<string | null>(null); // Link für den "View Demo"-Button

    useEffect(() => {
        // GitHub API-URL, um Informationen über das Repository zu erhalten
        const repoInfoUrl = `https://api.github.com/repos/${githubUsername}/${name}`;

        fetch(repoInfoUrl)
            .then((response) => response.json())
            .then((data) => {
                // Überprüfe den Namen des Hauptzweigs (Default Branch)
                if (data.default_branch) {
                    setMainBranch(data.default_branch);
                }
            })
            .catch((error) => console.error(error));
        }, [name, githubUsername]);

    useEffect(() => {
        // GitHub ReadMe-URL basierend auf dem Hauptzweig
        const readmeUrl = `https://raw.githubusercontent.com/${githubUsername}/${name}/${mainBranch}/README.md`;

        fetch(readmeUrl)
            .then((response) => response.text())
            .then((data) => {
                try {
                    const descriptionMatch = /# (.+)\n\n(.+)/.exec(data);
                    if (descriptionMatch) {
                        setDescription(descriptionMatch[2]);
                    } else {
                        setDescription('Beschreibung nicht gefunden');
                    }

                    const imageMatch = /!\[image\]\((.+)\)/.exec(data);
                    if (imageMatch) {
                        setImageSrc(imageMatch[1]);
                    } else {
                        setImageSrc('https://via.placeholder.com/900x500');
                    }

                    // Überprüfe, ob es ein <a> mit der ID "demo" gibt
                    const demoLinkMatch = /<a id="demo" href="(.+)">Demo<\/a>/.exec(data);
                    if (demoLinkMatch) {
                        setDemoLink(demoLinkMatch[1]);
                    } else {
                        setDemoLink(null); // Setze den Demo-Link auf null, wenn nicht gefunden
                    }
                }
                catch (error) {
                    console.error(error);
                }
            })
            .catch((error) => console.error(error));
    }, [name, githubUsername, mainBranch]);

    return (
        <div className="border border-amber-600 p-4 rounded-lg">
            <h2 className="text-3xl font-bold">{name}</h2>
            <p className="text-gray-600 py-3">{description}</p>
            <Image
                src={imageSrc}
                alt={name}
                width={900}
                height={500}
                className="mt-2 cursor-zoom-in"
            />
            <div className="mt-3">
                <button className="bg-amber-600 hover-bg-amber-500 text-white font-bold py-2 px-4 rounded mt-2 mr-5">
                    <a href={`https://github.com/${githubUsername}/${name}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="inline-block mr-2 text-2xl" />
                        View Project
                    </a>
                </button>
                {demoLink && (
                    <button className="bg-amber-600 hover-bg-amber-500 text-white font-bold py-2 px-4 rounded mt-2">
                        <a href={demoLink} target="_blank" rel="noopener noreferrer">
                            <FaRegEye className="inline-block mr-2 text-2xl" />
                            View Demo
                        </a>
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
