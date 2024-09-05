import React from 'react'
import Navbar from '../../components/Navbar'

const HeroSection = () => {
  return (

    <>
    <div className='w-[100%] h-[110vh] bg-[url("/images/hero-bg.jpeg")] bg-top bg-cover bg-no-repeat font-monteserrat'>

      <Navbar />

      <main className='pt-[15vh] px-[5vw] w-full h-full bg-gradient-to-t to-transparent from-webBlue text-white flex flex-col items-center'>

        <div className='w-full h-[92%] border bg-zinc-900 rounded-md'>

        </div>

      </main>


    </div>


    <div className='w-full pb-[5vh] bg-webBlue text-white px-[10vw] flex flex-col gap-5'>
        <h1 className='text-6xl'>Eternals</h1>
        <div className='flex gap-3 w-full'>
            <button className='bg-zinc-700 text-white font-medium flex items-center gap-1 text-md   px-6 py-1 rounded-md'>  Action </button>
            <button className='bg-zinc-700 text-white font-medium flex items-center gap-1 text-md   px-6 py-1 rounded-md'>  Thriller </button>
            <div className=' flex items-center'> <div className='bg-webGreen w-3 h-3 rounded-full '></div> </div>
            <p className=' text-xl'>2021</p>
            <div className=' flex items-center'> <div className='bg-webGreen w-3 h-3 rounded-full '></div> </div>
            <p className=' text-xl'>U/A 13+</p>
        </div>
        <p className='text-xl font-thin'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis maxime ipsum consectetur esse dicta. Aliquid modi dolorem minima labore! Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, asperiores.</p>
      </div>


    </>

  )
}

export default HeroSection