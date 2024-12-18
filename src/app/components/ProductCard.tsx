import React from 'react';
import Image from 'next/image';

type ProductCardProps = {
  title: string;
  price: string;
  imgSrc: string;
  badge?: string;
  originalPrice?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  imgSrc,
  badge,
  originalPrice,
}) => {
  return (
    <div className="relative p-4 bg-white shadow-md rounded-lg">
      {badge && (
        <span
        className={`absolute top-2 left-2 px-2 py-1 text-xs font-bold text-white rounded ${
          badge === 'New' ? 'bg-green-500' : 'bg-orange-500'
        }`}
      >
        {badge}
      </span>
      )}
      <Image src={imgSrc} alt={title} width={400} height={400} />
      <h3 className="mt-3 text-gray-800 font-medium">{title}</h3>
      <div className="flex items-center space-x-2 mt-1">
        <span className="text-lg font-bold">${price}</span>
        {originalPrice && (
          <span className="line-through text-sm text-gray-400">${originalPrice}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
