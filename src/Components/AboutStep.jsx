import React from 'react'
import { BsArrowRight } from 'react-icons/bs';
import apple from '../assets/apple.png';
import google from '../assets/google.png';
import meta from '../assets/meta.png';
import ripple from '../assets/ripple.png';
import amazon from '../assets/amazon.png';

const AboutStep = () => {
    const steps = [
        {
          title: '1. Create a free profile',
          desc: 'Upload your CV and set preferences—like job type, salary, and hybrid working—to auto-create a profile in under 3 minutes that highlights your technical skills and experience.',
        },
        {
          title: '2. Get matched to relevant tech jobs',
          desc: 'Our smart matching system connects you with top opportunities that fit your skills and preferences, with companies reaching out directly with interview requests.',
        },
        {
          title: '3. Manage interviews and get hired',
          desc: 'Choose which interview requests to accept. Easily manage interviews in one place with auto-scheduling to streamline your journey to getting hired.',
        },
      ];
    
      return (
        <section className="bg-[#] text-black py-16">
      <div className="text-center mb-12">
        <h1 className="text-black text-4xl font-bold">How it works</h1>
        <p className="text-3xl font-semibold mt-4">
          Apply once, reach <span className="text-blue-600">hundreds</span> of companies
        </p>
      </div>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl font-semibold text-blue-800">{step.title}</h3>
                  <p className="text-black">{step.desc}</p>
                </div>
              ))}
            </div>
    
            {/* Example Match Card */}
            <div className="bg-gradient-to-br from-green-900/20 via-blue-900/20 to-purple-900/30 rounded-xl p-6 shadow-lg">
              <div className="flex items-center space-x-4 mb-6">
                {/* Logos */}
                {[apple, amazon, meta, google, ripple].map((src, i) => (
                  <div
                    key={i}
                    className="w-12 h-12 bg-gray-800 rounded flex items-center justify-center"
                  >
                    <img src={src} alt="Company" className="w-8 h-8 object-contain" />
                  </div>
                ))}
              </div>
    
              {/* Candidate Card */}
              <div className="bg-[#1E1E1E] rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Candidate"
                    className="w-16 h-16 rounded-full"
                  />
                  <div>
                    <h4 className="text-white font-semibold">Sarah </h4>
                    <p className="text-gray-400 text-sm">Head of human relations at <span className='font-bold text-base'>CloudConnect.</span></p>
                  </div>
                </div>
    
                <div className="text-gray-300 text-sm space-y-2">
                  <p>Interested in: <span className="text-white">Full time permanent roles</span></p>
                  <p>Current Location: <span className="text-white">London, UK</span></p>
                  <p>Desired Location: <span className="text-white"> Nigeria</span></p>
                  <p>Remote: <span className="text-white">Yes</span></p>
                  <p>UK Salary: <span className="text-white">£60,000</span></p>
                  <p>Remote Salary: <span className="text-white">£60,000</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    };

export default AboutStep