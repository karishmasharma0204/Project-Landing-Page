"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    name: "Emily R.",
    content:
      "Amazing service! The shopping experience was smooth, and the products exceeded my expectations. Will definitely shop again!"
  },
  {
    name: "James L",
    content:
      "Fast delivery and top-quality products. The website is easy to navigate, making my purchases quick and hassle-free!"
  },
  {
    name: "Sarah K",
    content:
      "Excellent customer support and great selection. I found exactly what I was looking for, and it arrived in perfect condition!"
  }
];

const TestimonialCard = ({
  name,
  content
}: {
  name: string;
  content: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transform transition duration-500 hover:scale-105">
      <p className="text-black mb-4">{content}</p>
      <h3 className="text-black text-lg font-italic italic ml-28">{name}</h3>
    </div>
  );
};

const Testimonial = () => {
  return (
    <>
      <Navbar />
      <section className="py-60 min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center ">
          <h2 className="text-3xl font-bold mb-12">
            <span className="text-white">Our </span>
            <span className="text-red-600">Testimonials</span>
          </h2>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                content={testimonial.content}
              />
            ))}
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

export default Testimonial;
