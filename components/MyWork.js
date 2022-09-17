import React from "react";
import { IoIosJet } from "react-icons/io";

function MyWork() {
  return (
    <div className="w-full h-screen bg-[#00d7bb]">
      <div className="w-full h-[100px] bg-[#22252c] ">
      <h2  className='font-bold text-5xl text-[#00d7bb] text-center'>MY WORK</h2>
      </div>

      <div class="grid grid-cols-3 gap-3  px-[500px] py-11">
        <div class=" group h-[295px] w-[295px] rounded-md bg-cyan-400 flex flex-col justify-evenly  hover:bg-white">
          <div className=" flex space-x-2 items-center justify-center ">
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          </div>
          <div className="ml-8 opacity-0 group-hover:opacity-100">
            <h2 className="text-1xl text-black font-bold">BRANADING DESIGN</h2>
            <p className="text-1xl text-[#00d7bb]">LOGO DESIGN</p>
          </div>
        </div>

        <div class=" group h-[295px] w-[295px] rounded-md bg-cyan-400 flex flex-col justify-evenly  hover:bg-white">
          <div className=" flex space-x-2 items-center justify-center ">
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          </div>
          <div className="ml-8 opacity-0 group-hover:opacity-100">
            <h2 className="text-1xl text-black font-bold">BRANADING DESIGN</h2>
            <p className="text-1xl text-[#00d7bb]">LOGO DESIGN</p>
          </div>
        </div>
        <div class=" group h-[295px] w-[295px] rounded-md bg-cyan-400 flex flex-col justify-evenly  hover:bg-white">
          <div className=" flex space-x-2 items-center justify-center ">
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          </div>
          <div className="ml-8 opacity-0 group-hover:opacity-100">
            <h2 className="text-1xl text-black font-bold">BRANADING DESIGN</h2>
            <p className="text-1xl text-[#00d7bb]">LOGO DESIGN</p>
          </div>
        </div>
        <div class=" group h-[295px] w-[295px] rounded-md bg-cyan-400 flex flex-col justify-evenly  hover:bg-white">
          <div className=" flex space-x-2 items-center justify-center ">
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          </div>
          <div className="ml-8 opacity-0 group-hover:opacity-100">
            <h2 className="text-1xl text-black font-bold">BRANADING DESIGN</h2>
            <p className="text-1xl text-[#00d7bb]">LOGO DESIGN</p>
          </div>
        </div>
        <div class=" group h-[295px] w-[295px] rounded-md bg-cyan-400 flex flex-col justify-evenly  hover:bg-white">
          <div className=" flex space-x-2 items-center justify-center ">
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          </div>
          <div className="ml-8 opacity-0 group-hover:opacity-100">
            <h2 className="text-1xl text-black font-bold">BRANADING DESIGN</h2>
            <p className="text-1xl text-[#00d7bb]">LOGO DESIGN</p>
          </div>
        </div>
        <div class=" group h-[295px] w-[295px] rounded-md bg-cyan-400 flex flex-col justify-evenly  hover:bg-white">
          <div className=" flex space-x-2 items-center justify-center ">
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          <div className=" group opacity-0 h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center group-hover:opacity-100 ">
            <IoIosJet />
          </div>
          </div>
          <div className="ml-8 opacity-0 group-hover:opacity-100">
            <h2 className="text-1xl text-black font-bold">BRANADING DESIGN</h2>
            <p className="text-1xl text-[#00d7bb]">LOGO DESIGN</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-10">
        <button className="h-[60px] w-[160px] bg-black text-white">
          Load More
        </button>
      </div>
    </div>
  );
}

export default MyWork;
