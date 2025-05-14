// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center bg-neutral-900 text-white rounded-2xl gap-5 md:gap-10 lg:gap-14 xl:gap-20 px-4 pt-4 md:px-10 md:pt-10 lg:px-14 lg:pt-14 xl:px-20 xl:pt-20 pb-4 md:pb-6 lg:pb-8 xl:pb-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <Image src="/images/excel-dark.png" alt="Excel Coatings Logo" width={150} height={50} />
          <p className="text-gray-400 mt-4 max-w-xs">
            Protect your home or business with our advanced heat-reflective coatings.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gray-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/blog" className="hover:text-white">Blogs</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Products */}
        <div>
          <h3 className="font-semibold text-gray-400 mb-4">Our Products</h3>
          <ul className="space-y-2">
            <li>EXCEL CoolCoat®</li>
            <li>EXCEL NanoSeal</li>
            <li>EXCEL StayCool</li>
            <li>EXCEL StayClean</li>
            <li>EXCEL CoolTile</li>
            <li>EXCEL InsuX</li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="font-semibold text-gray-400 mb-4">Contact Us</h3>
          <p>+91 94882 23839</p>
          <p>+91 96552 23839</p>
          <p className="mt-2">sales@xlcoatings.com</p>
          <p className="mt-2 text-gray-400 text-sm">
            7/176, F-1, Therkku thottam, Athipalayam Road, Keeranatham,
            Coimbatore - 641035, Tamil Nadu, India
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="w-full mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex gap-4">
          <p>© 2025 EXCEL Coatings. All rights reserved</p>
          <div className="flex gap-2">
            <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
        <div>
          <Link href="https://genieus.studio?utm_source=excel-coatings&utm_medium=referral&utm_campaign=xlcoatings.com" target="_blank" className="flex gap-2 items-center text-gray-400 text-md hover:text-white cursor-pointer">
            <span style={{ color: 'inherit' }}>Built by</span>
            <Image src="/logos/genieus-light.png" alt="Genieus Studio" width={67} height={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
