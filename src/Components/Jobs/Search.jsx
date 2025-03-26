import React from 'react'

function Search() {
  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-400 to-blue-300">
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h1 className="text-5xl font-extrabold text-gray-900">CloudConnect.</h1>
      <p className="mt-4 text-lg text-gray-800 leading-relaxed">
        Discover tech roles that match your skills and ambition. Filter your search and find your next big opportunity.
      </p>
    </div>
  
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
      {/* Job Role */}
      <select className="p-4 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500">
        <option value="">Job Role</option>
        <option>iOS Developer</option>
        <option>Frontend Developer</option>
        <option>Backend Developer</option>
        <option>Android Developer</option>
        <option>Developer Advocate</option>
        <option>Cloud Engineer</option>
        <option>UI/UX Designer</option>
      </select>
  
      {/* Job Type */}
      <select className="p-4 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500">
        <option value="">Job Type</option>
        <option>Fully Remote</option>
        <option>Hybrid</option>
        <option>On-Site</option>
      </select>
  
      {/* Location */}
      <select className="p-4 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500">
        <option value="">Location</option>
        <option>USA</option>
        <option>Canada</option>
        <option>UK</option>
        <option>Germany</option>
        <option>Remote</option>
      </select>
  
      {/* Experience */}
      <select className="p-4 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-2 focus:ring-blue-500">
        <option value="">Experience</option>
        <option>Entry Level</option>
        <option>Mid Level</option>
        <option>Senior Level</option>
      </select>
  
      {/* Search Button */}
      <button className="p-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-sm transition duration-300">
        Search
      </button>
    </div>
  
    {/* Optional subtle CTA */}
    <div className="max-w-6xl mx-auto text-center mt-10">
      <p className="text-base text-gray-700">
        Not seeing your role? <span className="underline cursor-pointer hover:text-blue-800">Submit your profile</span> and stay updated.
      </p>
    </div>
  </section>
  
  )
}

export default Search