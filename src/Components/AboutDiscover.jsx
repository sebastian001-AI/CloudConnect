import React from 'react';
import talent from '../assets/talent.png';

const AboutDiscover = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Discover and <br /> learn the most <br /> in-demand skills in tech
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Level up the <span className="text-black font-semibold">CloudConnect</span> way. 
            Verify your skills, learn brand new ones, and test your ability with 
            <span className="text-black font-semibold"> Pathways</span>, our learning and development platform.
          </p>
          <button className="border-2 border-black px-8 py-3 font-medium hover:bg-black hover:text-white transition-all duration-300">
            Get started
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img src={talent} alt="Talent Illustration" className="w-full h-auto object-contain" />
        </div>
      </div>
    </section>
  );
};

export default AboutDiscover;
