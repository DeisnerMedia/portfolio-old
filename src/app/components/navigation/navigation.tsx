import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/app/assets/images/logo.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <nav className="text-white">
            <div className="container mx-auto flex justify-between items-center py-8">
                <div className="ml-10">
                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={50} className="hover:opacity-60 active:opacity-30"/>
                    </Link>
                </div>
                <div className="lg:flex space-x-20 text-2xl text-amber-400 navigation-extended">
                    <NavItem href="#" text="Home" />
                    <NavItem href="#about" text="About" />
                    <NavItem href="#experience" text="Experience" />
                    <NavItem href="#skills" text="Skills" />
                    <NavItem href="#projects" text="Projects" />
                </div>
                <svg
                    id="hamburger"
                    className={`Header__toggle-svg flex ${isMenuOpen ? 'open' : ''}`}
                    onClick={toggleMenu}>
                    <g stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                        <path id="top-line" d="M10,10 L50,10 Z"></path>
                        <path id="middle-line" d="M10,20 L50,20 Z"></path>
                        <path id="bottom-line" d="M10,30 L50,30 Z"></path>
                    </g>
                </svg>
                <div className={`flex navigation-hamburger text-5xl justify-center items-center flex-col gap-10 ${isMenuOpen ? 'flex' : 'hidden'}`}>
                    <NavItem href="#" text="Home" closeMenu={closeMenu}/>
                    <NavItem href="#about" text="About"  closeMenu={closeMenu}/>
                    <NavItem href="#experience" text="Experience" closeMenu={closeMenu}/>
                    <NavItem href="#skills" text="Skills" closeMenu={closeMenu}/>
                    <NavItem href="#projects" text="Projects" closeMenu={closeMenu}/>
                </div>
            </div>
            <style jsx>{`
              .navbar-container {
                position: relative;
              }
                .navigation-extended {
                    display: flex;
                }
                #hamburger {
                    display: none;
                }
              
              @media (max-width: 1200px) {
                .navigation-extended {
                  display: none;
                }
                #hamburger {
                  display: block;
                  position: absolute;
                  top: 30%;
                  right: 2%;
                  z-index: 101;
                  cursor: pointer;
                }

                .navigation-hamburger {
                  height: 100vh;
                  width: 100%;
                  position: absolute;
                  right: 0;
                  top: 0;
                  backdrop-filter: blur(10px);
                  background-color: rgba(0, 0, 0, 0.90);
                  z-index: 100;
                }
              
              svg {
                    width: 60px;
                    position: absolute;
                    top: 30%;
                    right: 25px;
                  }

                  #top-line,
                  #bottom-line,
                  #middle-line {
                    transform-box: fill-box;
                    transform-origin: center;
                  }

                  svg.open {
                    #top-line {
                      animation: ${isMenuOpen ? 'down-rotate 0.6s ease-out both' : 'up-rotate 0.6s ease-out both'};
                    }

                    #bottom-line {
                      animation: ${isMenuOpen ? 'up-rotate 0.6s ease-out both' : 'down-rotate 0.6s ease-out both'};
                    }

                    #middle-line {
                      animation: hide 0.6s ease-out forwards;
                    }
                  }

                  @keyframes up-rotate {
                    0% {
                      animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
                      transform: translateY(0px);
                    }
                    30% {
                      transform-origin: center;
                      animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
                      transform: translateY(-10px);
                    }
                    100% {
                      transform-origin: center;
                      transform: translateY(-10px) rotate(45deg) scale(0.9);
                    }
                  }

                  @keyframes down-rotate {
                    0% {
                      animation-timing-function: cubic-bezier(0.16, -0.88, 0.97, 0.53);
                      transform: translateY(0px);
                    }
                    30% {
                      transform-origin: center;
                      animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
                      transform: translateY(10px);
                    }
                    100% {
                      transform-origin: center;
                      transform: translateY(10px) rotate(-45deg) scale(0.9);
                    }
                  }

                  @keyframes hide {
                    29% {
                      opacity: 1;
                    }
                    30% {
                      opacity: 0;
                    }
                    100% {
                      opacity: 0;
                    }
                  }
                }
            `}</style>
        </nav>

    );
}

function NavItem({ href, text, closeMenu }: { href: string; text: string; closeMenu?: () => void }) {
    const handleClick = () => {
        if (closeMenu) {
            closeMenu();
        }
    };

    return (
        <Link href={href} className="hover:text-yellow-300 font-bold" onClick={handleClick}>
            {text}
        </Link>
    );
}
