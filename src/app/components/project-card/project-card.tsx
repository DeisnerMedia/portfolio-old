// project-card.tsx
import React from 'react';

// Icons
import { FaGithub, FaRegEye } from "react-icons/fa6";
interface ProjectCardProps {
    name: string;
    description: string;
    html_url: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, html_url }) => {
    return (
        <div className="border border-amber-600 p-4 rounded-lg">
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-gray-600">{description}</p>
            <img
                src="https://via.placeholder.com/900x500"
                alt={name}
                className="mt-2 cursor-zoom-in"
            />
            <div className="mt-3">
                <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mt-2 mr-5">
                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="inline-block mr-2 text-2xl" />
                        View Project
                    </a>
                </button>
                <button className="bg-amber-600 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded mt-2">
                    <a href={html_url} target="_blank" rel="noopener noreferrer">
                        <FaRegEye className="inline-block mr-2 text-2xl" />
                        View Demo
                    </a>
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
