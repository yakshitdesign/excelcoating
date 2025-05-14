// src/app/components/ContactForm.tsx
"use client";

import React from 'react';
import Badge from '@/components/Badge';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight01Icon } from '@hugeicons-pro/core-stroke-standard';
import PrimaryButton from '@/components/Buttons/PrimaryButton';

export default function ContactForm() {
  return (
    <section className="bg-white rounded-2xl flex flex-col gap-5 md:gap-10 lg:gap-14 px-4 py-4 md:px-10 md:py-10 lg:px-14 lg:py-14 xl:px-20 xl:py-20">
      <div className="flex flex-col gap-4 justify-center items-center">
        <Badge variant="yellow">
          <HugeiconsIcon icon={ArrowRight01Icon} className="w-4 h-4" /> Contact Us
        </Badge>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium font-geist leading-tight text-center max-w-full md:max-w-2xl">
          Get in Touch with Our Team
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="flex flex-col gap-6">
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              />
            </div>
            <PrimaryButton href="#">Send Message</PrimaryButton>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-medium">Contact Information</h3>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600">Email: info@excelcoatings.com</p>
              <p className="text-gray-600">Phone: +91 1234567890</p>
              <p className="text-gray-600">Address: 123, Main Street, City, State, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
