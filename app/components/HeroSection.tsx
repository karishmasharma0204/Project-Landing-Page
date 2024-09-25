import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-16 bg-white">
      {/* Left Section */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Edumaster - Complete Education Management Software
        </h1>
        <p className="text-black mb-6">
          More effective way to manage teaching or non-teaching staff details
          and view/edit them quickly when needed. Schools/institutes can add and
          manage all staff details and control their access permission
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
  );
};

export default HeroSection;
