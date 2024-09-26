import React from "react";

const ContactSection = () => {
  return (
    <section
      className="w-100 py-1 bg-white"
      style={{
        backgroundImage: "url('/assets/contact_us.png')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div
        className="text-white max-w-7xl  md:px-12 text-center"
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
                className="border border-gray-300 rounded-md p-3 text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="border border-gray-300 rounded-md p-3  text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  );
};

export default ContactSection;
