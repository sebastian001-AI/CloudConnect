/* eslint-disable react/prop-types */
import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { MdWorkOutline } from 'react-icons/md';
import { motion } from 'framer-motion';
import techman from '../assets/techman.png';

const Badge = ({ icon, text, className, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`absolute bg-white text-gray-800 px-4 py-2 rounded-full shadow font-medium flex items-center gap-2 ${className}`}
  >
    {icon}
    {text}
  </motion.div>
);

const Know = () => {
  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-black mb-6">
            We Know What <span className="text-cyan-600">Tech Professionals</span> Want,<br />
            Because <span className="italic underline decoration-cyan-700">We Are Tech Professionals.</span>
          </h1>
          <p className="text-lg text-black mt-4">
            Join our platform designed by experts who live and breathe tech.
          </p>
        </div>

        <div className="relative flex justify-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-blue-100 rounded-full p-6 ring-4 ring-blue-200"
          >
            <img
              src={techman}
              alt="Tech Professional"
              className="w-[280px] lg:w-[350px] rounded-lg shadow-xl"
            />
          </motion.div>

          <Badge
            icon={<MdWorkOutline className="text-blue-600" />}
            text="Hybrid Workplace"
            className="top-6 right-8"
            delay={0.3}
          />

          <Badge
            icon={null}
            text="Dev + Engineer"
            className="bottom-24 left-4"
            delay={0.5}
          />

          <Badge
            icon={<FaLaptopCode className="text-purple-600" />}
            text="Tech Stack"
            className="bottom-10 left-8"
            delay={0.7}
          />
        </div>
      </div>
    </section>
  );
};

export default Know;
