import React from 'react';
import Image from 'next/image';

type CategoryCardProps = {
  title: string;
  imgSrc: string;
  productsCount: number;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
   imgSrc,
  productsCount,
}) => {
  return (
    <div className="relative rounded-lg overflow-hidden">
      <Image src={imgSrc} alt={title} width={500} height={400}/>
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4">
        <h3 className="text-white font-semibold">{title}</h3>
        <span className="text-gray-300 text-sm">{productsCount} Products</span>
      </div>
    </div>
  );
};

export default CategoryCard;
