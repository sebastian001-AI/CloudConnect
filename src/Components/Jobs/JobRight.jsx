import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import man from '../../assets/man.png'


const JobRight = () => {
  return (
    <section className="bg-[##D2EEFB] py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        {/* LEFT IMAGE COLUMN */}
        <div className="relative md:w-1/2 flex justify-center">
         
          <img
            src={man}
            alt="Hero Person"
            className="relative z-10 w-full h-auto object-cover max-w-sm md:max-w-md"
          />

          {/* Floating badge - 4.5M+ Happy Candidates */}
          <div className="absolute bg-white shadow-lg rounded-full py-3 px-5 text-center text-sm md:text-base font-medium text-gray-700 top-2 left-2 md:top-4 md:left-4">
            4.5M+ <br />
            <span className="text-gray-500">Happy Candidates</span>
          </div>

          {/* Floating badge - 2.5M+ Jobs Available */}
          <div className="absolute bg-white shadow-lg rounded-full py-3 px-5 text-center text-sm md:text-base font-medium text-gray-700 bottom-2 right-2 md:bottom-4 md:right-4">
            2.5M+ <br />
            <span className="text-gray-500">Jobs Available</span>
          </div>
        </div>

        {/* RIGHT TEXT COLUMN */}
        <div className="md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Get hired. Effortlessly.
          </h1>

          <p className="text-gray-600 mb-6">
          Looking for a job in tech? Let companies that are actively hiring apply to you, and find your next tech role in just 17 days or less. Hiring? Discover top tech talent, hassle-free. 
          </p>

          {/* Bullet 1 */}
          <div className="flex items-start gap-3 mb-4">
            <FaCheckCircle className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gray-800">
                Discover New Opportunities
              </h3>
              <p className="text-sm text-gray-500">
              Find your dream job & earn from world leading brands.              </p>
            </div>
          </div>

          {/* Bullet 2 */}
          <div className="flex items-start gap-3">
            <FaCheckCircle className="text-blue-600 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-gray-800">
                Get Invited To Apply To Jobs
              </h3>
              <p className="text-sm text-gray-500">
              Create a free profile, and let companies come to you with roles that match your skill              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobRight;
