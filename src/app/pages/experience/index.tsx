// Experience.tsx
import React from "react";
import ExperienceCard from '@/app/components/experience-card/experience-card';
import { experienceData } from '../../data/ExperienceData';

export default function Experience() {
    return (
        <div className="flex justify-center items-center mt-44">
            <div className="p-8 mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center -mt-20">
                    Working <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">Experience</span>
                </h1>
                <div className="flex flex-col justify-center items-center mt-20">
                    {experienceData.map((experience, index) => (
                        <div key={index}>
                            <ExperienceCard
                                from={experience.startDate}
                                to={experience.endDate}
                                type={experience.type}
                                jobTitle={experience.title}
                                location={experience.location}
                            />
                            {index < experienceData.length - 1 && (
                                <div className="w-fit mx-auto border-l-4 border-amber-600 h-12"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
