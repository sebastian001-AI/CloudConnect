import React from 'react'
import Search from '../Components/Jobs/Search'
import HeroSection from '../Components/Jobs/HeroSection'
import Company from '../Components/Jobs/Company'
import Work from '../Components/Jobs/Work'
import JobRight from '../Components/Jobs/JobRight'
const JobListing = () => {
  return (
    <div>
      <HeroSection/>
      <Company/>
      <Work/>
      <JobRight/>
      <Search />
    </div>
  )
}

export default JobListing