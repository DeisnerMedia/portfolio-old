import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../assets/images/logo.png';

export default function Navbar() {
    return (
        <nav className="text-white">
            <div className="container mx-auto flex justify-between items-center py-8">
                <div>
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={70} height={70} />
                    </Link>
                </div>
                <div className="lg:flex space-x-20 text-2xl text-amber-400">
                    <NavItem href="#home" text="Home" />
                    <NavItem href="#about" text="About" />
                    <NavItem href="#experience" text="Experience" />
                    <NavItem href="#skills" text="Skills" />
                    <NavItem href="#projects" text="Projects" />
                </div>
            </div>
            <style jsx>{`
              .navbar-container {
                position: relative;
              }
            `}</style>
        </nav>
    );
}

function NavItem({ href, text }: { href: string; text: string }) {
    return (
        <Link href={href} className="hover:text-yellow-300 font-bold">
            {text}
        </Link>
    );
}
