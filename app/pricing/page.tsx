"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PricingPlanProps {
  title: string;
  price: string;
  features: string[];
}

const pricingPlans = [
  {
    title: "Basic Plan",
    price: "$19/month",
    features: [
      "10 product listings",
      "Community access",
      "Access to core features",
      "Basic customer support"
    ]
  },
  {
    title: "Pro Plan",
    price: "$49/month",
    features: [
      "Everything in Basic Plan",
      "Advanced analytics",
      "50 product listings",
      "Priority customer support"
    ]
  },
  {
    title: "Enterprise Plan",
    price: "$99/month",
    features: [
      "Unlimited product listings",
      "Custom features and integrations",
      "24/7 premium support",
      "Priority customer support"
    ]
  }
];

const PricingCard: React.FC<PricingPlanProps> = ({
  title,
  price,
  features
}) => {
  return (
    <div className="relative bg-gradient-to-r from-white via-gray-100 to-gray-50 p-6 rounded-2xl shadow-xl border-t-4 border-red-600 flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
      <div className="absolute top-[-1.5rem] bg-red-600 w-12 h-12 rounded-full flex items-center justify-center shadow-md">
        <span className="text-white text-lg font-bold">{title[0]}</span>
      </div>
      <h3 className="text-black text-xl font-semibold mt-6 mb-2">{title}</h3>
      <p className="text-black text-lg font-bold mb-4">{price}</p>
      <ul className="text-black list-disc list-inside mb-6 space-y-2">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        Get Started
      </button>
    </div>
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

const PricingPlanSection: React.FC = () => {
  return (
    <>
      <Navbar />
      <section className="pt-20 py-16 bg-gray-50">
        <div className="pt-40 max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-black text-3xl font-bold mb-12">
            Choose Your Plan
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                features={plan.features}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingPlanSection;
