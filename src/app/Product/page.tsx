import React from "react";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  imageUrl: string;
  isNew?: boolean;
  isOnSale?: boolean;
};

const products: Product[] = [
  {
    id: 1,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: undefined,
    imageUrl: "/image/chair 1.jpg",
    isNew: true,
  },
  {
    id: 2,
    name: "Library Stool Chair",
    price: 20,
    oldPrice: 30,
    imageUrl: "/image/chair 2.jpg",
    isOnSale: true,
  },
  {
    id: 3,
    name: "Library Stool Chair",
    price: 30,
    imageUrl: "/image/chair 3.jpg",
  },
  {
    id: 4,
    name: "Library Stool Chair",
    price: 10,
    imageUrl: "/image/chair 4.jpg",
  },
  {
    id: 5,
    name: "Library Stool Chair",
    price: 50,
    imageUrl: "/image/chair.png",
  },{
    id: 6,
    name: "Library Stool Chair",
    price: 90,
    imageUrl: "/image/Image (1).png",
  },{
    id: 7,
    name: "Library Stool Chair",
    price: 60,
    imageUrl: "/image/Image (4).png",
  },{
    id: 8,
    name: "Library Stool Chair",
    price: 30,
    imageUrl: "/image/Img.png",
  },
];

const Product = () => {
  return (
    <div>
        <Header/>
    <div className="max-w-7xl mx-auto md:p-4">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="grid grid-cols-1  md:grid-cols-4  gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow rounded-lg p-4">
            <div className="relative">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={400}
                height={400}
                className="w-80 h-72"
                
              />
              {product.isNew && (
                <span className="absolute top-2 left-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                  New
                </span>
              )}
              {product.isOnSale && (
                <span className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Sale
                </span>
              )}
            </div>
            <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
            <div className="mt-2 flex items-center">
              <span className="text-xl font-bold">${product.price}</span>
              {product.oldPrice && (
                <span className="ml-2 text-gray-500 line-through">${product.oldPrice}</span>
              )}
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Product;
