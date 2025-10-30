import React from 'react';
import BlurText from './BlurText';
import ShinyText from './ShinyText';

function MainContent() {
  const handleAnimationComplete = () => {
    console.log('BlurText animation completed!');
  };

  return (
    // Outer background (dark gray)
    <div className="bg-[#1b1931] min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-12 py-10">
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center space-y-6">
          {/* Heading */}
          <BlurText
            text="Hi, I’m Albert, a Web Developer"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug text-[#ED9E59]"
          />

          {/* Paragraph */}
          <ShinyText
            text="A passionate Web Developer who loves building modern, responsive, and user-friendly websites. I enjoy working with technologies like React, Tailwind CSS, Node.js, Next.js, and MySQL to bring creative ideas to life."
            className="text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl"
          />
        </div>
      </div>
      
  );
}

export default MainContent;
