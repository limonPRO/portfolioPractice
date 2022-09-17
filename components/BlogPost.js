import Image from "next/image";
import React from "react";
import CardImage from "../image/bg.jpg";
import {MdKeyboardArrowRight} from 'react-icons/md'

function BlogPost() {
  return (
    <div className="w-full h-screen  bg-[#22252c] ">
      <div className="">

        <h1 className="text-5xl text-center text-[#00d7bb] font-bold pt-10 ">BLOG POSTS</h1>
      </div>
        
          <div className=" flex items-center justify-center space-x-3 pt-11">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                className="w-full"
                src={CardImage}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-[#00d7bb]">Montu is Going to Breakup with Tuntuni</div>
                <p className="font-medium text-white">18, March, 2017 | 33 Comments</p>
                <p className="text-white text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="pt-4">

                <button className="h-[60px] w-[160px] bg-[#00d7bb] text-white flex items-center justify-center"><p>Read More</p><MdKeyboardArrowRight size={20} className=""/></button>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                className="w-full"
                src={CardImage}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-[#00d7bb]">Montu is Going to Breakup with Tuntuni</div>
                <p className="font-medium text-white">18, March, 2017 | 33 Comments</p>
                <p className="text-white text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="pt-4">

                <button className="h-[60px] w-[160px] bg-[#00d7bb] text-white flex items-center justify-center"><p>Read More</p><MdKeyboardArrowRight size={20} className=""/></button>
                </div>
              </div>
            </div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
              <Image
                className="w-full"
                src={CardImage}
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-[#00d7bb]">Montu is Going to Breakup with Tuntuni</div>
                <p className="font-medium text-white">18, March, 2017 | 33 Comments</p>
                <p className="text-white text-base ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
                <div className="pt-4">

                <button className="h-[60px] w-[160px] bg-[#00d7bb] text-white flex items-center justify-center"><p>Read More</p><MdKeyboardArrowRight size={20} className=""/></button>
                </div>
              </div>
            </div>
           
        </div>
        <div className="flex items-center justify-center pt-20">
            <button className="h-[60px] w-[160px] bg-[#25e0c7] text-white font-bold flex items-center justify-center hover:text-black hover:bg-gradient-to-r from-[#17d396] to-[#07f7f7]"><p>Load More</p><MdKeyboardArrowRight size={30} className=""/></button>
            </div>
      </div>
    
  );
}

export default BlogPost;
