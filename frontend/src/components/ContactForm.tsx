// src/app/components/ContactForm.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Handle form submission logic here (e.g., send to API)
  };

  return (
    <section className="flex flex-col xl:flex-row gap-3">
      {/* Left Side (Optional Image or Graphic) */}
      <div className="flex-1 bg-zinc-200 rounded-2xl h-64 md:h-auto flex items-center justify-center relative overflow-hidden min-h-[420px] md:min-h-[620px] lg:min-h-[600px] xl:min-h-[700px]" >
        <Image
          src="/images/hero-image.png"
          alt="Excel Coatings - Cool Roof"
          fill
          className="rounded-xl object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>

      {/* Right Side (Contact Form) */}
      <div className="bg-white rounded-2xl gap-5 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20 flex-1 flex flex-col justify-between">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl font-bold font-geist">Get in Touch with Us</h2>
          <p className="text-gray-600">
            Have questions? Need a custom solution? Our experts are here to help.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              required
            >
              <option value="" disabled>
                Interested in?
              </option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Custom Solution">Custom Solution</option>
              <option value="Dealership">Dealership</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black h-32"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full md:w-auto bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>

        <p className="mt-4 text-gray-500 text-sm">
          Interested in Dealership?{" "}
          <a href="/dealership" className="text-black font-semibold hover:underline">
            Click Here
          </a>
        </p>
      </div>
    </section>
  );
}
