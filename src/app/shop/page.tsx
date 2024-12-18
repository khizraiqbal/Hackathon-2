import React from 'react';
import Image from 'next/image';
import Footer from '../components/Footer';
import Header from '../components/Header';

type ProductProps = {
  title: string;
  price: string;
  imgSrc: string;
};

const ProductPage: React.FC = () => {
  const featuredProducts = [
    { title: 'Library Stool Chair', price: '$99', imgSrc: '/image/Img.png' },
    { title: 'Library Stool Chair', price: '$99', imgSrc: '/image/chair 1.jpg' },
    { title: 'Library Stool Chair', price: '$99', imgSrc: '/image/Image (3).png' },
    { title: 'Library Stool Chair', price: '$99', imgSrc: '/image/Image (4).png' },
    { title: 'Library Stool Chair', price: '$99', imgSrc: '/image/Image.png' },
  ];

  return (
    <div>
        <Header/>
    <div className="container mx-auto px-24 py-4">
      {/* Product Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* Product Image */}
        <div>
          <Image
            src="/image/Image (1).png"
            alt="Library Stool Chair"
            width={600}
            height={400}
            className=""
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Library Stool Chair</h1>
          <span className="text-green-600 text-lg font-semibold mb-4">$20.00 USD</span>
          <p className="text-gray-600 mb-6 flex justify-left text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>
          <button className="bg-teal-500 text-white px-6 py-2 rounded hover:bg-teal-600 flex items-center space-x-2 w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h18l-2 13H5L3 3zm5 16a2 2 0 11.001-4.001A2 2 0 018 19zm9 0a2 2 0 11.001-4.001A2 2 0 0117 19z"
              />
            </svg>
            <span>Add To Cart</span>
          </button>
        </div>
      </div>

      {/* Featured Products */}
      <div className="mt-12">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <a href="#" className="text-sm text-gray-600 hover:underline font-semibold">
            View all
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5  gap-6">
          {featuredProducts.map((product, index) => (
            <div key={index} className="text-center bg-white rounded-lg shadow-sm overflow-hidden">
              <Image
                src={product.imgSrc}
                alt={product.title}
                width={600}
                height={600}
                className="md:w-full md:h-40  md:object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm text-gray-700">{product.title}</h3>
                <span className="text-gray-900 font-semibold mt-2">{product.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ProductPage;
