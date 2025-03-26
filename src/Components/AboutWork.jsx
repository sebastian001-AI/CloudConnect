import React from 'react';
import { MdLocationCity, MdWifi } from 'react-icons/md';

const WorkModes = () => {
  return (
    <section className=" py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8">
          How & Where We Work<span className="text-green-500">.</span>
        </h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300 max-w-sm mx-auto">
            <div className="flex justify-center mb-4">
              <MdLocationCity className="text-blue-700 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Flex Mode:</h3>
            <p className="text-slate-600 text-sm">
              Our most popular and default option. Work from the office or remote when needed.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 hover:scale-105 transition duration-300 max-w-sm mx-auto">
            <div className="flex justify-center mb-4">
              <MdWifi className="text-blue-700 text-5xl" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Remote Mode:</h3>
            <p className="text-slate-600 text-sm">
              We hire the best, no matter where they live. Work fully remote—your skills, your location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkModes;
