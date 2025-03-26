/* eslint-disable react/prop-types */
import React from 'react';
import meta from '../assets/meta.png';
import google from '../assets/google.png';
import lenovo from '../assets/lenovo.png';
import ripple from '../assets/ripple.png';
import microsoft from '../assets/microsoft.png';
import yandex from '../assets/yandex.png';
import amazon from '../assets/amazon.png';
import apple from '../assets/apple.png';
import paypal from '../assets/paypal.png';
import metamask from '../assets/metamask.png';
import { GrAnnounce } from 'react-icons/gr';
import { HiOutlineHeart } from 'react-icons/hi';
import { IoLocationOutline } from 'react-icons/io5';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const JobList = () => {
  const Categories = ({ image, title,  }) => {
    return (
      <div className='bg-white rounded-[10px] py-8 px-6 flex items-center justify-between lg:text-2xl'>
        <span className='flex items-center gap-x-4'>
          <img src={image} alt={title} width={30} /> <p>{title}</p>
        </span>
      </div>
    );
  };

  const Recommended = ({
    time,
    title,
    type,
    amount,
    country,
    city,
    job,
    bgColor,
    color,
  }) => {
    return (
      <div className='w-full rounded-[10px] shadow' style={{ borderLeft: `6px solid ${color}` }}>
        <div className='bg-white w-full p-8 rounded-t-[10px]'>
          <span className='flex items-start justify-between'>
            <span className='flex-1 md:flex items-start lg:gap-x-8 gap-x-4 lg:text-2xl text-lg'>
              <button className='p-4 rounded-md border-none outline-none md:mb-0 mb-4' style={{ backgroundColor: bgColor }}>
                <GrAnnounce size={30} style={{ color: color }} />
              </button>
              <p>Type: {type}</p>
              <p>Time: {time} weeks ago</p>
            </span>
            <HiOutlineHeart className='text-2xl'/>
          </span>
          <div className='md;pl-24'>
            <p className='text-2xl font-semibold md:mt-0 mt-4'>{title}</p>
            <p className='text-xl pt-4'>Dollar {amount} yearly</p>
          </div>
        </div>
        <div className='py-8 px-6 flex-1 md:flex justify-between rounded-b-[10px] border border-solid border-[#e2e4e7]' style={{ backgroundColor: `${bgColor}` }}>
          <div className='flex-1 md:flex items-center gap-x-8 text-2xl'>
            <span className='flex items-center gap-x-3'>
              <IoLocationOutline className='text-2xl'
              style={{ color: `${color}` }} />
              <p className='text-xl font-light'>{country}</p>
              <p className='text-xl font-light'>{city}</p>

            </span>
            <span className='flex items-center gap-x-3 lg:py-0 py-4'>
              <BiDotsHorizontalRounded className='text-2xl' style={{ color: `${color}` }} />
              <p className='text-xl font-light'>{job}</p>
            </span>
          </div>
          <button className='rounded-full bg-white border border-solid border-[#e2e4e7] text-black font-bold px-8 py-3 outline-none shadow'>Apply Now</button>
        </div>
      </div>
    );
  };

  return (
    <div className=''>
      <div className='container mx-auto px-6 py-24'>
        <div className='md:flex items-center justify-between'>
          <h2 className='xl:text-5xl lg:text-3xl text-2xl font-semibold'>Recommended Jobs</h2>
          <span className='md:flex gap-x-4'>
            <button className='rounded-full md:my-0 my-4 bg-blue-600 text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn'>Latest Jobs</button>
            <button className='rounded-full bg-transparent border border-solid border-gray-200 text-lg text-black font-bold px-8 py-3 outline-none'>Premium Jobs</button>
          </span>
        </div>
        <p className='text-2xl mt-4 font-light'>Explore suggested job search</p>
        <div className='xl:flex gap-x-8 mt-16'>
          <div className='xl:w-2/5'>
            <div className='bg-white rounded-[10px] py-8 px-6 mb-4'>
              <h2 className='text text-4xl font-semibold'>Job Category</h2>
            </div>
            <div className='flex flex-col gap-y-4'>
            <a href="https://about.meta.com/" target="_blank" rel="noopener noreferrer">
  <Categories image={meta}  title="Tech company" /></a>

<a href="https://careers.google.com/about/" target="_blank" rel="noopener noreferrer">
  <Categories image={google}  title="IT corporation" /></a>

              <a href="https://jobs.lenovo.com/en_US/careers" target="_blank" rel="noopener noreferrer">
  <Categories image={lenovo}  title="Consumer electronics company" />
</a>

<a href="https://ripple.com/company/careers/" target="_blank" rel="noopener noreferrer">
  <Categories image={ripple}  title="Software company" />
</a>

<a href="https://careers.microsoft.com/" target="_blank" rel="noopener noreferrer">
  <Categories image={microsoft} title="Software company" />
</a>

<a href="https://yandex.com/jobs" target="_blank" rel="noopener noreferrer">
  <Categories image={yandex}  title="Search engine" />
</a>

<a href="https://www.amazon.jobs/" target="_blank" rel="noopener noreferrer">
  <Categories image={amazon} title="E-commerce company" />
</a>

<a href="https://www.apple.com/careers/" target="_blank" rel="noopener noreferrer">
  <Categories image={apple}  title="Technology company" />
</a>

<a href="https://www.paypal.com/us/webapps/mpp/jobs" target="_blank" rel="noopener noreferrer">
  <Categories image={paypal} title="Financial technology company" />
</a>

<a href="https://metamask.io/careers/" target="_blank" rel="noopener noreferrer">
  <Categories image={metamask} title="Software" />
</a>

            </div>
          </div>
          <div className='xl:w-3/5 flex flex-col gap-y-3 xl:mt-0 mt-4'>
            <Recommended amount='3000-4500' bgColor='#f4f4ff' color='#4b4efc' country='USA' job='Engineer' city='Texas' time='4' title='Senior Backend Engineer' type='Remote'/>
            <Recommended amount='3000-4500' bgColor='#fbf2f6' color='#b70041' country='USA' job='Relation' city='Amsterdam' time='4' title='Customer Care' type='Remote'/>
            <Recommended amount='2200-3000' bgColor='#fffbf2' color='#ffb800' country='Nigeria' job='Engineer' city='Awka' time='2' title='Junior Frontend Engineer' type='Internship'/>
            <Recommended amount='3000-4500' bgColor='#f4f4ff' color='#4b4efc' country='USA' job='Engineer' city='Amsterdam' time='4' title='Senior Backend Engineer' type='Remote'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;