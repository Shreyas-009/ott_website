import React from 'react'
import HorizantalCard from './HorizantalCard'
import Card from '../Category components/Card'

const Section = () => {
  return (
    <div className='text-white bg-webBlue py-[5vh] px-[10vw]'>

      <div className='py-[5vh] pb-[10vh]'>
        <h1 className='text-webGreen text-3xl '>Trailers & extras</h1>

        <div className='flex my-5 flex-wrap gap-10'>

          <HorizantalCard />
          <HorizantalCard />
          {/* <HorizantalCard /> */}

        </div>
      </div>

      <div>
        <h1 className='text-webGreen text-3xl '>Similar</h1>

        <div className='flex my-5 flex-wrap gap-10'>

          <Card />
          <Card />
          <Card />

        </div>
      </div>



    </div>
  )
}

export default Section