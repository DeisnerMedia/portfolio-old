"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';

// Icons
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative min-w-full">
            <div className="text-left flex flex-col justify-center h-full ml-20" style={{ zIndex: 2 }}>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Hi, I&apos;m <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">Dominik Deisner</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Fullstack Developer since <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">2020</span>
                </h2>
                <div className="text-left mb-4 mt-8">
                    <button className="bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-300 hover:to-yellow-500 text-black text-2xl md:text-2xl font-bold py-3 w-52 md:w-52 rounded-md mr-10 mb-4 inline-block">
                        <a href="#about">About Me</a>
                    </button>
                    <button className="bg-transparent hover:bg-amber-500 hover:text-white hover:outline-0 text-amber-500 text-2xl md:text-2xl font-bold py-3 w-52 md:w-52 outline outline-amber-600 rounded-md inline-block">
                        Contact
                    </button>
                </div>
            </div>
            <div className="overflow-hidden hidden md:block text-right" style={{ zIndex: 1, maxWidth: '100%', position: 'absolute', right: 0 }}>
                <Spline scene="https://prod.spline.design/yoQ4BaAHXEuUokSd/scene.splinecode" style={{ width: '1000px', height: '700px' }} />
            </div>

            <div className="absolute inset-x-0 bottom-32 flex justify-center" style={{ zIndex: 3 }}>
                <div className="flex justify-center space-x-20">
                    <a href="https://www.linkedin.com/in/dominik-deisner/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-7xl text-gray-300 hover:text-blue-500" />
                    </a>
                    <a href="https://github.com/DeisnerMedia" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub className="text-7xl text-gray-300 hover:text-amber-600" />
                    </a>
                </div>
            </div>
        </div>
    );
}
