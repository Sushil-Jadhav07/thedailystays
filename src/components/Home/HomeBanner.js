"use client"

import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { IoChevronDown, IoRemove, IoAdd, IoLocationSharp } from "react-icons/io5"
import Image from "next/image"
import BannerOne from "../../assets/pcBanner1.png" 
import BannerTwo from "../../assets/pcBanner2.png"
import BannerThree from "../../assets/pcBanner3.png"

// Import Swiper styles
import "swiper/css"

const HomeBanner = () => {
  const [guests, setGuests] = useState(1)

  const incrementGuests = () => setGuests((prev) => prev + 1)
  const decrementGuests = () => setGuests((prev) => Math.max(1, prev - 1))

  return (
    <div className="relative lg:pt-0 ">
      <Swiper
        spaceBetween={0}
        className="h-[600px] lg:h-[650px]"
        draggable={true}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={BannerOne}
              alt="Luxury hotel room"
              width={1200}
              height={600}
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={BannerTwo}
              alt="Modern apartment interior"
              width={1200}
              height={600}
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              className="w-full h-full object-cover"
              src={BannerThree}
              alt="Modern apartment interior"
              width={1200}
              height={600}
            />
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Location Tag */}
      {/* <div className="absolute top-6 left-6 z-10">
        <div className="bg-emerald-800 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-medium">
          <IoLocationSharp className="w-4 h-4" />
          New York City
        </div>
      </div> */}

      {/* Booking Form Overlay */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10 top-[10%] lg:top-[80%] w-full max-w-[90%] lg:max-w-[80%] px-0">
        <div className="bg-white rounded-2xl shadow-2xl p-0">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  ">
            {/* Destination */}
            <div className="space-y-2 flex border-b-[1px] lg:border-r-[1px] border-[#272727] flex-col items-center">
              <label className="text-sm pt-4 font-[QuicksandMedium] text-gray-700 uppercase tracking-wide">DESTINATION</label>
              <div className="relative">
                <select className="w-full p-4 pr-4 text-gray-600 bg-transparent border-0 focus:outline-none appearance-none cursor-pointer text-base">
                  <option>Where to next</option>
                  <option>Santracruz, Mumbai</option>
                  <option>Mahalaxmi, Mumbai</option>
                  <option>Baner, Pune</option>
                
                </select>
                <IoChevronDown className="absolute right-0 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Check In */}
            <div className="space-y-2 border-b-[1px] lg:border-r-[1px] border-[#272727] flex flex-col items-center">
              <label className="text-sm pt-4 font-[QuicksandMedium] text-gray-700 uppercase tracking-wide">CHECK IN</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full p-4 text-gray-600 bg-transparent border-0 focus:outline-none cursor-pointer text-base"
                  placeholder="Select date"
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="space-y-2 border-b-[1px] lg:border-r-[1px] border-[#272727] flex flex-col items-center">
              <label className="text-sm pt-4 font-[QuicksandMedium] text-gray-700 uppercase tracking-wide">CHECK OUT</label>
              <div className="relative">
                <input
                  type="date"
                  className="w-full p-4 text-gray-600 bg-transparent border-0 focus:outline-none cursor-pointer text-base"
                  placeholder="Select date"
                />
              </div>
            </div>

            {/* Guests */}
            <div className="space-y-2 border-b-[1px] lg:border-r-[1px] border-[#272727] flex flex-col items-center">
              <label className="text-sm pt-4 font-[QuicksandMedium] text-gray-700 uppercase tracking-wide">GUESTS</label>
              <div className="flex items-center justify-between p-4">
                <button
                  onClick={decrementGuests}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  disabled={guests <= 1}
                >
                  <IoRemove className="w-4 h-4 text-gray-600" />
                </button>
                <span className="text-base font-medium text-gray-800 mx-4">{guests}</span>
                <button
                  onClick={incrementGuests}
                  className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                >
                  <IoAdd className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-1">
              <button className="w-full bg-emerald-800 hover:bg-emerald-900 bg-black text-white font-semibold py-4 px-8 h-[100%] lg:rounded-tr-xl lg:rounded-br-xl rounded-br-xl rounded-bl-xl lg:rounded-bl-none transition-colors duration-200 text-base tracking-wide">
                SEARCH
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBanner
