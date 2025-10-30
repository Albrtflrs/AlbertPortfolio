import React, { useState } from 'react'
import logo from '/assets/af2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faRightToBracket,
    faBars,
    faXmark,
    faHouse,
    faFolderOpen,
    faUser
} from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    const navLinks = [
        { name: 'HOME', icon: faHouse },
        { name: 'PROJECTS', icon: faFolderOpen },
        { name: 'ABOUT', icon: faUser }
    ]

    return (
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-[#44174E] text-white px-4 py-2 shadow-md z-50">
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
                <img src={logo} alt="Logo" className="w-12 h-12 object-contain" />
                <h1 className="text-xl sm:text-2xl font-bold text-gray-300 border-b-4 border-[#ED9E59]">
                    ALBERT
                </h1>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex space-x-8 items-center font-bold">
                {navLinks.map((item, index) => (
                    <a
                        key={index}
                        href={`#${item.name}`}
                        className="flex items-center gap-2 px-4 py-2 rounded-md text-[#ED9E59] hover:text-white transition-all duration-300 group"
                    >
                        <FontAwesomeIcon
                            icon={item.icon}
                            className="text-[#ED9E59] group-hover:text-white group-hover:scale-125 transition-transform duration-300"
                        />
                        {item.name}
                    </a>
                ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:flex font-bold rounded-md text-[#1B1931] border border-[#ED9E59] px-5 py-2 bg-[#ED9E59] hover:bg-[#e08a3f] transition items-center gap-2">
                <a
                    href="#Talk"
                    className="flex items-center gap-2 hover:scale-110 transition-all duration-300"
                >
                    Let's talk
                    <FontAwesomeIcon icon={faRightToBracket} />
                </a>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-2xl focus:outline-none transition-transform duration-300 hover:scale-110"
            >
                <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-[#1B1931] flex flex-col items-center space-y-4 py-4 md:hidden border-t border-[#1B1931] z-40">
                    {navLinks.map((item, index) => (
                        <a
                            key={index}
                            href={`#${item.name}`}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 text-lg px-4 py-2 rounded-md text-[#ED9E59] hover:text-white transition-all duration-300 group"
                        >
                            <FontAwesomeIcon
                                icon={item.icon}
                                className="group-hover:text-white group-hover:scale-125 transition-transform duration-300"
                            />
                            {item.name}
                        </a>
                    ))}

                    <a
                        href="#Talk"
                        className="text-lg font-bold rounded-md border border-[#1B1931] px-5 py-2 bg-[#ED9E59] hover:bg-[#e08a3f] transition flex items-center gap-2 hover:scale-110"
                    >
                        Let's talk
                        <FontAwesomeIcon icon={faRightToBracket} />
                    </a>
                </div>
            )}
        </nav>
    )
}

export default Navbar
