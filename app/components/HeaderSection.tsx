"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <section
        className="relative text-white fade-in bg-opacity-10"
        style={{
          backgroundImage: "url('/assets/kriscent_image.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "70vh",
          overflow: "hidden"
        }}
      >
        <div
          className="absolute inset-0 bg-black bg-opacity-50"
          style={{
            backdropFilter: "brightness(0.5)",
            maxHeight: "100%",
            height: "100%",
            padding: "2rem"
          }}
        >
          <nav className="sticky top-0 w-full z-10">
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

              {/* Hamburger menu icon for mobile */}
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

              {/* Navigation Links - Hidden on mobile, shown on larger screens */}
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

            {/* Mobile Menu - Shown when the hamburger menu is clicked */}
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
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </nav>

          {/* Title and Subtitle */}
          <div
            className="w-full text-center"
            style={{
              marginTop: "6rem"
            }}
          >
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-white font-semibold text-5xl relative z-10 mb-4">
                Edumaster
              </h1>
              <span className="text-white text-lg relative z-10 m-6">
                Quality in a service or product is not what you put into it. It
                is what the customer gets out of it.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeaderSection;
