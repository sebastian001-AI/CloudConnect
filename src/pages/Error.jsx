import React from 'react'
import mistake from '../assets/mistake.png'
import { Link } from 'react-router-dom'


const Error = () => {
  return (
<div className="flex h-screen justify-center items-center flex-col">
      <img src={mistake} alt="" className="w-full h-80 object-contain" />
      <Link to={"/"} className='text-4xl items-center text-black font-bold'>Sorry page not found </Link>
    </div>  )
}

export default Error