import React from 'react'
import { FaFilm } from "react-icons/fa6";
import { FaPhotoFilm } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsCameraReelsFill } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
    useGSAP(()=>{
        gsap.from('.navLinks',{
            y:15,
            opacity:0,
            stagger:0.2,
            delay:0.5,
            duration:2
        })
    })
  return (
    <>
    <div className='bg-[#0E232D] w-[100vw] text-white font-semibold flex text-[0.7rem] h-[13vh] justify-around    lg:text-[1rem] lg:h-[13vh] items-center '>
      <div className='navLinks '><FaFilm /></div>
      <div  className='navLinks'><FaPhotoFilm /></div>
      <div  className='navLinks'><MdEmail /></div>
      <div  className='navLinks'><BsCameraReelsFill /></div>
      <div  className='navLinks'><IoLogIn /></div>
    </div>
    </>
  )
}

export default Navbar