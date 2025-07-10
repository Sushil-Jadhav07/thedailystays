"use client"

import Image from "next/image"
import img from "../../assets/corparate5.png"
import img2 from "../../assets/corparate4.png"
import img3 from "../../assets/corparate3.png"

const Corporate = () => {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-16 !pr-0 bg-white">
      <div className="max-w-8xl ml-auto mr-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[28px] font-[QuicksandBold] lg:text-[2.5rem]  text-gray-900 leading-tight mb-4">
                Corporate Stays 
              </h2>
              <p className="italic text-[18px] lg:text-[20px] font-[QuicksandBold] text-[#8a7970]  relative inline-block mb-2">
          The ultimate shortstay solution for professionals on the move
        </p>

              {/* Purple accent line */}
              <div className="w-24 h-1 bg-purple-600 mb-6"></div>
            </div>

            <div className="space-y-4">
              <p className="text-[14px] font-[MontserratRegular] lg:text-[16px] text-gray-700 leading-relaxed"> 	
Our spaces are designed for modern individuals who value both efficiency and comfort.
<br />
 Whether you're a consultant, digital nomad, or executive on assignment, our fully-furnished accommodations offer a seamless living.
 
 experience with high-speed Wi-Fi, ergonomic workstations, smart access, and premium essentials. Each unit is curated to feel like home while
 delivering the consistency of a hotel—complete with stocked kitchens, on-demand housekeeping, and local lifestyle recommendations. With tech-enabled
 check-ins and prime locations near business hubs and transit, we eliminate hassle so you can focus on what matters. Whether for a few nights
 or a few months, we’re redefining how professionals live, work, and move.
              </p>

              
            </div>
          </div>

          {/* Right Images Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Column - Two smaller images */}
              <div className="flex flex-col gap-4">
                {/* Top small image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={img}
                    alt="Modern kitchen and living area"
                    width="100%"
                    // height={200}
                    className="w-full h-32 sm:h-40 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Bottom small image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src={img2}
                    alt="Bedroom with modern amenities and TV"
                    width={250}
                    height={200}
                    className="w-full h-32 sm:h-40 lg:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column - Large image */}
              <div className="relative overflow-hidden rounded-l-lg shadow-lg group">
                <Image
                  src={img3}
                  alt="Luxury hotel bedroom with elegant curtains and comfortable bed"
                  width={300}
                  height={400}
                  className="w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporate
