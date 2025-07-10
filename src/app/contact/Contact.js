'use client';

import React, { useState } from 'react';

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
    // Submit logic (API, email, etc.)
  };

  return (
    <div className="min-h-screen w-full bg-white px-6 md:px-10 py-16 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-[PlayfairDisplay] text-black mb-10 text-center">
        Contact Us
      </h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
        {/* First & Last Name */}
        <div className="flex flex-col md:flex-row gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name*"
            required
            value={form.firstName}
            onChange={handleChange}
            className="w-full border  border-gray-200 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            required
            value={form.lastName}
            onChange={handleChange}
            className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
          />
        </div>

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email*"
          required
          value={form.email}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-3 text-sm outline-none focus:ring-1 focus:ring-black"
        />

        {/* Message */}
        <textarea
          name="message"
          placeholder="How we can help?*"
          required
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-200 px-4 py-3 text-sm h-40 resize-none outline-none focus:ring-1 focus:ring-black"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full border border-black py-3 text-sm tracking-widest font-medium hover:bg-black hover:text-white transition"
        >
          SEND
        </button>
      </form>

      {/* Footer Note */}
      <p className="mt-16 text-center text-sm text-black max-w-xl">
        If you need immediate help or need access to a property, please call <span className="cursor-pointer underline">702165226</span>.
      </p>
    </div>
  );
};

export default ContactUs;
