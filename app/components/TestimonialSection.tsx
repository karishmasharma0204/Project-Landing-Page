import React from "react";

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
    <section className="py-16 bg-black">
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
  );
};

export default Testimonial;
