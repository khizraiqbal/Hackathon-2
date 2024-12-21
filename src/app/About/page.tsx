import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const About = () => {
  return (
    <div>
        <Header/>
    <div className="max-w-7xl mx-auto p-6">
      {/* About Us Section */}
      <section className="grid grid-cols-1 md:grid-cols-2  mb-16">
        {/* Text Content */}
        <div className="bg-teal-700 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">About Us - Comforty</h2>
          <p className="mb-6">
            At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality.
          </p>
          <button className="bg-teal-900 text-white py-2 px-4 rounded hover:bg-teal-800">
            View collection
          </button>
        </div>
        {/* Image */}
        <div className="flex justify-center items-center">
          <Image
            src="/image/chair 2.jpg"
            alt="Chair"
            width={300}
            height={200}
            className="rounded-lg shadow-lg w-80 h-96"
          />
        </div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-12">What Makes Our Brand Different</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-teal-700 text-3xl mb-4">🚚</div>
            <h3 className="text-lg font-semibold mb-2">Next day as standard</h3>
            <p>Order before 3pm and get your order the next day as standard.</p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-teal-700 text-3xl mb-4">🎨</div>
            <h3 className="text-lg font-semibold mb-2">Made by true artisans</h3>
            <p>Handmade crafted goods made with real passion and craftsmanship.</p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-teal-700 text-3xl mb-4">💰</div>
            <h3 className="text-lg font-semibold mb-2">Unbeatable prices</h3>
            <p>For our materials and quality, you wont find better prices anywhere.</p>
          </div>
          {/* Feature 4 */}
          <div className="bg-gray-100 p-6 rounded-lg text-center">
            <div className="text-teal-700 text-3xl mb-4">♻️</div>
            <h3 className="text-lg font-semibold mb-2">Recycled packaging</h3>
            <p>We use 100% recycled to ensure our footprint is more manageable.</p>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
    </div>
  );
};

export default About;
