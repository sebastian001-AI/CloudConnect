/* eslint-disable react/prop-types */
import React from 'react';
import { HiGlobe,  } from 'react-icons/hi';
import { FaAmazon, FaApplePay, FaGoogleDrive, FaPaypal, FaLaravel, FaFacebook, FaMicrosoft, FaBitcoin, FaAppStore } from 'react-icons/fa';
import amazon from '../assets/amazon.png';
import apple from '../assets/apple.png';
import google from '../assets/google.png';
import paypal from '../assets/paypal.png';
import lenovo from '../assets/lenovo.png';
import meta from '../assets/meta.png';
import metamask from '../assets/metamask.png';
import microsoft from '../assets/microsoft.png';
import ripple from '../assets/ripple.png';

const Offers = ({
  icon1,
  title,
  position,
  location,
  type,
  company,
  icon2,
  bg1,
  color,
  bg2,
}) => {
  return (
    <div className="bg-white rounded-lg px-4 py-5 shadow transition-shadow hover:shadow-md hover:bg-gray-50 flex flex-col justify-between gap-4">
      {/* Top Section: Icon + Title */}
      <div className="flex items-center gap-3">
        <button
          className="p-2 rounded-full border-none outline-none text-2xl"
          style={{ backgroundColor: bg1, color: color }}
        >
          {icon1}
        </button>
        <div>
          <p className="text-lg font-semibold">{title}</p>
          <p className="text-sm text-gray-500">20 Opening</p>
        </div>
      </div>

      {/* Middle Section: Position + Location/Type */}
      <div>
        <p className="text-xl font-semibold mb-2">{position}</p>
        <div className="flex flex-wrap items-center justify-between text-sm">
          <p className="flex items-center gap-2 text-gray-700">
            <HiGlobe className="text-base" />
            {location}
          </p>
          <p className="text-gray-500">{type}</p>
        </div>
      </div>

      {/* Bottom Section: Date + Company + Icon */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">March 18, 2025 by</p>
          <p className="text-sm font-medium">{company}</p>
        </div>
        <button
          className="rounded-md p-2 text-white border-none outline-none"
          style={{ backgroundColor: bg2 }}
        >
          {icon2}
        </button>
      </div>
    </div>
  );
};

const FutureJob = () => {
  return (
    <div className="w-full max-w-7xl mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
          Featured Job Offer
        </h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors">
          All Job Offer
        </button>
      </div>

      {/* Subheading / Intro */}
      <p className="text-base text-gray-600 mb-6">
        Find your next tech role in just 17 days or less.
      </p>

      {/* Grid of Job Offers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Offers
          bg1="#f4fefe"
          bg2="black"
          color="#1ae4e8"
          company="Amazon"
          icon1={<img src={amazon} alt="Amazon" className="w-6 h-6" />}
          icon2={<FaAmazon size={24} />}
          location="Bourbon Street, New Orleans"
          position="Software Engineer"
          title="Engineer"
          type="Full-Time"
        />
        <Offers
          bg1="#f5fef8"
          bg2="#457b9b"
          color="#25ef75"
          company="Apple"
          icon1={<img src={apple} alt="Apple" className="w-6 h-6" />}
          icon2={<FaApplePay size={24} />}
          location="Tverskaya Street, Moscow"
          position="DevOps Engineer"
          title="Engineer"
          type="Contract"
        />
        <Offers
          bg1="#fefaf4"
          bg2="#ef6f51"
          color="#b9b833"
          company="Google"
          icon1={<img src={google} alt="Google" className="w-6 h-6" />}
          icon2={<FaGoogleDrive size={24} />}
          location="Ocean Drive, Miami"
          position="Web Developer"
          title="Developer"
          type="Full-Time"
        />
        <Offers
          bg1="#f7fcfd"
          bg2="#f4a261"
          color="#5eb9d7"
          company="PayPal"
          icon1={<img src={paypal} alt="PayPal" className="w-6 h-6" />}
          icon2={<FaPaypal size={24} />}
          location="Ocean Drive"
          position="Financial Analyst"
          title="Finance"
          type="Remote"
        />
        <Offers
          bg1="#fff9fg"
          bg2="#457b9d"
          color="#ff8c48"
          company="Lenovo"
          icon1={<img src={lenovo} alt="Lenovo" className="w-6 h-6" />}
          icon2={<FaLaravel size={24} />}
          location="Ocean Drive"
          position="Frontend Developer"
          title="Developer"
          type="Full-Time"
        />
        <Offers
          bg1="#fff9f7"
          bg2="#f4a261"
          color="#ff843d"
          company="Meta"
          icon1={<img src={meta} alt="Meta" className="w-6 h-6" />}
          icon2={<FaFacebook size={24} />}
          location="Ocean Drive"
          position="Frontend Developer"
          title="Developer"
          type="Full-Time"
        />
        <Offers
          bg1="#fefaf4"
          bg2="#ef6f51"
          color="#b9b833"
          company="Microsoft"
          icon1={<img src={microsoft} alt="Microsoft" className="w-6 h-6" />}
          icon2={<FaMicrosoft size={24} />}
          location="Ocean Drive, Miami"
          position="Web Developer"
          title="Developer"
          type="Full-Time"
        />
        <Offers
          bg1="#fff9fg"
          bg2="#457b9d"
          color="#ff8c48"
          company="MetaMask"
          icon1={<img src={metamask} alt="MetaMask" className="w-6 h-6" />}
          icon2={<FaBitcoin size={24} />}
          location="Ocean Drive"
          position="Frontend Developer"
          title="Developer"
          type="Full-Time"
        />
        <Offers
          bg1="#f4fefe"
          bg2="black"
          color="#1ae4e8"
          company="Ripple"
          icon1={<img src={ripple} alt="Ripple" className="w-6 h-6" />}
          icon2={<FaAppStore size={24} />}
          location="Bourbon Street, New Orleans"
          position="Software Engineer"
          title="Engineer"
          type="Full-Time"
        />
      </div>
    </div>
  );
};

export default FutureJob;