"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ContactSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section
        className="pt-20 min-h-screen w-100 py-1 bg-white"
        style={{
          backgroundImage: "url('/assets/contact_us.png')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div
          className="text-white max-w-7xl md:px-12 text-center"
          style={{
            backdropFilter: "brightness(0.5)",
            maxHeight: "100%",
            maxWidth: "100%",
            width: "100%",
            height: "100%",
            padding: "2rem"
          }}
        >
          <div className="w-100 m-0 p-10">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <p className="mb-8">
              Send us a message and we’ll respond as soon as possible
            </p>
          </div>
          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form action="#" method="POST" className="space-y-6">
              <div className="flex flex-col">
                <label
                  htmlFor="name"
                  className="text-left text-2xl font-bold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-gray-300 rounded-md  text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className="text-left text-2xl font-bold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded-md  text-black p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-left text-2xl font-bold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="border border-gray-300 rounded-md p-3  text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white font-bold px-6 py-3 rounded-md hover:bg-red-700 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

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

export default ContactSection;
