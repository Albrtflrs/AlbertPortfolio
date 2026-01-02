import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faArrowUpRightFromSquare,
    faBasketball,
    faTableTennisPaddleBall, // Use this if faSoccerBall isn't loading, or stick to faFutbol
    faFutbol,
    faPaintBrush
} from '@fortawesome/free-solid-svg-icons'

// Assets Import (Fixed naming/syntax)
import PosterImg from '../assets/1stPosterSamp.png'
import CoverPhotoImg from '../assets/COVERPHOTO.png'
import TarpImg from '../assets/tarpauline.png' // Changed from 'tarp (1)' to 'tarp1'
import basketballImg from '../assets/basketball.png'
import footballImg from '../assets/football.png'
import FrontBelsiImg from '../assets/FrontBelsi.png'
import CaptwebImg from '../assets/Captweb.png'
import AfterFootballImg from '../assets/AfterFootball.png'

function GraphicProjects() {
    const [modalImage, setModalImage] = useState(null)

    const graphics = [
        {
            title: 'Marketing Poster',
            category: 'Social Media',
            description: 'A creative poster designed for digital promotion and high-impact social media presence.',
            icon: faPaintBrush,
            image: PosterImg,
        },
        {
            title: 'Cover Branding',
            category: 'Branding',
            description: 'Customized cover photo designed for professional digital platform consistency.',
            icon: faPaintBrush,
            image: CoverPhotoImg,
        },
        {
            title: 'Belsi Brochure',
            category: 'Print Media',
            description: 'Background graphic and layout created specifically for Belsi branding purposes.',
            icon: faPaintBrush,
            image: FrontBelsiImg,
        },
        {
            title: 'Tarp Design',
            category: 'Large Format',
            description: 'Large scale graphic design intended for event banners or physical tarpaulins.',
            icon: faPaintBrush,
            image: TarpImg,
        },
        {
            title: 'Basketball Jersey',
            category: 'Apparel Design',
            description: 'Custom-themed basketball jersey sublimation design including team logos.',
            icon: faBasketball,
            image: basketballImg,
        },
        {
            title: 'Football Kit',
            category: 'Apparel Design',
            description: 'Complete customized football kit design showcasing sport-specific aesthetics.',
            icon: faFutbol,
            image: footballImg,
        },
        {
            title: 'Web Graphics',
            category: 'UI/UX Design',
            description: 'Web design assets showcasing modern layout aesthetics and user-interface elements.',
            icon: faPaintBrush,
            image: CaptwebImg,
        },
        {
            title: 'After Football',
            category: 'System Graphics',
            description: 'Interface and branding assets for a local Football League management system.',
            icon: faFutbol,
            image: AfterFootballImg,
        }
    ]

    return (
        <section
            id="GRAPHIC-PROJECTS"
            className="min-h-screen bg-[#1B1931] text-white flex flex-col items-center justify-center py-20 px-6"
        >
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 border-b-4 border-[#ED9E59] pb-2 text-center">
                Graphic Works
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
                {graphics.map((project, index) => (
                    <div
                        key={index}
                        className="group bg-[#44174E] border border-[#ED9E59]/20 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#ED9E59]/10"
                    >
                        {/* Image Container with Fixed Height */}
                        <div className="relative h-64 w-full overflow-hidden bg-gray-900">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 cursor-pointer transition-all duration-300 group-hover:scale-110"
                                onClick={() => setModalImage(project.image)}
                            />
                            <div className="absolute top-4 right-4 bg-[#1B1931]/90 p-2 rounded-lg text-[#ED9E59] border border-[#ED9E59]/30">
                                <FontAwesomeIcon icon={project.icon} />
                            </div>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 flex flex-col flex-grow">
                            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#ED9E59] mb-2 px-2 py-1 border border-[#ED9E59]/30 rounded w-fit">
                                {project.category}
                            </span>

                            <h3 className="text-xl font-bold mb-2 text-white group-hover:text-[#ED9E59] transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-300 mb-6 text-sm leading-relaxed line-clamp-3">
                                {project.description}
                            </p>

                            <button
                                onClick={() => setModalImage(project.image)}
                                className="mt-auto flex items-center gap-2 text-[#ED9E59] text-sm font-semibold uppercase tracking-wider hover:text-white transition-all duration-300"
                            >
                                Preview Graphic
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="text-xs" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for Full Image Preview */}
            {modalImage && (
                <div
                    className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100] p-4 backdrop-blur-sm"
                    onClick={() => setModalImage(null)}
                >
                    <div className="relative max-w-5xl w-full flex justify-center">
                        <img
                            src={modalImage}
                            alt="Full Preview"
                            className="max-h-[90vh] max-w-full rounded-lg shadow-2xl object-contain animate-in zoom-in duration-300"
                        />
                        <button
                            className="absolute -top-10 right-0 text-white text-xl font-bold"
                            onClick={() => setModalImage(null)}
                        >
                            Close ✕
                        </button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default GraphicProjects