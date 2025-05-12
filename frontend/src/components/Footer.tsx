// src/components/Footer.tsx
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div className="col-span-1">
          <Image src="/logo.png" alt="Excel Coatings Logo" width={150} height={50} />
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
      <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 EXCEL Coatings. All rights reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
