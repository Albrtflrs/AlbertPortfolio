import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpRightFromSquare,
    faScissors,
    faLaptop,
    faUtensils,
    faFutbol,
    faShieldCat,
    faWater,
} from '@fortawesome/free-solid-svg-icons';

// Assets Import
import COVERPHOTO from '../assets/COVERPHOTO.png';
import FrontBelsi from '../assets/FrontBelsi.png';
import basketball from '../assets/basketball.png';
import football from '../assets/football.png';
import tarpauline from '../assets/tarpauline.png';
import Captweb from '../assets/Captweb.png';
import nutrimeal from '../assets/nutrimeal.png';
import jtour from '../assets/jtour.png';
import tinkercad from '../assets/tinkercad.png';

function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            category: 'Web Development',
            description: 'A personal portfolio built with React and Tailwind CSS showcasing my web development projects and skills.',
            icon: faLaptop,
            image: COVERPHOTO,
            link: 'https://github.com/Albrtflrs/Portfolio',
        },
        {
            title: 'Captain Barbers',
            category: 'Web Development',
            description: 'A front-end web app for a barber shop based on Australia/Philippines — built with TypeScript, Tailwind, and Nextjs.',
            icon: faScissors,
            image: Captweb,
            link: 'https://github.com/Albrtflrs/captainbarbers',
        },
        {
            title: 'J Tour Boracay',
            category: 'Web Development',
            description: 'A front-end web app for a marketing and travel activities based on Boracay Island — built with TypeScript, Tailwind, and Nextjs.',
            icon: faScissors,
            image: jtour,
            link: 'https://github.com/Albrtflrs/jtourboracay',
        },
        {
            title: 'Nutrimeal',
            category: 'Full-Stack Dev',
            description: 'A capstone project providing affordable meal plans for students. Built with HTML, CSS, JS, PHP, and MySQL.',
            icon: faUtensils,
            image: nutrimeal,
            link: 'https://github.com/Albrtflrs',
        },
        {
            title: 'AfterFootball',
            category: 'Web Development',
            description: 'A local football management system to simplify tournament posting, team management, and progress tracking.',
            icon: faFutbol,
            image: football,
            link: 'https://github.com/Albrtflrs',
        },
        {
            title: 'IOT Cat Feeding System',
            category: 'IoT / Hardware',
            description: 'An IoT device allowing pet owners to set feeding schedules via physical buttons and a web interface.',
            icon: faShieldCat,
            image: tinkercad,
            link: 'https://github.com/Albrtflrs',
        },
        {
            title: 'WebDesign (AU/PH)',
            category: 'UI/UX Design',
            description: "A WordPress and Next.js hybrid project for a barber shop chain operating in Australia and the Philippines.",
            icon: faScissors,
            image: basketball,
            link: 'https://captainbarber.ct.ws/'
        },
        {
            title: 'Belsi Tarpauline',
            category: 'Graphic Design',
            description: 'Belsi Pool Chemicals & Essentials marketing materials and graphic design layouts.',
            icon: faWater,
            image: tarpauline,
            link: '#',
        },
        {
            title: 'Belsi Brochure',
            category: 'Graphic Design',
            description: 'Full product catalog and brochure design for Belsi Pool Essentials.',
            icon: faWater,
            image: FrontBelsi,
            link: '#',
        }
    ];

    return (
        <section id="PROJECTS" className="min-h-screen bg-[#1B1931] text-white py-20 px-6">
            <div className="max-w-6xl mx-auto flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12 border-b-4 border-[#ED9E59] pb-2 text-center">
                    Recent Works
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-[#44174E] border border-[#ED9E59]/20 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ED9E59]/10"
                        >
                            {/* Image Preview Container */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                                <div className="absolute top-4 right-4 bg-[#1B1931]/90 p-2.5 rounded-lg text-[#ED9E59] border border-[#ED9E59]/30">
                                    <FontAwesomeIcon icon={project.icon} />
                                </div>
                            </div>

                            {/* Content Container */}
                            <div className="p-6 flex flex-col flex-grow">
                                {/* CATEGORY BADGE */}
                                <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#ED9E59] mb-2 px-2 py-1 border border-[#ED9E59]/30 rounded w-fit">
                                    {project.category}
                                </span>

                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#ED9E59] transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#ED9E59] hover:text-white transition-colors duration-300"
                                    >
                                        View Project
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;