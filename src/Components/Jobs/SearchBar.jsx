import React, { useState } from "react";

const SearchBar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    role: "",
    type: "",
    location: "",
    experience: "",
  });

  // Handle filter changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilterChange(updatedFilters);
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-sky-400 to-blue-500">
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Find Your Next Job</h1>
        <p className="mt-2 text-lg text-gray-800">Filter by role, experience, location, and more.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-4 px-6">
        {/* Job Role */}
        <select name="role" value={filters.role} onChange={handleChange} className="p-3 bg-white rounded-md shadow-sm border border-gray-300">
          <option value="">Job Role</option>
          <option>Frontend Developer</option>
          <option>Backend Developer</option>
          <option>Cloud Engineer</option>
          <option>IOS Developer</option>
          <option>Software Engineer </option>
          <option>Data Analyst</option>
          <option>Machine Learning Engineer</option>
          <option>Android Developer</option>
          
          

        </select>

        {/* Job Type */}
        <select name="type" value={filters.type} onChange={handleChange} className="p-3 bg-white rounded-md shadow-sm border border-gray-300">
          <option value="">Job Type</option>
          <option>Fully Remote</option>
          <option>Hybrid</option>
          <option>On-Site</option>
        </select>

        {/* Location */}
        <select name="location" value={filters.location} onChange={handleChange} className="p-3 bg-white rounded-md shadow-sm border border-gray-300">
          <option value="">Location</option>
          <option>USA</option>
          <option>Canada</option>
          <option>UK</option>
        </select>

        {/* Experience */}
        <select name="experience" value={filters.experience} onChange={handleChange} className="p-3 bg-white rounded-md shadow-sm border border-gray-300">
          <option value="">Experience</option>
          <option>Entry Level</option>
          <option>Mid Level</option>
          <option>Senior Level</option>
        </select>

        {/* Search Button */}
        <button className="p-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-md shadow-sm transition duration-300">
          Search
        </button>
      </div>
    </section>
  );
};

export default SearchBar;
