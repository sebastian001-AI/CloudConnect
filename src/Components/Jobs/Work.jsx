import React from 'react';
import { FaUserPlus, FaHandsHelping, FaIdCard, FaBriefcase } from 'react-icons/fa';
const Work = () => {
  return (
    <section className="bg-[#76D1F9] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Subheading */}
        <p className="text-blue-600 font-semibold uppercase tracking-wide mb-2">
          Our Work Process
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          How It Works?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaUserPlus className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Register Your Account</h3>
            <p className="text-gray-600 max-w-xs">
              You need to create an account to find the best preferred job.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaHandsHelping className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">We Here to Help You</h3>
            <p className="text-gray-600 max-w-xs">
              Our support team assists you in finding the perfect role.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaIdCard className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Complete Your Profile</h3>
            <p className="text-gray-600 max-w-xs">
              Fill in your details so recruiters can easily find you.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4">
              <FaBriefcase className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Apply Job or Hire</h3>
            <p className="text-gray-600 max-w-xs">
              Start applying for jobs or hire talent as soon as your profile is set.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
