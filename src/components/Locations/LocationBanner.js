import React from 'react'
import './LocationBanner.css'  // Parallax CSS

const LocationBanner = ({ image, location, sublocation, desc }) => {
  return (
    <div className="relative bg-black h-auto py-12 lg:py-24 parallax-bg">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 lg:px-20 text-white">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side */}
          <div>
            <h3 className="text-[1.5rem] lg:text-[2.5rem] font-[QuicksandBold] mb-4">

             <i>{location}</i><i>{sublocation}</i>
            </h3>
            <div className="h-[5px] mb-6 w-[90px] lg:w-[150px] bg-[#f47133]"></div>

           
          </div>

          {/* Right Side */}
          <div>
            <h3 className="font-[QuicksandMedium] text-[1.2rem] lg:text-[1.5rem] leading-relaxed">
              <i>{desc}</i>
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LocationBanner

