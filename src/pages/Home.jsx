import React from 'react'
import JobList from '../Components/JobList'
import TopCompany from  '../Components/TopCompany'
import JobSeeker from '../Components/JobSeeker'
import FutureJob from '../Components/FutureJob'
function Home() {
  return (
    <div className='pt-24'>
      <div className='flex flex-col items-center justify-center min-h-[60h] py-16 px-6'>
        <h1 className='xl:text-5xl lg:text-5xl sm:text-3xl text-2xl xl:leading-normal font-bold text-center text-w'>
          Find your dream job with CloudConnect!
        </h1>
        <p className='text-2xl lg:w-1/2 leading-9 my-5 font-semibold text-center'>
            CloudConnect is a platform that connects job seekers with employers. <span className='font-serif'>Get hired. Effortlessly.</span>
          </p>
          
      </div>
      <JobList />
      <TopCompany />
      <JobSeeker/>
      <FutureJob/> 
    </div>
  
  )
}

export default Home