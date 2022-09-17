import React from 'react'
import {
    FaDribbble,
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
  } from "react-icons/fa";

function Contact() {
  return (
    
<div  className="w-full h-screen  bg-[#22252c] ">
    
  <header>
        <h1></h1>
  </header>
  <div className='flex flex-col items-center justify-center '>
  <div className='grid grid-cols-2 gap-2'>
  <div class="relative">
    <input type="text" id="username" className=" bg-[#22252c] w-[500px] border-b py-1 focus:outline-none focus:border-[#00d7bb] focus:border-b-2 transition-colors peer" autocomplete="off"/>
    <label for="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#00d7bb] transition-all">Username</label>
  </div>
  <div class="relative">
    <input type="text" id="username" className=" bg-[#22252c] w-[500px]  border-b py-1 focus:outline-none focus:border-[#00d7bb] focus:border-b-2 transition-colors peer" autocomplete="off"/>
    <label for="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#00d7bb] transition-all">Email</label>
  </div>
  </div>
  <div class="relative mt-6 ">
    <input type="text" id="username" className=" bg-[#22252c] w-[1000px] h-[300px] border-b py-1 focus:outline-none focus:border-[#00d7bb] focus:border-b-2 transition-colors peer" autocomplete="off"/>
    <label for="username" className="absolute left-0 top-1 text-gray-600 cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-[#00d7bb] transition-all">Message</label>
  </div>
  <div className='pt-11'>
  <button className="h-[60px] w-[250px] border border-[#00d7bb]  text-[#00d7bb] text-2xl text-bold ">SEND MESSAGE</button>
  </div>

  </div>
  <div className='flex items-center justify-center pt-[200px] space-x-4'>
  <div className=" h-16 w-16 border-0 bg-[#313741] rounded-full flex items-center justify-center ">
               <p className='text-[#00d7bb]'>limon</p>
            </div>
            <div className=" h-16 w-16 border-0 bg-[#313741] rounded-full flex items-center justify-center ">
               <FaDribbble className='text-[#00d7bb]'/>
            </div>
            <div className=" h-16 w-16 border-0 bg-[#313741] rounded-full flex items-center justify-center ">
              <FaFacebookF className='text-[#00d7bb]'/>
            </div>
            <div className=" h-16 w-16 border-0 bg-[#313741] rounded-full flex items-center justify-center ">
               <FaTwitter className='text-[#00d7bb]'/>
            </div>
            <div className=" h-16 w-16 border-0 bg-[#313741] rounded-full flex items-center justify-center ">
               <FaLinkedinIn className='text-[#00d7bb]'/>
            </div>
           
  </div>
  <div>
  <hr class=" mt-[120px] border border-[#313741] w-[1000px] mx-auto" />
  </div>
 
  <div className='flex items-center justify-center mt-9'>
    <p className='text-[#00d7bb]'> Limon © 2022. ALL RIGHTS RESERVED.</p>
  </div>

</div>
  )
}

export default Contact