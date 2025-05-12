// src/components/Header.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import PrimaryButton from "./Buttons/PrimaryButton";
import GhostButton from "./Buttons/GhostButton";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white py-4 px-4 md:py-6 md:px-6 flex items-center rounded-[16px] justify-between">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="Excel Coatings" width={120} height={36} />
      </Link>

      {/* Hamburger for mobile */}
      <button
        className="md:hidden flex items-center p-2"
        onClick={() => setMobileOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex flex-grow gap-2 items-center font-regular text-gray-500 ml-8">
        <Link href="/about-us" className="px-3 py-2 bg-white text-sm rounded-md hover:text-primary hover:bg-gray-100">About us</Link>
        <div className="relative group">
          <Link
            href="/products"
            className="px-3 py-2 bg-white text-sm rounded-md hover:text-primary hover:bg-gray-100 flex items-center gap-1"
          >
            Our Products
            <svg className="w-4 h-4 transform group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </Link>
          {/* Dropdown Menu */}
          <div className="absolute left-0 top-full mt-0 hidden group-hover:flex flex-col bg-white shadow-md rounded-md p-2 w-56 z-10">
            <Link href="/products/coolcoat" className="px-4 py-2 hover:bg-zinc-100 transition">EXCEL CoolCoat®</Link>
            <Link href="/products/nanoseal" className="px-4 py-2 hover:bg-zinc-100 transition">EXCEL NanoSeal</Link>
            <Link href="/products/staycool" className="px-4 py-2 hover:bg-zinc-100 transition">EXCEL StayCool</Link>
            <Link href="/products/stayclean" className="px-4 py-2 hover:bg-zinc-100 transition">EXCEL StayClean</Link>
            <Link href="/products/cooltile" className="px-4 py-2 hover:bg-zinc-100 transition">EXCEL CoolTile</Link>
            <Link href="/products/insulx" className="px-4 py-2 hover:bg-zinc-100 transition">EXCEL InsulX</Link>
          </div>
        </div>
        <Link href="/gallery" className="px-3 py-2 bg-white text-sm rounded-md hover:text-primary hover:bg-gray-100">Gallery</Link>
        <Link href="/blogs" className="px-3 py-2 bg-white text-sm rounded-md hover:text-primary hover:bg-gray-100">Blogs</Link>
        <Link href="/contact" className="px-3 py-2 bg-white text-sm rounded-md hover:text-primary hover:bg-gray-100">Contact Us</Link>
      </nav>

      {/* CTA Section (desktop) */}
      <div className="hidden md:flex items-center gap-4 ml-4">
        <GhostButton href="tel:+911234567890">Talk to Expert</GhostButton>
        <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/40 flex flex-col md:hidden">
          <div className="bg-white rounded-b-xl shadow-lg p-6 m-2 flex flex-col gap-2">
            <Link href="/about-us" className="py-2" onClick={() => setMobileOpen(false)}>About us</Link>
            <div>
              <span className="block font-semibold py-2">Our Products</span>
              <div className="flex flex-col gap-1 pl-2">
                <Link href="/products/coolcoat" className="py-1" onClick={() => setMobileOpen(false)}>EXCEL CoolCoat®</Link>
                <Link href="/products/nanoseal" className="py-1" onClick={() => setMobileOpen(false)}>EXCEL NanoSeal</Link>
                <Link href="/products/staycool" className="py-1" onClick={() => setMobileOpen(false)}>EXCEL StayCool</Link>
                <Link href="/products/stayclean" className="py-1" onClick={() => setMobileOpen(false)}>EXCEL StayClean</Link>
                <Link href="/products/cooltile" className="py-1" onClick={() => setMobileOpen(false)}>EXCEL CoolTile</Link>
                <Link href="/products/insulx" className="py-1" onClick={() => setMobileOpen(false)}>EXCEL InsulX</Link>
              </div>
            </div>
            <Link href="/gallery" className="py-2" onClick={() => setMobileOpen(false)}>Gallery</Link>
            <Link href="/blogs" className="py-2" onClick={() => setMobileOpen(false)}>Blogs</Link>
            <Link href="/contact" className="py-2" onClick={() => setMobileOpen(false)}>Contact Us</Link>
            <div className="flex flex-col gap-2 mt-4">
              <GhostButton href="tel:+911234567890">Talk to Expert</GhostButton>
              <PrimaryButton href="/contact">Get in Touch</PrimaryButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
