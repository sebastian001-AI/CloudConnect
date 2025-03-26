/* eslint-disable react/prop-types */
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { HiOutlineHeart } from "react-icons/hi";
import apple from '../assets/apple.png';
import meta from '../assets/meta.png';
import ripple from '../assets/ripple.png';
import amazon from '../assets/amazon.png';
import paypal from '../assets/paypal.png';


const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  }
};

const TopCompany = () => {
  const Job = ({ type, img, title, color, bgColor }) => {
    return (
      <div className='shadow lg:w-[95%] mt-12'>
        <div className='bg-white rounded-t-md px-6 py-8 flex flex-col items-center'>
          <span className='flex items-center justify-center w-full'>
            <button className='rounded-full bg-transparent text-lg text-black px-8 py-2 outline-none border-none hoverBtn' style={{ border: `3px solid ${color}` }}>{type}</button>
            <HiOutlineHeart className='text-3xl' />
          </span>
          <img src={img} alt={title} className='w-28 h-28 rounded-full my-8' />
        </div>
        <div className='rounded-b-md px-6 py-8' style={{ backgroundColor: `${bgColor}` }}>
          <p className='text-2xl font-semibold'>{title}</p>
          <p className='py-2 text-lg'>003 30th Brooklyn, NY</p>
          <div className='pb-4'>
            {[...Array(5)].map((_, index) => (
              <span key={index} className='text-yellow-500'>★</span>
            ))}
          </div>
          <div className='p-2 border border-solid border-[#e2e4e7] rounded-md flex justify-between text-sm'>
            <p>Salary</p>
            <p style={{ color: `${color}` }}>USD 3,457,00</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#fafbfc] ">
      <div className="container mx-auto px-6 py-24">
        <div className="md:flex items-center justify-between">
          <h2 className="xl:text-5xl lg:text-3xl text-2xl font-semibold">Top Companies Registered</h2>
          <span className="md:flex gap-x-4">
            <button className="rounded-full md:my-0 my-4 bg-blue-600 text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">Browse Jobs</button>
            <button className="rounded-full bg-white border border-solid border-[#e2e4e7] text-black font-bold px-8 py-3 outline-none shadow">See All Companies</button>
          </span>
        </div>
        <p className="text-2xl mt-4 font-light">Know your worth and find the job that qualifies your life</p>
        <div>
          <Carousel
            swipeable={true}
            draggable={false}
            responsive={responsive}
            ssr={true}
            infinite
            showDots
            autoPlay={true}
            arrows={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}>
            <Job type="Full-time" img={apple} title="Software Engineer" color="#000" bgColor="#f0f0f0" />
            <Job type="Contract" img={meta} title="Cloud Engineer" color="#fec220" bgColor="#fffbf2" />
            <Job type="Internship" img={ripple} title="UiUx Designer" color="#c72b66" bgColor="#fbf2f6" />
            <Job type="Remote" img={amazon} title="Backend Developer" color="#349c30" bgColor="#e8f3ea" />
            <Job type="Contract" img={paypal} title="App Developer" color="#4b4efc" bgColor="#f4f4ff" />
            {/* Add more Job components as needed */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default TopCompany;