import React from "react";
import { FaWhatsapp, FaPhoneAlt, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1C1F25] text-white pt-10 relative">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        {/* Logo and About */}
        <div className="md:col-span-1">
          <img
            src="/logo.png"
            alt="Suraj Marbles"
            className="h-12 mb-4"
          />
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <p className="text-lg mb-4">
            We are a boutique firm dealing in the finest quality imported
            Italian marbles and other natural stones.
          </p>
          <div className="flex items-center gap-2">
            <FaPhoneAlt />
            <span>+91 xxxxxxxxxxx</span>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Navigate</h3>
          <ul className="space-y-4 text-lg">
            <li><a href="#">Marble</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Catalogue</a></li>
          </ul>
        </div>

        {/* Product */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Our Product</h3>
          <ul className="space-y-4 text-lg">
            <li><a href="#">Our Best Picks</a></li>
            <li><a href="#">Marble By Color</a></li>
            <li><a href="#">Marble By Spaces</a></li>
          </ul>
        </div>

        {/* Showroom */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Our Showroom</h3>
          <p className="text-lg mb-2">
            Makrana Road, Madanganj, Kishangarh,
          </p>
          <p className="text-lg mb-4">Rajasthan 305801</p>
          <span className="text-lg">+91 xxxxxxxxxxx</span>
        </div>

        {/* Subscribe */}
        <div>
          <input
            type="email"
            placeholder="Your Email Address"
            className="w-full border-b border-orange-400 bg-transparent py-2 text-lg focus:outline-none placeholder-white"
          />
          <div className="text-right mt-2">
            <button className="text-orange-400 text-lg">✈</button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-center items-center px-4 md:px-10 py-4 border-t border-gray-700 mt-10">
        <div className="text-lg">
          Copyright© 2025 Made with <FaHeart className="inline text-red-500" /> By Untitled By Winner
        </div>
        <a
          href="#top"
          className="fixed bottom-6 right-6  shadow-lg z-50  bg-yellow-500 hover:bg-yellow-600 p-2 rounded"
        >
          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 3l6 6H4l6-6z" />
          </svg>
        </a>
      </div>

      {/* WhatsApp */}
      <a
        href="https://wa.me/919636260524"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 p-3 rounded-full shadow-lg z-50"
      >
        <FaWhatsapp className="text-white text-2xl" />
      </a>
    </footer>
  );
};

export default Footer;
