"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="sticky top-0 w-full z-10 bg-black">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 mt-1">
        {/* Logo */}
        <div className="text-white flex items-center">
          <Image
            src="/assets/logo-white.png"
            alt="Kriscent Logo"
            className="h-15"
            width={200}
            height={200}
          />
        </div>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {/* Hamburger icon */}
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
              <span className="block w-8 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Features", path: "/features" },
            { name: "Testimonials", path: "/testimonials" },
            { name: "Pricing", path: "/pricing" },
            { name: "Contact", path: "/contact" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-white hover:text-gray-300 font-bold text-xl"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center space-y-4 py-4">
          {[
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Features", path: "/features" },
            { name: "Testimonials", path: "/testimonials" },
            { name: "Pricing", path: "/pricing" },
            { name: "Contact", path: "/contact" }
          ].map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className="text-white hover:text-gray-300 font-bold text-lg"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

const HeroSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="pt-40 min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
        {/* Left Section */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 text-black">
            Edumaster - Complete Education Management Software
          </h1>
          <p className="text-black mb-6">
            More effective way to manage teaching or non-teaching staff details
            and view/edit them quickly when needed. Schools/institutes can add
            and manage all staff details and control their access permission
            for the software.
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-red-500 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2">
          <Image
            src="/assets/kriscent-2.png"
            alt="Product"
            className="w-full h-auto object-cover rounded-md shadow-lg"
            width={400}
            height={200}
          />
        </div>
      </section>
    </>
  );
};

export default HeroSection;
