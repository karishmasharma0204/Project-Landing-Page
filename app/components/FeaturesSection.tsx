import React from "react";
import Image from "next/image";

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
    <div className="bg-white  border border-gray-200 p-6 rounded-lg shadow-md flex flex-col items-center text-center transform transition duration-500 hover:scale-105">
      <div className="w-16 h-16 bg-red-600  rounded-full flex items-center justify-center mb-4">
        <Image
          src={imageSrc}
          alt={title}
          className="object-cover"
          width={35}
          height={35}
        />
      </div>

      <h3 className="text-black text-xl font-semibold mb-2">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-black text-3xl font-bold mb-12">Why Choose Us?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              imageSrc={feature.imageSrc}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
