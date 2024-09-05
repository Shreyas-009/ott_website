import React from 'react'

import { FaPlay } from "react-icons/fa";

const HorizantalCard = () => {
  return (
    <div className=' relative group w-[30vw] h-[40vh] rounded-md bg-[url("/images/content-2.jpeg")] bg-cover bg-center'>


      <main className='opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex flex-col items-start justify-end gap-1 cursor-pointer w-full h-full absolute top-0 left-0 bg-gradient-to-t to-[#0007] from-webBlue p-4 '>


        <div className='w-full flex justify-between items-start'>

          <h1 className='font-medium text-xl'>Eternals Official Trailer</h1>
          <h3 className='text-lg'>1 min</h3>
        </div>

        <p className=' mb-2 font-thin text-md'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, sequi!</p>


        <button className='bg-webGreen px-3 py-2 text-sm rounded-md flex items-center gap-2'> <FaPlay /> Watch Now</button>

      </main>



    </div>
  )
}

export default HorizantalCard