"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 0,
      quote:
        "Beautiful stay and was blown away by the thoughtful design and attention to detail of the apartment. Can't wait to visit other Sonders in the future.",
      name: "Niraj",
      location: "Pune",
      bgColor: "bg-[#9EC6F3]",
      borderRadius: "rounded-tl-[60px]", // top-left corner
    },
    {
      id: 1,
      quote: "Absolutely perfect for a stay whether you're a solo traveler, couple or a family.",
      name: "Ritu",
      location: "Baner",
      bgColor: "bg-[#FFDCDC]",
      borderRadius: "rounded-tr-[60px]", // top-right corner
    },
    {
      id: 2,
      quote: "Love the app! It works seamlessly and all the information is so clear to make the experience seamless.",
      name: "Priya",
      location: "Santacruz",
      bgColor: "bg-[#CB9DF0]",
      borderRadius: "rounded-bl-[60px]", // bottom-left corner
    },
    {
      id: 3,
      quote: "The location was perfect and the space was exactly what we needed for our weekend getaway.",
      name: "Akash",
      location: "Mahalaxmi",
      bgColor: "bg-[#F6AE99]",
      borderRadius: "rounded-br-[60px]", // bottom-right corner
    },
    {
      id: 4,
      quote: "Exceptional service and beautiful accommodations. Will definitely be staying again!",
      name: "Neha",
      location: "Pune",
      bgColor: "bg-[#EBD6FB]",
      borderRadius: "rounded-tl-[60px]", // back to top-left (cycle repeats)
    },
  ]

  return (
    <section className="bg-[#f5f1eb] py-12 px-4 sm:py-16 sm:px-6 md:py-20 md:px-8 lg:py-24 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 sm:mb-16 max-w-full">
          <h2 className="mb-6 text-3xl font-[QuicksandMedium] sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
            Every stay has a story
          </h2>
          <p className="text-lg  text-gray-700 leading-relaxed max-w-2xl">
            But don't just take our word for it — see what our guests have to say.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Custom Navigation Buttons - Hidden on mobile */}
          <button
            className="swiper-button-prev-custom hidden lg:block absolute left-0 top-1/2 z-20 -translate-y-1/2 -translate-x-4 rounded-full bg-white p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Previous testimonial"
          >
            <LuChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            className="swiper-button-next-custom hidden lg:block absolute right-0 top-1/2 z-20 -translate-y-1/2 translate-x-4 rounded-full bg-white p-3 shadow-lg hover:shadow-xl transition-shadow duration-200"
            aria-label="Next testimonial"
          >
            <LuChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Swiper Container with Fade Effects */}
          <div className="relative overflow-hidden">
            {/* Left Fade Edge - Smaller on mobile */}
            <div
              className="absolute left-0 top-0 bottom-0 w-6 sm:w-12 md:w-16 lg:w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to right, #f5f1eb, rgba(245, 241, 235, 0))",
              }}
            />

            {/* Right Fade Edge - Smaller on mobile */}
            <div
              className="absolute right-0 top-0 bottom-0 w-6 sm:w-12 md:w-16 lg:w-24 z-10 pointer-events-none"
              style={{
                background: "linear-gradient(to left, #f5f1eb, rgba(245, 241, 235, 0))",
              }}
            />

            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={60}
              slidesPerView={1.1}
              centeredSlides={false}
              loop={true}
              speed={600}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".swiper-button-prev-custom",
                nextEl: ".swiper-button-next-custom",
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                  spaceBetween: 16,
                  centeredSlides: false,
                },
                480: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                  centeredSlides: false,
                },
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 30,
                  centeredSlides: false,
                },
                768: {
                  slidesPerView: 2.2,
                  spaceBetween: 40,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                  centeredSlides: true,
                },
              }}
              className="testimonials-swiper !px-2"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className={`${testimonial.bgColor} ${testimonial.borderRadius} p-6 sm:p-8 min-h-[250px] sm:min-h-[280px] md:min-h-[280px] flex flex-col justify-between`}
                  >
                    <blockquote className="text-lg  font-[MontserratRegular] sm:text-xl leading-relaxed text-gray-900 flex-grow mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <div className="font-semibold font-[QuicksandBold] text-gray-900 text-lg">{testimonial.name}</div>
                      <div className="text-gray-600 font-[QuicksandMedium]">{testimonial.location}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination Dots */}
          <div className="swiper-pagination-custom flex justify-center mt-8 space-x-2"></div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper .swiper-slide {
          opacity: 0.7;
          transition: opacity 0.3s ease;
        }
        
        .testimonials-swiper .swiper-slide-active {
          opacity: 1;
        }
        
        .testimonials-swiper .swiper-slide-prev,
        .testimonials-swiper .swiper-slide-next {
          opacity: 0.85;
        }
        
        @media (min-width: 768px) {
          .testimonials-swiper .swiper-slide {
            opacity: 1;
          }
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #9ca3af;
          opacity: 1;
          cursor: pointer;
          transition: background-color 0.2s ease;
          margin: 0 4px;
        }
        
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background-color: #1f2937;
        }
      `}</style>
    </section>
  )
}