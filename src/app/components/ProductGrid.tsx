import React from 'react';
import Image from 'next/image';


type ProductProps = {
  title: string;
  price: string;
  imgSrc: string;
  badge?: string; 
  oldPrice?: string;
};

const ProductCard: React.FC<ProductProps> = ({ title, price, imgSrc, badge, oldPrice }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden px-14 container mx-auto">
      <div className="relative ">
        <Image src={imgSrc} alt={title} width={200} height={300} className='h-[300px] w-[300px]'/>
        {badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
              badge === 'New' ? 'bg-green-500' : 'bg-orange-500'
            }`}
          >
            {badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-gray-700 font-semibold text-sm">{title}</h3>
        <div className="flex items-center space-x-2 mt-2">
          <span className="text-gray-800 font-bold">${price}</span>
          {oldPrice && <span className="line-through text-gray-500 text-sm">${oldPrice}</span>}
        </div>
      </div>
    </div>
  );
};

const ProductGrid: React.FC = () => {
  const products = [
    { title: 'Library Stool Chair', price: '20', imgSrc: '/image/chair 1.jpg', badge: 'New' },
    { title: 'Library Stool Chair', price: '20', oldPrice: '30', imgSrc: '/image/chair 2.jpg', badge: 'Sales' },
    { title: 'Library Stool Chair', price: '20', imgSrc: '/image/chair 3.jpg' },
    { title: 'Library Stool Chair', price: '20', imgSrc: '/image/chair.png' },
    { title: 'Library Stool Chair', price: '20', badge: 'New', imgSrc: '/image/Image (1).png' },
    { title: 'Library Stool Chair', price: '20', oldPrice: '30', badge: 'Sales', imgSrc: '/image/Image (2).png' },
    { title: 'Library Stool Chair', price: '20', imgSrc: '/image/Image (3).png' },
    { title: 'Library Stool Chair', price: '20', imgSrc: '/image/Image (4).png' },
  ];

  return (
    <section className="py-8 px-4 bg-gray-50">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
