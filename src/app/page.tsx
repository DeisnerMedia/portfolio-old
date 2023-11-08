"use client";

import React, { useEffect } from 'react';

// Pages
import Home from '@/app/pages/home/index';
import About from '@/app/pages/about/index';
import Experience from '@/app/pages/experience/index';
import Skills from '@/app/pages/skills/index';
import Projects from '@/app/pages/projects/index';

// Components
import Navigation from '@/app/components/navigation/navigation';

export default function Page() {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-container');
            if (navbar) {
                if (window.scrollY >= 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <main className="min-h-screen flex flex-col bg-zinc-950 relative">
            <div className="navbar-container">
                <Navigation />
            </div>
            <section id="home" className="flex h-screen relative">
                <Home />
            </section>

            <section id="about" className="flex h-screen relative">
                <div className="flex items-center justify-center w-full">
                    <About />
                </div>
            </section>

            <section id="experience" className="relative flex items-center justify-center flex-grow min-h-screen">
                <Experience />
            </section>

            <section id="skills" className="relative flex items-center justify-center flex-grow min-h-screen">
                <Skills />
            </section>

            <section id="projects" className="relative flex items-center justify-center flex-grow min-h-screen">
                <Projects />
            </section>

            <style jsx>{`
              .navbar-container {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: rgba(0, 0, 0, 0);
                z-index: 3 !important;
                transition: background 0.2s;
              }
              .navbar-container.scrolled {
                background: rgba(0, 0, 0, 0.95) !important;
              }
              
              @media (max-height: 770px) {
                .navbar-container {
                  background-color: rgba(0, 0, 0, 0.95) !important;
                }
              }
            `}</style>
        </main>
    );
}
