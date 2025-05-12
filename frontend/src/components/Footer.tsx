// src/components/Footer.tsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-6 text-center mt-10">
      <p className="text-sm">© 2025 Excel Coatings. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:underline">
          Terms & Conditions
        </a>
        <a href="https://twitter.com/excelcoatings" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://linkedin.com/company/excelcoatings" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;
