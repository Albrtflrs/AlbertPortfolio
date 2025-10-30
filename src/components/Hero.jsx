import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiNextdotjs, SiMysql } from "react-icons/si";

function Hero() {
  const iconElements = [
    <FaHtml5 key="html5" className="text-orange-500 bg-zinc-900 border-4 border-orange-500 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="HTML5" />,
    <FaCss3Alt key="css3" className="text-blue-500 bg-zinc-900 border-4 border-blue-500 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="CSS3" />,
    <FaJsSquare key="js" className="text-yellow-400 bg-zinc-900 border-4 border-yellow-400 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="JavaScript" />,
    <FaReact key="react" className="text-cyan-400 bg-zinc-900 border-4 border-cyan-400 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="React" />,
    <SiTailwindcss key="tailwind" className="text-sky-400 bg-zinc-900 border-4 border-sky-400 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="Tailwind CSS" />,
    <FaNodeJs key="node" className="text-green-500 bg-zinc-900 border-4 border-green-500 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="Node.js" />,
    <SiMongodb key="mongodb" className="text-green-400 bg-zinc-900 border-4 border-green-400 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="MongoDB" />,
    <SiNextdotjs key="nextjs" className="text-white bg-zinc-900 border-4 border-white rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="Next.js" />,
    <SiMysql key="mysql" className="text-blue-600 bg-zinc-900 border-4 border-blue-600 rounded-md p-2 text-4xl sm:text-5xl hover:scale-110 transition-transform duration-300" title="MySQL" />,
  ];

  return (
    <section className="bg-black px-6 sm:px-12 lg:px-20 py-16 flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {iconElements}
      </div>
    </section>
  );
}

export default Hero;
