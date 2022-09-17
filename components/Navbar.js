import React from "react";
import Link from "next/link";
import {
  FaDribbble,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

function Navbar() {
  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#00d7bb]  ">
      <div className="flex items-center justify-between px-8 py-8 ">
        <div className="flex space-x-4 items-center ">
          <div className="flex">
            <p>limon</p>
          </div>
          <div className="flex">
            <FaDribbble />
          </div>
          <div className="flex">
            <FaFacebookF />
          </div>
          <div className="flex">
            <FaTwitter />
          </div>
          <div className="flex">
            <FaLinkedinIn />
          </div>
        </div>
        <div>
          <RiMenu3Line />
        </div>
      </div>
      {/* <div className=''>
        <div className="fixed left-0 top-0 w-full bg-black/70 ease-in duration-500 h-screen flex flex-col items-center justify-center text-white text-2xl py-4 font-bold">
          <Link href=''> Home</Link>
          <Link href=''>About</Link>
          <Link href=''>Education</Link>
          <Link href=''>Portfolio</Link>
          <Link href=''>Single Portfolio</Link>
          <Link href=''>Testimonials</Link>
          <Link href=''>Blog</Link>
          <Link href=''>Single Blog</Link>
          <Link href=''>Contact Me</Link>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
