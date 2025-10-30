import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faInstagram,
  faTelegram,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function Sidebar() {
  return (
    <aside
      className="
      hidden lg:flex
        fixed top-0 left-0
        flex flex-col items-center justify-center
        bg-[#1B1931] text-white
        w-20 h-screen
        gap-8
        shadow-lg
        sm:w-22
        md:w-22
        lg:w-22
        transition-all duration-300
      "
    >
      {[
        { icon: faFacebook, color: "hover:text-blue-500", link: "https://www.facebook.com/Albrtflrs404/" },
        { icon: faInstagram, color: "hover:text-pink-500", link: "https://www.instagram.com/albrtflrs404/" },
        { icon: faTelegram, color: "hover:text-sky-400", link: "https://t.me/mrcooozxc" },
        { icon: faWhatsapp, color: "hover:text-green-500", link: "https://wa.me/09773249150" },
        { icon: faEnvelope, color: "hover:text-red-500", link: "mailto:haeows@gmail.com" },
        { icon: faGithub, color: "hover:text-black", link: "https://github.com/Albrtflrs" }
      ].map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className={`${item.color} text-3xl md:text-4xl transition-transform duration-300 hover:scale-125`}
        >
          <FontAwesomeIcon icon={item.icon} />
        </a>
      ))}
    </aside>
  )
}

export default Sidebar
