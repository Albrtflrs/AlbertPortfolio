import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faScissors, faLaptop, faUtensils, faFutbol, faShieldCat, } from '@fortawesome/free-solid-svg-icons'

function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'A personal portfolio built with React and Tailwind CSS showcasing my web development projects and skills.',
            icon: faLaptop,
            link: 'https://github.com/Albrtflrs/Portfolio',
        },
        {
            title: 'Captain Barbers',
            description: 'A front-end web app for a barber shop based on Australia/Philippines — built with TypeScript, Tailwind, and Nextjs.',
            icon: faScissors,
            status: 'Completed',
            link: 'https://github.com/Albrtflrs/captainbarbers',
        },
        {
            title: 'J Tour Boracay',
            description: 'A front-end web app for a marketing and travel activities based on Boracay Island — built with TypeScript, Tailwind, and Nextjs.',
            icon: faScissors,
            status: 'Completed',
            link: 'https://github.com/Albrtflrs/jtourboracay',
        },
        {
            title: 'Nutrimeal',
            description: 'A capstone project that aims to provide affordable and nutritious meal plans for college students using a web application - Built with HTML, CSS, JS, PHP, and MySQL.',
            icon: faUtensils,
            link: 'https://github.com/Albrtflrs',
        },
        {
            title: 'AfterFootball',
            description: 'A local football management system designed to simplify how organizers post tournaments, manage teams, and track progress — all in one unified platform.',
            icon: faFutbol,
            link: 'https://github.com/Albrtflrs',
        },
        {
            title: 'IOT Based Automatic Cat Feeding system',
            description: 'An IoT-Based Automatic Cat Feeding system that allows pet owners to manually input via physical button to set a schedule for feeding their cats.',
            icon: faShieldCat,
            link: 'https://github.com/Albrtflrs',
        },
    ]

    return (
        <section
            id="PROJECTS"
            className="min-h-screen bg-[#1B1931] text-white flex flex-col items-center justify-center py-20 px-6"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 border-b-4 border-[#ED9E59] pb-2">
                Recent Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#44174E] border border-[#ED9E59]/40 rounded-xl p-6 flex flex-col items-start text-left transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#ED9E59]/20"
                    >
                        <div className="text-[#ED9E59] text-4xl mb-4">
                            <FontAwesomeIcon icon={project.icon} />
                        </div>

                        <h3 className="text-xl font-bold mb-2 text-[#ED9E59]">
                            {project.title}
                        </h3>

                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                            {project.description}
                        </p>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center gap-2 text-[#ED9E59] hover:text-white transition-all duration-300"
                        >
                            View Project
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Projects
