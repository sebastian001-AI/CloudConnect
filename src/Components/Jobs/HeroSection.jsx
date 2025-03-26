import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaAndroid, FaLinkedinIn, FaSkype } from 'react-icons/fa';
import { SiGoogle, SiLenovo, SiSnapchat } from 'react-icons/si';

const bounceAnimation = {
  y: [0, -15, 0],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
};

const HeroSection = () => {
  return (
    <section className="bg-[#347af0] w-full py-16 px-8 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Get hired <br /> by the popular <br /> <span className="text-white">candidates.</span>
          </h1>
          <p className="text-lg text-white/80">
            Find Jobs, Employment & Career Opportunities. Some of the companies we've helped recruit excellent applicants over the years.
          </p>
        </div>

        {/* Right Circular Image */}
        <div className="flex-1 relative w-full h-[450px]">
          {/* Circular Group Image */}
          <div className="w-[400px] h-[400px] rounded-full overflow-hidden mx-auto relative border-4 border-white">
            <img
              src="https://img.freepik.com/free-photo/group-people-working-out-business-plan-office_1303-15869.jpg"
              alt="Team"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Animated Icons */}
          <motion.div style={{ top: '30px', left: '20px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <FaFacebookF className="text-[#1877f2] text-xl" />
          </motion.div>

          <motion.div style={{ top: '40px', right: '50px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <SiGoogle className="text-[#EA4335] text-xl" />
          </motion.div>

          <motion.div style={{ top: '160px', left: '0px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <SiLenovo className="text-red-500 text-xl" />
          </motion.div>

          <motion.div style={{ bottom: '40px', left: '60px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <FaLinkedinIn className="text-[#0a66c2] text-xl" />
          </motion.div>

          <motion.div style={{ bottom: '30px', right: '50px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <FaSkype className="text-[#00aff0] text-xl" />
          </motion.div>

          <motion.div style={{ bottom: '-20px', right: '120px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <SiSnapchat className="text-[#FFFC00] text-xl" />
          </motion.div>

          <motion.div style={{ top: '160px', right: '-10px' }} className="absolute bg-white p-2 rounded-full shadow-lg" animate={bounceAnimation}>
            <FaAndroid className="text-green-500 text-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
