import React from 'react'

const TwoCardSection = () => {
  return (
    <div className='w-full bg-webBlue px-[15vw]  py-[10vh] flex gap-10'>

    <div className='w-[30vw] h-[20vw]'>
      <img src="/images/2card-1.png" alt=""  className='w-full h-full object-cover'/>
    </div>
    <div className='w-[30vw] h-[20vw] '>
      <img src="/images/2card-2.png" alt=""  className='w-full h-full object-cover'/>
    </div>

    </div>
  )
}

export default TwoCardSection