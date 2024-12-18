import React from 'react';
import Image from 'next/image';


type StyleCardProps = {
  imgSrc: string;
  alt: string;
  large?: boolean;
};

const StyleCard: React.FC<StyleCardProps> = ({ imgSrc, alt, large }) => {
  return (
    <div
      className={`${
        large
          ? 'col-span-4 row-span-2   '
          : 'md:h-[300px] '
      } overflow-hidden rounded-lg shadow-md`}
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={800}
        height={600}
        
      
      />
    </div>
  );
};

const PopularStyles: React.FC = () => {
  return (
    <section className="py-8  bg-white p-24 ">
      <h2 className="text-[15px] font text-gray-800  md:hidden left-0 mb-6 underline">
              EXPLORE NEW AND POPULAR STYLES
            </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-1 gap-2 items-stretch">
        {/* Large Image */}
        
        <div className="relative col-span-2 row-span-2 ">
          <StyleCard imgSrc="/image/chair 1.jpg" alt="Orange Chair" large />
          <div className="md:absolute md:-translate-x-2/4 md:top-1/2 md:transform md:-translate-y-2/3 md:-rotate-90 ">
            <h2 className="hidden md:block text-2xl font text-gray-800  -mt-10 ">
              EXPLORE NEW AND POPULAR STYLES
            </h2>
          </div>
        </div>

        {/* Smaller Grid Images */}
        <StyleCard imgSrc="/image/chair 2.jpg" alt="White Armchair" />
        <StyleCard imgSrc="/image/chair 3.jpg" alt=" grey  Chair" />
        <StyleCard imgSrc="/image/Image (4).png" alt="Wooden Chair" />
        <StyleCard imgSrc="/image/Image (1).png" alt="Classic White Chair" />
      </div>
    </section>
  );
};

export default PopularStyles;
