import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faBasketball, faSoccerBall, faPaintBrush } from '@fortawesome/free-solid-svg-icons'
import Poster from '../assets/1stPosterSamp.png'
import CoverPhoto from '../assets/CoverPhoto.png'
import Tarp from '../assets/tarp (1).png'
import basketball from '../assets/basketball.png'
import football from '../assets/football.png'
import FrontBelsi from '../assets/FrontBelsi.png'
import Captweb from '../assets/Captweb.png'
import Afterfootball from '../assets/Afterfootball.png'

function GraphicProjects() {
    const [modalImage, setModalImage] = useState(null)

    const graphics = [
        {
            title: 'Poster ',
            description: 'A creative poster for social media promotion.',
            icon: faPaintBrush,
            image: Poster,
        },
        {
            title: 'Cover Photo',
            description: 'A cover photo designed for digital platforms.',
            icon: faPaintBrush,
            image: CoverPhoto,
        },
        {
            title: 'Belsi Brochure',
            description: 'Background graphic created for Belsi branding purposes.',
            icon: faPaintBrush,
            image: FrontBelsi,
        },
        {
            title: 'Tarp Design',
            description: 'Large format design for banners or tarpaulins.',
            icon: faPaintBrush,
            image: Tarp,
        },
        {
            title: 'Basketball Jersey',
            description: 'Customize basketball jersey design.',
            icon: faBasketball,
            image: basketball,
        },
        {
            title: 'Football kit',
            description: 'Customize football kit design.',
            icon: faSoccerBall,
            image: football,
        },
        {
            title: 'Web Design',
            description: 'A sample web design graphic showcasing layout and aesthetics.',
            icon: faPaintBrush,
            image: Captweb,
        },
        {
            title: 'After Football',
            description: 'Local Football League management system design to efficiently manage teams, schedules, and player statistics.',
            icon: faSoccerBall,
            image: Afterfootball,
        }
    ]

    return (
        <section
            id="GRAPHIC-PROJECTS"
            className="min-h-screen bg-[#1B1931] text-white flex flex-col items-center justify-center py-20 px-6"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 border-b-4 border-[#ED9E59] pb-2">
                Graphic Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {graphics.map((project, index) => (
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

                        {/* NEW: Image Wrapper for fixed height and uniform sizing. 
                            The entire wrapper has a fixed height and uses flexbox to position the image.
                        */}
                        <div className="w-full **h-64** mb-4 relative overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full rounded-md cursor-pointer hover:opacity-80 **object-cover** transition-opacity duration-300"
                                onClick={() => setModalImage(project.image)}
                            />
                        </div>

                        <a
                            href={project.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto flex items-center gap-2 text-[#ED9E59] hover:text-white transition-all duration-300"
                        >
                            View Full Image
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-sm" />
                        </a>
                    </div>
                ))}
            </div>

            {/* Modal remains the same */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
                    onClick={() => setModalImage(null)}
                >
                    <img
                        src={modalImage}
                        alt="Preview"
                        className="max-h-[80%] max-w-[80%] rounded-lg shadow-xl"
                    />
                </div>
            )}
        </section>
    )
}

export default GraphicProjects