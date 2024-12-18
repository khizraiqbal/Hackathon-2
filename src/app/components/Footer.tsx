import React from 'react'
import Image from 'next/image'
import { FaFacebook } from "react-icons/fa";
import { GrTwitter } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { MdLocalParking } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";


function Footer() {
  return (
    <footer className="bg-gray-50 border-t py-10  md:px-20  ">
      <div className="container mx-auto px-6 md:px-12 ">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
            <Image
                    src={"/image/Logo Icon.png"}
                    alt={"logo image"}
                    width={25}
                    height={30}
                    />
              <h2 className="text-xl font-semibold text-gray-800">Comfoty</h2>
            </div>
            <p className="text-gray-600 text-sm">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
            </p>
            <div className="flex space-x-4 mt-6 ">
            <FaFacebook />
            <GrTwitter />
            <FaInstagram />
            <MdLocalParking />
            <FaYoutube />



            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Category</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-[#007580]">Sofa</a></li>
              <li><a href="#" className="hover:text-[#007580]">Armchair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Wing Chair</a></li>
              <li><a href="#" className="text-[#007580] underline">Desk Chair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Wooden Chair</a></li>
              <li><a href="#" className="hover:text-[#007580]">Park Bench</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Support</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-[#007580]">Help & Support</a></li>
              <li><a href="#" className="hover:text-[#007580]">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-[#007580]">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#007580]">Help</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-gray-800 font-medium mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#007580]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#007580] text-white rounded-md hover:bg-[#007580]"
              >
                Subscribe
              </button>
            </form>
            <p className="text-gray-600 text-sm mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8  text-gray-600 text-sm flex gap-[800px]  text-center">
          
          <p>
            © 2021 - Blogy - Designed & Developed by <span className="font-medium text-[#007580]">Zakirsoft</span>
          </p>
          <div className="md:flex justify-center space-x-4 mt-4 hidden ">
          <Image
                    src={"/image/Group 13.png"}
                    alt={"card payment image"}
                    width={150}
                    height={40}
                  
                    />
          </div>
        </div>
      </div>
    </footer>



  )
}

export default Footer