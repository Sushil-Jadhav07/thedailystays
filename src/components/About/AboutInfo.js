import React from 'react'
import AboutInfoImage from "../../assets/stays3.png"
import Image from 'next/image'

const AboutInfo = () => {
  return (
    <div className='lg:px-24 grid grid-cols-1 items-center gap-12 grid-flow-row  lg:grid-cols-2  lg:py-24 py-4 px-4' >
        <div>
            <h3 className='lg:text-[2.5rem] text-[1.5rem] mb-2 font-[QuicksandMedium]'>About the Daily Stay</h3>
            <p className='text-[0.7rem] lg:text-[1rem]'>
            In a world where mobility is the norm and lifestyles are ever-evolving, Daily Stay offers a smarter, more flexible way to live. We provide fully furnished, ready-to-move-in apartments for both short and long-term stays, blending the comfort of home with the reliability of hospitality.
            <br /> <br />
Whether you’re a business traveler, digital nomad, relocating family, or someone in between leases, our thoughtfully curated spaces are designed for ease, style, and convenience. Every apartment comes equipped with high-speed Wi-Fi, modern amenities, and functional layouts—making it easy to live, work, and relax.
<br /> <br />
With flexible booking options, no long-term commitments, and seamless digital support, Daily Stay empowers you to move freely without sacrificing comfort. Think of us as your dependable home—whether it’s for a weekend or a year.


            </p>
        </div>
        <div>
            <Image src={AboutInfoImage} />
        </div>
    </div>
  )
}

export default AboutInfo