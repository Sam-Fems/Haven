import React from 'react'
import Executive1 from "../assets/executive(1).png"
import Executive2 from "../assets/executive(2).png"
import Executive3 from "../assets/executive(3).png"
import Executive4 from "../assets/executive(4).png"
import Executive5 from "../assets/executive(5).png"
import Executive6 from "../assets/executive(6).png"

const LuxuryRooms = () => {
  return (
    <>
      <h1 className='text-5xl text-center mt-10'>
        <span className='bg-gradient-to-r from-neutral-300 to-neutral-600 text-transparent bg-clip-text'>
          Luxury
        </span>{" "}
        <span className='bg-gradient-to-r from-amber-600 to-amber-800 text-transparent bg-clip-text'>
          Rooms
        </span>
      </h1>
      <div className='grid grid-cols-2 gap-15 ml-15 mb-5 mt-5 max-sm:grid-cols-1 max-sm:mr-10 sm:mr-10'>
        <div>
          <img className='rounded-md' src={Executive1} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Presidential Luxury</p>
        </div>
        <div>
          <img className='rounded-md' src={Executive2} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Executive Royal Luxury</p>
        </div>
        <div>
          <img className='rounded-md' src={Executive3} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">King Royal Luxury</p>
        </div>
        <div>
          <img className='rounded-md' src={Executive4} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Ambassador Luxury</p>
        </div>
        <div>
          <img className='rounded-md' src={Executive5} alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Business Luxury</p>
        </div>
        <div>
          <img className='rounded-md' src={Executive6}alt="" />
          <p className="text-3xl font-semibold mt-2 max-sm:text-2xl bg-gradient-to-r from-neutral-300 to-neutral-500 text-transparent bg-clip-text">Double Bed Luxury Room</p>
        </div>
      </div>
    </>
  )
}

export default LuxuryRooms