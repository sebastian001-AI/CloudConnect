import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const AboutQuote = () => {
  return (
    <section className=" py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">

        {/* Quote Text */}
        <p className="text-3xl md:text-4xl font-bold text-[#0a0a23] leading-relaxed -mx-3">
        <FaQuoteLeft className="text-4xl text-blue-700 mb-6 inline-block" />As we grow, we remain committed to our origins. In everything we do,we focus on uniting tech talent and the tech industry  to forces that are powerful alone but invisible together. <FaQuoteRight className="text-4xl text-blue-700 mt-6 inline-block" />
        </p>
        <span className='text-4xl font-serif text-slate-950'>UNITED WE TECH</span>
      </div>
    </section>
  );
};

export default AboutQuote;
