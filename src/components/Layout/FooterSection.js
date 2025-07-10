import { LuInstagram, LuLinkedin, LuFacebook, LuTwitter } from "react-icons/lu"
import Logo from "../../assets/thedailystayswhite.png"
import Image from "next/image"

export default function FooterSection() {
  return (
    <footer className="bg-[#343434] text-white py-16 px-6 md:py-20 md:px-12 lg:px-16 mx-auto">
      <div className="mx-auto max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand and Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Brand */}
            <div>
              {/* <h2 className="text-2xl md:text-3xl font-light tracking-wider text-white">THE DAILY STAYS</h2> */}
              <Image src={Logo}alt="Logo" className="w-full h-[40px] object-cover" />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">TEXT</h3>
                <p className="text-white">1-646-646-7374</p>
              </div> */}

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">CALL</h3>
                <p className="text-white">702165226</p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2 tracking-wide">EMAIL</h3>
                <p className="text-white">thedailystaysofficial@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-6 tracking-wide">EXPERIENCE</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://unionliving.in/community" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Groups and Events
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Long Term Stay
                </a>
              </li>
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-6 tracking-wide">EXPLORE</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Our Story
                </a>
              </li>
              
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Partners Column */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-6 tracking-wide">PARTNERS</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  The Daily Stays for Business
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-white hover:text-gray-300 transition-colors duration-200">
                  Real Estate Partnerships
                </a>
              </li> */}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
              <p className="text-gray-300 text-sm">© The daily stays, Inc. 2025 All Rights Reserved.</p>
              <div className="flex flex-wrap gap-6">
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-200">
                  Accessibility Policy
                </a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <LuInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <LuLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <LuFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <LuTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
