import React from "react";

export default function About() {
    return (
        <div className="flex justify-center items-center mt-32 relative">
            <div className="p-8 mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-center">
                    About <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">Me</span>
                </h1>
                <p className="text-2xl text-white mt-8 max-w-6xl mx-auto tracking-widest font-bold">
                    Hello, I&apos;m Dominik Deisner, a Fullstack Developer and Computer Science Expert with a passion for the world of technology and innovation.
                </p>
                <p className="text-2xl text-white mt-8 max-w-6xl mx-auto tracking-widest">
                    Since 2020, I&apos;ve been working in the exciting and ever-evolving realm of software development.
                </p>
                <p className="text-2xl text-white mt-8 max-w-6xl mx-auto tracking-widest">
                    My vision is to always be ready for the future. In a time when technology increasingly shapes our lives, I&apos;m dedicated to creating innovative solutions that can enhance the way we work and live.
                </p>
            </div>
        </div>
    );
}