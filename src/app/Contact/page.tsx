import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Header/>
    <div className="flex flex-col md:flex-row min-h-screen p-20">
      {/* Left Section */}
      <div className="bg-gray-100 w-full md:w-1/3 p-6 md:p-12 space-y-6">
        {/* Address */}
        <div >
          <h3 className="font-semibold text-lg mb-2">Address</h3>
          <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
        </div>
        {/* Phone */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Phone</h3>
          <p className="text-gray-600">Mobile: +(84) 546-6789</p>
          <p className="text-gray-600">Hotline: +(84) 456-6789</p>
        </div>
        {/* Working Time */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Working Time</h3>
          <p className="text-gray-600">Monday–Friday: 9:00 - 22:00</p>
          <p className="text-gray-600">Saturday–Sunday: 9:00 - 21:00</p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white p-6 md:p-12">
        <h2 className="text-2xl font-bold mb-6">Get In Touch With Us</h2>
        <p className="text-gray-600 mb-8">
          For more information about our product & services, please feel free to drop us an email.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-2">Your name</label>
            <input
              type="text"
              placeholder="Abc"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#007580]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Email address</label>
            <input
              type="email"
              placeholder="youremail.com"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#007580]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Subject</label>
            <input
              type="text"
              placeholder="This is an optional"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#007580]"
            />
          </div>
          <div>
            <label className="block text-gray-600 mb-2">Message</label>
            <textarea
              placeholder="Hi! I'd like to ask about..."
              rows={4}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#007580]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Contact;
