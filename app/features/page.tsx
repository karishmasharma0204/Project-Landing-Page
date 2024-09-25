"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FeatureProps {
  imageSrc: string;
  title: string;
  description: string;
}

const features = [
  {
    imageSrc: "/assets/Timer.png",
    title: "Timeable Entry",
    description:
      "Easily create flexible timetable for conducting classes in a planned manner."
  },
  {
    imageSrc: "/assets/rupees.png",
    title: "Fee Management",
    description:
      "Smart fee management module. Multiple fee reports class and student wise."
  },
  {
    imageSrc: "/assets/student_record.png",
    title: "Student Records",
    description:
      "Get instant access to student’s details with an easy search option."
  }
];

const FeatureCard: React.FC<FeatureProps> = ({
  imageSrc,
  title,
  description
}) => {
  return (
    <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg flex flex-col items-center text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-red-400 to-blue-400 hover:text-white">
      <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mb-6">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          width={40}
          height={40}
        />
      </div>

      <h3 className="text-black text-2xl font-semibold mb-4 group-hover:text-white">
        {title}
      </h3>
      <p className="text-gray-600 group-hover:text-gray-100">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="min-h-screen py-16 bg-gradient-to-b from-gray-100 to-red-300">
        <h2 className="pt-20 text-5xl font-bold mb-16 text-center text-gray-800 animate-slide-in">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
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

export default FeatureSection;
