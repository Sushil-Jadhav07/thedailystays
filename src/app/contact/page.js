import React from 'react'

import ContactUs from '@/components/Home/ContactUs'
import ContactPage from './Contact'
import HomeBanner from '@/components/Home/HomeBanner'
import BookingFloatingSearchBar from '@/components/Home/BookingFloatingSearchBar'
import FAQSection from '@/components/Home/FaqSection'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import ContactBooking from '@/components/contact/ContactBooking'

const page = () => {
  return (
    <div>
        <NavbarTwo />
                <div className=''>
                {/* <HomeBanner /> */}
                <ContactBooking />
                {/* <BookingFloatingSearchBar /> */}
                <ContactPage />
                {/* <FAQSection /> */}
                {/* <Whyus /> */}
                {/* <ContactUs /> */}
                {/* <Partner /> */}
                <FooterSection />
                {/* <Footer /> */}
                </div>
        {/* <ContactUs /> */}
    </div>
  )
}

export default page