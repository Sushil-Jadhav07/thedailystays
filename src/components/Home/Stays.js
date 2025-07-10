import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import Mahalaxmi from "../../assets/stays1.png";
import Baner from "../../assets/stays3.png";

import "swiper/css";
import "swiper/css/navigation";
import Link from 'next/link';

const Stays = () => {
  const slides = [
    { id: 1, image: Mahalaxmi, title: "Mumbai", subtitle: "Mumbai", link:'/mumbai' },
    { id: 2, image: Baner, title: "Pune", subtitle: "Baner", link:'pune' },
  ];

  return (
    <div className="w-full py-8 bg-[#f6f1ec] relative overflow-hidden">
      <div className="pt-2 pl-6 lg:pt-8 lg:pl-12">
        <h1 className="text-black text-[28px] lg:text-[52px] font-semibold  font-[QuicksandBold] tracking-wide">
          Find Your Daily Stays
        </h1>
      </div>

      <div className="mt-8 lg:my-12 relative px-8">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          loop
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              loop: true,
              autoplay: {
                delay: 4000,
                disableOnInteraction: false,
              },
            },
            1024: {
              slidesPerView: 2,
              loop: false,
              autoplay: false,
            },
          }}
          className="whats-on-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link href={slide.link} >
              <div className="group cursor-pointer lg:px-4">
                <div className="relative overflow-hidden h-80 lg:h-[450px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover transition-all duration-500 ease-in-out group-hover:rounded-b-[50%]"
                  />
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold font-[QuicksandBold] mb-4 leading-tight">
                      {slide.title}
                    </h2>
                   
                  </div>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute bottom-4 right-8 flex gap-4 z-10">
          <button className="custom-prev w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white border-opacity-40 bg-transparent hover:border-opacity-70 transition-all duration-300 flex items-center justify-center group">
            <IoArrowBack className="text-white text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
          <button className="custom-next w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white border-opacity-40 bg-transparent hover:border-opacity-70 transition-all duration-300 flex items-center justify-center group">
            <IoArrowForward className="text-white text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stays;
