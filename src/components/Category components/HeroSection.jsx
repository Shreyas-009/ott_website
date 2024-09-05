import React from 'react'
import Navbar from '../../components/Navbar'
import { IoSearch } from "react-icons/io5";
import { TiArrowSortedDown } from "react-icons/ti";

const HeroSection = () => {
  return (

    <div className='w-[100%] h-[122vh] relative bg-[url("/images/hero-bg.jpeg")] bg-top bg-contain bg-no-repeat font-monteserrat'>

      <Navbar />

      <main className='pt-[15vh] w-full h-full absolute top-0 left-0 bg-gradient-to-t to-transparent from-webBlue text-white flex flex-col justify-evenly items-center'>


        <div className='w-full flex justify-center gap-10 '>
          <div className='w-[35%] h-[50vh] bg-[url("/images/hero-bg.jpeg")] bg-cover '>

            <div className='w-full h-full bg-gradient-to-t from-webBlue to-[#0007] rounded-md flex items-center justify-center '>
              <h1 className='font-bold text-4xl'>Short Contents</h1>
            </div>
          </div>
          <div className='w-[35%] h-[50vh] bg-[url("/images/hero-bg2.jpeg")] bg-cover '>

            <div className='w-full h-full bg-gradient-to-t from-webBlue to-[#0007] rounded-md flex items-center justify-center '>
              <h1 className='font-bold text-4xl'>Long Contents</h1>
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center'>
          <h2 className='font-medium flex gap-3 text-4xl border-b-2 border-white pb-3'>What are you <p className='italic text-webGreen'>Looking for </p> ? <div className='w-[5vw]'></div> <IoSearch /> </h2>
        </div>

        <div className='w-full px-[10vw]'>
          <div className='flex  gap-2'>
            <button className='border-2 border-zinc-500 text-zinc-300 font-medium flex items-center gap-1 text-md px-4 py-1 rounded-md'>  <TiArrowSortedDown /> By Genre </button>
            <button className='border-2 border-webGreen hover:border-zinc-300 text-zinc-300 font-medium flex items-center gap-1 text-md px-4 py-1 rounded-md'>  Action </button>
            <button className='border-2 border-webGreen hover:border-zinc-300 text-zinc-300 font-medium flex items-center gap-1 text-md px-4 py-1 rounded-md'>  Thriller </button>
            <button className='border-2 border-webGreen hover:border-zinc-300 text-zinc-300 font-medium flex items-center gap-1 text-md px-4 py-1 rounded-md'>  Fiction </button>
            <button className='border-2 border-webGreen hover:border-zinc-300 text-zinc-300 font-medium flex items-center gap-1 text-md px-4 py-1 rounded-md'>  All </button>
          </div>
        </div>

      </main>


    </div>
  )
}

export default HeroSection