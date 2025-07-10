import React from 'react';
import Image from 'next/image';
import Mahalaxmi from "../../assets/stays7.png";
import Link from 'next/link';

const MumbaiLocations = () => {
  return (
    <div className="w-full flex flex-col gap-16 px-4 lg:px-16 py-10">

      {/* First Location Block */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-Start">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Our Locations in Mumbai</h2>
      

          <div className="w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-gray-200 rounded-lg shadow-lg hover:border hover:border-black transition">

              {/* Image Column */}
              <div className="md:w-1/2 w-full h-[400px]">
                <Image
                  src={Mahalaxmi} // Replace with your image
                  alt="Stay"
                  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                />
              </div>

              {/* Text Column */}
              <div className="md:w-1/2 w-full flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <h3 className="mb-4 text-[28px] font-medium">Southside</h3>
                  
                  <span className="mb-4 text-[20px] text-gray-700">Mahalaxmi, Mumbai</span>

                  {/* View Map link (opens Google Maps in new tab) */}
                  <div>
                    <a
                      href="https://maps.app.goo.gl/oJP2DATTACjCPEGM6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline text-sm font-medium hover:text-gray-800 transition-colors"
                    >
                      View Map
                    </a>
                  </div>

                  {/* Bullet points for BHK types */}
                  <ul className="list-disc list-inside text-[16px] text-black space-y-1 mt-3">
                    <li>1BHK</li>
                    <li>2.5BHK</li>
                    <li>3BHK</li>
                  </ul>
                </div>



                <Link
                  href="/southside"
                
                  className="bg-black text-white text-sm px-8 py-3 rounded-lg hover:bg-gray-800 transition w-max mt-4"
                >
                  DISCOVER MORE
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Right Side - Google Map */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-10 h-[400px] lg:h-[700px]">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.2313946094923!2d72.8244327749748!3d18.979496382205266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfc462de8a1f%3A0x2a4ee6362fbea170!2sSouthside%20by%20Union%20Living!5e1!3m2!1sen!2sin!4v1751958324513!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Second Location Block - DUPLICATE */}
      
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-Start">      

          <div className="w-full">
            <div className="flex flex-col md:flex-row items-stretch bg-gray-200 rounded-lg shadow-lg hover:border hover:border-black transition">

              {/* Image Column */}
              <div className="md:w-1/2 w-full h-[400px]">
                <Image
                  src={Mahalaxmi} // Replace with your image
                  alt="Stay"
                  className="w-full h-full object-cover rounded-tl-lg rounded-bl-lg"
                />
              </div>

              {/* Text Column */}
              <div className="md:w-1/2 w-full flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <h3 className="mb-4 text-[28px] font-medium">Varsity</h3>
                  
                  <span className="mb-4 text-[20px] text-gray-700">Santracruz, Mumbai</span>

                  {/* View Map link (opens Google Maps in new tab) */}
                  <div>
                    <a
                      href="https://maps.app.goo.gl/SHQ2iDMbyhxk5T1p8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 underline text-sm font-medium hover:text-gray-800 transition-colors"
                    >
                      View Map
                    </a>
                  </div>

                  {/* Bullet points for BHK types */}
                  <ul className="list-disc list-inside text-[16px] text-black space-y-1 mt-3">
                    <li>3BHK</li>
                    
                  </ul>
                </div>

                <Link
                  href="/varsity"
                 
                  className="bg-black text-white text-sm px-8 py-3 rounded-lg hover:bg-gray-800 transition w-max mt-4"
                >
                  DISCOVER MORE
                </Link>
              </div>

            </div>
          </div>

        </div>

        {/* Right Side - Google Map */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-10 h-[400px] lg:h-[700px]">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.866744528379!2d72.82925927886114!3d19.089038036011317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9fb0323a235%3A0x577a653a62504566!2sVarsity%20by%20Union%20Living!5e1!3m2!1sen!2sin!4v1751958241126!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default MumbaiLocations;
