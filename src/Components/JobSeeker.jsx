import React from 'react';
import blueman from '../assets/blueman.png';

function JobSeeker() {
  return (
    <div className="text-gray-800">
      <section className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center md:items-start ">
        <div className="w-full md:w-1/2 mt-8 md:mt-5">
          <p className="text-2xl text-indigo-600 font-semibold mb-2">For Jobseekers</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Secure your dream tech role
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 font-semibold">
            Create a free profile, let companies come to you with roles that match your experience. 
            Privately explore job opportunities in Software Engineering, UX/UI, DevOps, Data Science, and more.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Average time to get hired is <strong>17 days</strong></li>
            <li>Free sign up in less than <strong>5 mins</strong></li>
          </ul>
          <a 
            href="#" 
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-base font-medium hover:bg-indigo-700"
          >
            Get started
          </a>
        </div>

        
      
<div className="relative w-full md:w-1/2">
  <img 
    src={blueman} 
    alt="Person in blue lighting" 
    className="w-full h-auto max-w-[400px] mx-auto"
  />

<div className="absolute bottom-40 left-8 bg-white text-gray-800 p-4 rounded-xl shadow-lg max-w-[280px] animate-fadeIn  duration-5000">
<span className="block font-semibold text-gray-800">Recruiter</span>
  <p className="text-gray-600 text-sm">
    I’d love to set up some time to discuss our front-end developer position with you!
  </p>
</div>

<div className="absolute bottom-9 left-16 bg-green-100 text-gray-800 p-4 rounded-xl shadow-lg max-w-[260px] animate-fadeIn">
<span className="block font-semibold text-gray-800">You</span>
  <p className="text-gray-600 text-sm">
    Sure! That sounds great. Looking forward to it!
  </p>
</div>

</div>

      </section>
    </div>
  );
}

export default JobSeeker;
