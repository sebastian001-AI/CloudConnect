import React from 'react';
import { FaFacebookF, FaAndroid, FaSpotify, FaLinkedinIn } from 'react-icons/fa';
import { SiGoogle, SiLenovo } from 'react-icons/si';
import office from '../../assets/office.png';
import office2 from '../../assets/office2.png';

const Company = () => {
  return (
    <section className=" w-full py-16 px-8 text-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6">Find Best Companies.</h2>
          <p className="text-lg text-gray-600 mb-8">
            Search all the open positions on the web. Get your own personalized salary estimate.
            Read reviews on over 30,000+ companies worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-[#f3f4f621] p-4 rounded-lg shadow-sm">
              <FaFacebookF className="text-[#1877f2] text-2xl" />
              <div>
                <p className="font-semibold">Facebook</p>
                <span className="text-gray-500 text-sm">40 vacancy</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f3f4f621] p-4 rounded-lg shadow-sm">
              <SiGoogle className="text-[#EA4335] text-2xl" />
              <div>
                <p className="font-semibold">Google</p>
                <span className="text-gray-500 text-sm">40 vacancy</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f3f4f621] p-4 rounded-lg shadow-sm">
              <FaAndroid className="text-green-500 text-2xl" />
              <div>
                <p className="font-semibold">Android</p>
                <span className="text-gray-500 text-sm">40 vacancy</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f3f4f621] p-4 rounded-lg shadow-sm">
              <SiLenovo className="text-red-500 text-2xl" />
              <div>
                <p className="font-semibold">Lenovo</p>
                <span className="text-gray-500 text-sm">40 vacancy</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f3f4f621] p-4 rounded-lg shadow-sm">
              <FaSpotify className="text-green-600 text-2xl" />
              <div>
                <p className="font-semibold">Spotify</p>
                <span className="text-gray-500 text-sm">40 vacancy</span>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-[#f3f4f621] p-4 rounded-lg shadow-sm">
              <FaLinkedinIn className="text-[#0a66c2] text-2xl" />
              <div>
                <p className="font-semibold">LinkedIn</p>
                <span className="text-gray-500 text-sm">40 vacancy</span>
              </div>
            </div>
          </div>

          <a href="https://www.forbes.com/top-digital-companies/list/#tab:rank" target="_blank" rel="noopener noreferrer">
          <p className="mt-6 text-blue-600 hover:underline cursor-pointer">
            See More Companies →
          </p></a>
        </div>

        <div className="relative w-full md:w-[500px] lg:w-[450px]">
          <img
            src={office}
            alt="Office 1"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />

          <img
            src={office2}
            alt="Office 2"
            className="rounded-lg shadow-lg w-[50%] md:w-[60%] object-cover absolute bottom-[-30px] right-72"
          />
        </div>
      </div>
    </section>
  );
};

export default Company;
