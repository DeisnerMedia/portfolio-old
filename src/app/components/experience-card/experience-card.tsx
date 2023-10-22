// ExperienceCard.js
import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';

interface ExperienceCardProps {
    from: string;
    to: string;
    type: string;
    jobTitle: string;
    location: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ from, to, type, jobTitle, location }) => {
    return (
        <div className="max-w-md center rounded overflow-hidden shadow-lg outline-amber-600 outline relative">
            <div className="px-2">
                <div className="text-orange-400 font-bold mt-2">
                    <span id="from">{from}</span>
                    <span> - </span>
                    <span id="to">{to}</span>
                </div>
                <div className="text-white font-bold text-end absolute top-0 right-0 mt-2 mr-2">
                    Type:
                    <span className="text-orange-400 font-bold"> {type}</span>
                </div>

                <div className="font-bold text-2xl mb-2 text-white max-w-6xl mx-auto mt-1">
                    <span id="Jobtitle">{jobTitle}</span>
                </div>
                <div className="flex items-center mb-3">
                    <FaLocationDot className="text-3xl text-orange-400" />
                    <p className="text-base ml-2 font-bold">
                        <span id="location">{location}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
