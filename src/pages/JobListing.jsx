import React, { useState } from 'react';
import Search from '../Components/Jobs/Search';
import HeroSection from '../Components/Jobs/HeroSection';
import Company from '../Components/Jobs/Company';
import Work from '../Components/Jobs/Work';
import JobRight from '../Components/Jobs/JobRight';
import SearchBar from '../Components/Jobs/SearchBar';
import jobs from '../data/jobs';

const JobListing = () => {
  const jobsPerPage = 2; // Show 2 jobs at a time
  const [currentPage, setCurrentPage] = useState(1); // Start at page 1
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  // Handle filtering logic
  const handleFilterChange = (filters) => {
    const filtered = jobs.filter((job) => {
      return (
        (!filters.role || job.title.includes(filters.role)) &&
        (!filters.type || job.type === filters.type) &&
        (!filters.location || job.location === filters.location) &&
        (!filters.experience || job.experience === filters.experience)
      );
    });
    setFilteredJobs(filtered);
    setCurrentPage(1); // Reset to the first page when filtering
  };

  // Calculate the index of the first and last job on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Get jobs for the current page
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Total number of pages
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  // Change page when a dot or page number is clicked
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <HeroSection />
      <Company />
      <Work />
      <JobRight />
      <SearchBar onFilterChange={handleFilterChange} />

      {/* Render 2 jobs at a time */}
      <div className="mt-6 flex flex-col gap-6">
        {currentJobs.map((job) => (
          <Search key={job.id} {...job} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-4 mt-6">
        {/* Previous Button */}
        <button
          className={`px-4 py-2 rounded-md ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`px-3 py-1 rounded-md ${currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-gray-300'}`}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className={`px-4 py-2 rounded-md ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default JobListing;
