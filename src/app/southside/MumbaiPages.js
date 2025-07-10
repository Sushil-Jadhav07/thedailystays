import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'


import img11 from "../../assets/1BHK/2.png";
import img12 from "../../assets/1BHK/3.png";
import img13 from "../../assets/1BHK/5.png";
import img14 from "../../assets/1BHK/6.png";
import img21 from "../../assets/2BHK/1.png";
import img22 from "../../assets/2BHK/3.png";
import img23 from "../../assets/2BHK/4.png";
import img24 from "../../assets/2BHK/11.png";
import img25 from "../../assets/2BHK/12.png";
import img31 from "../../assets/2.5BHK/1.png";
import img32 from "../../assets/2.5BHK/4.png";
import img33 from "../../assets/2.5BHK/6.png";
import img34 from "../../assets/2.5BHK/7.png";
import img41 from "../../assets/3BHK/10.png";
import img42 from "../../assets/3BHK/1.png";
import img43 from "../../assets/3BHK/3.png";
import img44 from "../../assets/3BHK/9.png";
import VarsityBannerOne from "../../assets/southsidebanner/1.webp"
import VarsityBannerTwo from "../../assets/southsidebanner/2.webp"
import VarsityBannerThree from "../../assets/southsidebanner/3.webp"

const MumbaiPages = () => {
  const rooms = [
      {
        title: '1BHK',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img11, img12],
      },
      {
        title: '1BHK Cozy',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img13, img14],
      },
      
      {
        title: '2.5BHK',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img31, img32, img33, img34],
      },
      
      {
        title: '3BHK',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img41, img42, img43, img44],
      },
      
      
    ];
    const bannerImages = [
      VarsityBannerOne, VarsityBannerTwo, VarsityBannerThree
    ]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro title="Southside" location='Mahalaxmi, Mumbai'  bannerImages={bannerImages} desc="Southside by Union Living is an elevated living experience designed for modern professionals who seek both style and substance in the heart of the city. Offering fully furnished, thoughtfully designed residences with flexible leasing options, Southside combines the ease of serviced living with the warmth of a well-curated home. From minimalist interiors and functional layouts to curated communal spaces and seamless support, every detail is crafted for comfort, connection, and quiet sophistication. Whether for a season or something more permanent, Southside offers a place to live on your terms—without compromise" />
    <AboutAmenities />
    <RoomTypes rooms={rooms} />
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages