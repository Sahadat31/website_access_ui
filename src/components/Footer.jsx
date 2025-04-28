import React from 'react'
import {FaFacebook,FaTwitter,FaLinkedin } from "react-icons/fa"
const Footer = () => {
  return (
    <footer className="bg-cyan-700 text-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Accessibility Scanner</h3>
          <p className="text-sm">
            Empowering organizations to create inclusive digital experiences through powerful scans, manual audits, and compliance solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <p className="text-sm">Email: support@accessibilityscanner.com</p>
          <p className="text-sm mt-2">Phone: +1 (123) 456-7890</p>
          <div className="flex space-x-4 mt-4">
            {/* Social Icons */}
            <a href="#" className="hover:opacity-80">
              <FaFacebook className="text-cyan-600 mt-1" size={24} />
            </a>
            <a href="#" className="hover:opacity-80">
              <FaTwitter className="text-cyan-600 mt-1" size={24} />
            </a>
            <a href="#" className="hover:opacity-80">
              <FaLinkedin className="text-cyan-600 mt-1" size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cyan-500 mt-10 pt-6 text-center text-xs text-cyan-100">
        © {new Date().getFullYear()} Accessibility Scanner. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;