import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import FullyFurnished from "../../assets/fullyfurnished.png"
import Parking from "../../assets/parking.png"
import Housekeeping from "../../assets/housekeeping.png"
import Laundry from "../../assets/laundry.png"
import Wifi from "../../assets/wifi.png"
import Breakfast from "../../assets/Dinner.png"

const Amenities = ({homeContent}) => {
  const amenitiesData = [
    {
      id: 1,
      image: FullyFurnished,
      title: "Fully Furnished",
      description: "Thoughtfully designed, move-in ready apartments equipped with modern furniture, functional workspaces, fully equipped kitchens, and all the comforts you need to feel at home from day one."
    },
    {
      id: 2,
      image: Parking,
      title: "Parking",
      description: "Dedicated and secure parking spaces to ensure easy access and safety for your personal or company vehicles, no matter the duration of your stay."
    },
    {
      id: 3,
      image: Housekeeping,
      title: "Professional Housekeeping",
      description: "Scheduled housekeeping services to maintain a clean, fresh, and organized living space, allowing you to focus on work while we take care of the rest."
    },
    {
      id: 4,
      image: Wifi,
      title: "High-Speed WiFi",
      description: "Reliable, high-speed internet connectivity to support seamless remote work, video calls, and entertainment - keeping you connected around the clock."
    },
    {
      id: 5,
      image: Breakfast,
      title: "Breakfast and Dinner",
      description: "Nutritious, freshly prepared meals served daily to ensure you have one less thing to worry about after a long day of work or travel."
    },
    {
      id: 6,
      image: Laundry,
      title: "Laundry Services",
      description: "Convenient and efficient laundry services, including washing, ironing, and timely delivery, so you always have clean, ready-to-wear clothes without the hassle."
    }
  ];

  return (
    <div className="w-full py-8 bg-[#f2ece4] relative overflow-hidden">
      {/* Header */}
      <div className="pt-2 pl-6 lg:pt-12 lg:pl-12">
        <h1 className="text-[#000] text-[28px] lg:text-[52px] font-semibold font-[QuicksandBold] tracking-wide">
          Privilege
        </h1>
      </div>

      {/* Swiper Container */}
      <div className="mt-8 lg:mt-12 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.amenities-custom-next',
            prevEl: '.amenities-custom-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="amenities-swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
        >
          {amenitiesData.map((amenity) => (
            <SwiperSlide key={amenity.id}>
              <div className="group cursor-pointer px-4">
                <div className="relative overflow-hidden h-80 lg:h-[450px]">
                  <Image
                    src={amenity.image}
                    alt={amenity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 ease-in-out group-hover:rounded-b-[50%]"
                    priority={amenity.id === 1}
                  />
                  
                  {/* Hover Overlay with Description */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:rounded-b-[50%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center text-center p-6">
                    <h2 className="text-white text-2xl lg:text-3xl  font-[QuicksandBold] mb-4 leading-tight">
                      {amenity.title}
                    </h2>
                    <p className="text-white text-sm lg:text-base font-[MonserratRegular] font-medium leading-relaxed max-w-xs">
                      {amenity.description}
                    </p>
                  </div>

                  {/* Static Title Overlay (visible by default) */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 group-hover:opacity-0 transition-opacity duration-500">
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold font-[QuicksandBold] mb-4 leading-tight">
                      {amenity.title}
                    </h2>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute bottom-4 right-8 flex gap-4 z-10">
          <button className="amenities-custom-prev w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#75665f] border-opacity-40 bg-transparent hover:border-opacity-70 transition-all duration-300 flex items-center justify-center group">
            <IoArrowBack className="text-[#75665f] text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button className="amenities-custom-next w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#75665f] border-opacity-40 bg-transparent hover:border-opacity-70 transition-all duration-300 flex items-center justify-center group">
            <IoArrowForward className="text-[#75665f] text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom Styles for Navigation */}
      <style jsx global>{`
        .amenities-swiper {
          padding: 0 20px 100px 20px;
        }
        
        .amenities-swiper .swiper-slide {
          height: auto;
        }
        
        .amenities-swiper .swiper-button-next,
        .amenities-swiper .swiper-button-prev {
          display: none;
        }
        
        @media (min-width: 1024px) {
          .amenities-swiper {
            padding: 0 40px 100px 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Amenities;