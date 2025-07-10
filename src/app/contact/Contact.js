'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ContactImage from '../../assets/carouselImage2.png';
import Link from 'next/link';

const ContactUs = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="px-4 py-8 lg:px-16 lg:py-12 bg-[#ebebeb]">
      <div className="grid grid-cols-1 gap-[15px] items-center lg:gap-[50px] lg:grid-cols-2 grid-flow-row">
        <div>
          <Image className="rounded-[20px]" src={ContactImage} alt="Contact" />
        </div>

        <div className="flex lg:px-8 items-start justify-start flex-col w-full">
          <h3 className="text-center text-[1.4rem] lg:text-[2.5rem] text-[#75665f] font-[QuicksandBold]">Contact Us</h3>
          <div className="h-[5px] mb-4 w-[60px] lg:w-[100px] bg-[#f47133]"></div>

          <form onSubmit={handleSubmit} className="w-full max-w-4xl space-y-6 mt-6">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                required
                value={form.firstName}
                onChange={handleChange}
                className="w-full border px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black rounded-lg"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                required
                value={form.lastName}
                onChange={handleChange}
                className="w-full border px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black rounded-lg"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email*"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black rounded-lg"
            />

            <textarea
              name="message"
              placeholder="How we can help?*"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full border px-4 py-3 text-sm h-40 resize-none outline-none focus:ring-1 focus:ring-black rounded-lg"
            />

            <button
              type="submit"
              className="w-full border border-black py-3 text-sm tracking-widest font-medium hover:bg-black hover:text-white transition"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
