import React from 'react'

const Section1 = () => {
  return (
    <div className='w-full px-[15vw] py-[10vh] bg-webBlue flex text-white gap-10'>

      <div className='w-[30vw]  flex gap-2 flex-col justify-center '>
        <h1 className='text-orange-400 font-bold text-3xl'>Enjoy on your TV</h1>
        <p className='text-xl pr-10 '>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>

      <div className='w-[30vw] h-[40vh] relative'>
        <img src="/images/tv.png" alt="" className='w-full h-full object-cover absolute top-0 left-0 rounded-xl ' />
        <img src="/videos/vid1.gif" alt="Animated GIF" className='w-[71%] mx-auto h-[80%]  object-cover rounded-xl overflow-hidden ' />
      </div>

    </div>
  )
}

export default Section1