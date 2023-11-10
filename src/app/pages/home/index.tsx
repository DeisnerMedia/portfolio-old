"use client";

import React from 'react';
import Spline from '@splinetool/react-spline';

// Icons
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center relative min-w-full min-h-screen">
            <div className="absolute text-left flex flex-col justify-center h-full ml-20" style={{ zIndex: 2 }}>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                    Hi, I&apos;m <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">Dominik Deisner</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Fullstack Developer since <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-transparent bg-clip-text">2020</span>
                </h2>
                <div className="text-left mb-4 mt-8">
                    <a href="#about">
                        <button className="bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-400 hover:from-amber-500 hover:via-orange-300 hover:to-yellow-500 text-black text-2xl md:text-2xl font-bold py-3 w-52 md:w-52 rounded-md mr-10 mb-4 inline-block">
                            About Me
                        </button>
                    </a>
                    <a href="mailto:contact@deisnermedia.com">
                        <button className="bg-transparent hover:bg-amber-500 hover:text-white hover:outline-0 text-amber-500 text-2xl md:text-2xl font-bold py-3 w-52 md:w-52 outline outline-amber-600 rounded-md inline-block">
                            Contact
                        </button>
                    </a>
                </div>
                </div>
            <div className="overflow-hidden hidden md:block" style={{ zIndex: 1, maxWidth: '100%', position: 'absolute', right: '30%', top: '15%' }}>
                <Spline scene="https://prod.spline.design/yoQ4BaAHXEuUokSd/scene.splinecode" style={{ width: '300px', height: '900px' }} />
            </div>
            <div className="absolute justify-center left-24 social-buttons" style={{ zIndex: 2 }}>
                <div className="flex justify-center space-x-28">
                    <a href="https://www.linkedin.com/in/dominik-deisner/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-6xl text-gray-300 hover:text-blue-500 active:text-blue-700" />
                    </a>
                    <a href="https://github.com/DeisnerMedia" target="_blank" rel="noopener noreferrer">
                        <FaSquareGithub className="text-6xl text-gray-300 hover:text-zinc-400 active:text-orange-500" />
                    </a>
                </div>
            </div>
            <style jsx>{`
                .social-buttons {
                    bottom: 20%;
                    transform: translateY(-50%);
                }
                
                @media (max-width: 768px) {
                    .social-buttons {
                        bottom: 10%;
                    }
                }
                
                @media (max-width: 670px) {
                    .social-buttons {
                        bottom: 3%;
                    }
                }
            `}</style>
        </div>
    );
}
