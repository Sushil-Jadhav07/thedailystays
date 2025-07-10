'use client';

import React from 'react';

export default function AboutAmenities() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16">

      {/* About the Location */}
      

      {/* Standard Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4 bg-gray-50 py-8 px-4 md:px-8 rounded-md">
        <h3 className="text-xl md:text-2xl font-[QuicksandBold] lg:mb-6 mb-2">Privileges</h3>
        <div className="  text-gray-700">
          <ul className="space-y-2">
            <li>Contactless Check-In</li>
            <li>24/7 Customer Support</li>
            <li>Professionally Cleaned</li>
          </ul>
          
        </div>
        <div className="  text-gray-700">
          <ul className="space-y-2">
            <li>Free WiFi</li>
            <li>24-Hour Security</li>
            <li>Fresh Towels</li>
          </ul>
        </div>
      </div>

      {/* Special Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-8 gap-4 bg-green-50 py-8 px-4 md:px-8 rounded-md">
        <h3 className="text-xl md:text-2xl font-[QuicksandBold] lg:mb-6 mb-2">Neighbourhood</h3>
        <div className=" text-gray-700">

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Phoenix Mall of the Millennium</h4>
            </div>
            <div>
              <h4 className="font-semibold">Cult Fit</h4>
              {/* <p className="text-sm">Additional cleaning available upon request.</p> */}
            </div>
            
          </div>
          <div />
           {/* Empty column for spacing */}
        </div>
        <div className=" text-gray-700">

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Xion Mall</h4>
              {/* <p className="text-sm">
                Fully-equipped with cookware, glassware, dishware and utensils.
              </p> */}
            </div>
            <div>
              <h4 className="font-semibold">Dnyanjyoti Savitribai Phule Udyan</h4>
            </div>
            {/* <div>
              <h4 className="font-semibold">Shop Your Stay</h4>
              <p className="text-sm">
                We’ve transformed our rooms into native retail environments, so guests can shop carefully 
                curated amenities, goods and decor straight from their phone, and ship directly home.
              </p>
              <a href="#" className="text-xs underline mt-1 inline-block">LEARN MORE</a>
            </div> */}
          </div>
          <div />

          
           {/* Empty column for spacing */}
        </div>
      </div>
      
    </div>
  );
}
