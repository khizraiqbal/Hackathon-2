import Image from 'next/image'
import React from 'react'
import ProductCard from './ProductCard'
import CategoryCard from './CategoryCard'


function Hero() {
  return (
    <section>
    
    <div className='bg-gray-200 py-24 rounded-md    flex justify-center items-center md:mx-32  md:size-10/12  '>
      <div className="container mx-auto px-6 md:px-20 flex flex-col-reverse md:flex-row  items-center       ">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h5 className="text-2xl uppercase tracking-wide text-gray-500 mb-2 mt-6">
            Welcome to Chairy
          </h5>
          <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-6 ">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md inline-flex items-center">
            Shop Now
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
          <Image
            src="/image/Product Image.png" 
            alt="Furniture Chair"
            width={400}
            height={400}
          />
          
        </div>
      </div>
      </div>

      {/* Partner Logos */}
      <div className="container mx-auto mt-10 px-6 md:px-20">
        <div className="flex flex-wrap justify-center md:gap-16  gap-3  ">
          <Image src="/image/Logo.png" alt="Zapier" width={50} height={60}/>
          <Image src="/image/Logo (1).png" alt="Pipedrive" width={50} height={60}/>
          <Image src="/image/Logo (2).png" alt="CIB Bank" width={50} height={60}/>
          <Image src="/image/Logo (3).png" alt="Zap" width={50} height={60}/>
          <Image src="/image/Logo (4).png" alt="Burnt Toast"width={50} height={60}/>
          <Image src="/image/Logo (5).png" alt="PandaDoc" width={50} height={60}/>
          <Image src="/image/Logo (6).png" alt="MOZ" width={50} height={60}/>
        </div>
      </div>



       {/* Featured Products Section */}
       <section className="py-8 px-4 md:px-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <ProductCard
            title="Library Stool Chair"
            price="20"
            imgSrc="/image/Image.png"
            badge="New"
          />
          <ProductCard
            title="Library Stool Chair"
            price="20"
            originalPrice="30"
            imgSrc="/image/Image (1).png"
            badge="Sales"
          />
          <ProductCard
            title="Library Stool Chair"
            price="20"
            imgSrc="/image/Image (2).png"
          />
          <ProductCard
            title="Library Stool Chair"
            price="20"
            imgSrc="/image/Image (3).png"
          />
        </div>
      </section>

      {/* Top Categories Section */}
      <section className="py-8 px-4 bg-white md:px-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Top Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <CategoryCard
            title="Wing Chair"
            imgSrc="/image/Category.png"
            productsCount={3584}
          />
          <CategoryCard
            title="Wooden Chair"
            imgSrc="/image/Image (4).png"
            productsCount={157}
          />
          <CategoryCard
            title="Desk Chair"
            imgSrc="/image/Image (5).png"
            productsCount={154}
          />
        </div>
      </section>

      


    </section>
  )
}

export default Hero