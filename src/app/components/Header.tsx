import React from 'react'
import Image from 'next/image';
import { BsCart4 } from "react-icons/bs";
import Link from 'next/link';


function Header() {
  return (
    
    <header className="border-b bg-gray-50  ">
    {/* Top Bar */}
    <div className="bg-[#272343] text-white text-sm flex items-center justify-between  md:px-20  py-1                ">
      <p>✔ Free Shipping On All Orders Over $50</p>
      <div className="flex space-x-4">
        <button className="hover:underline">Eng</button>
        <button className="hover:underline">FAQs</button>
        <button className="hover:underline">Need Help</button>
      </div>
    </div>

    {/* Main Navbar */}
    <div className="flex items-center justify-between  bg-slate-200 py-4 md:px-20 ">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <Image
        src={"/image/Logo Icon.png"}
        alt={"logo image"}
        width={25}
        height={30}
        />
        <h1 className="text-xl font-semibold text-gray-800">Comfoty</h1>
      </div>

      {/* Cart*/}
      
    

     
      
        <button className="flex items-center text-[#007580]">
          
        <BsCart4 />
          
          <span className="ml-1">Cart</span>
        </button>
      </div>

      
      {/*  Nav Bar and Contact Number*/}
    

    <div className="flex items-center  text-center gap-[800px] px-20 py-4   space-x-6 ">
      <div className='flex text-center'> 
        <nav className="hidden md:flex space-x-8          text-center              ">
         
      <Link href="/" className="text-[#007580]">Home</Link>
      <Link href="/shop" className="hover:text-[#007580]">Shop</Link>
      <Link href="/Product" className="hover:text-[#007580]">Product</Link>
      <Link href="/Contact" className="hover:text-[#007580]">Contact</Link>
      <a href="/About" className="hover:text-[#007580]">About</a>
        
        </nav></div>
    
        <div><p className="hidden md:block text-gray-700">Contact: (808) 555-0111</p></div>
        
        
        
        </div>




  </header>
);
};

export default Header
