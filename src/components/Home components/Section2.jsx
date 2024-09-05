import React from 'react'

const Section2 = () => {
  return (
    <div className="w-full px-[15vw] py-[10vh] bg-webBlue flex text-white gap-10">
      <div className="w-[30vw] h-[40vh]">
        <img
          src="/images/tv2.jpeg"
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="w-[30vw] px-5  flex gap-2 flex-col justify-center">
        <h1 className="text-orange-400 font-bold  text-3xl">
          Watch contents of all <br />
          lengths{" "}
        </h1>
        <p className="text-xl ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>
    </div>
  );
}

export default Section2