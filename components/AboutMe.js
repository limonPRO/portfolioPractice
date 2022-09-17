import Image from "next/image";
import React from "react";
import {ImPencil} from "react-icons/im";
import { FaCloudDownloadAlt,FaCoffee } from "react-icons/fa";
import {IoAirplane } from 'react-icons/io5'
import {GiPencilBrush} from 'react-icons/gi'
import {IoIosJet} from "react-icons/io"
import {ImMusic} from 'react-icons/im'
import SquareSVG from "../image/SquareA.svg";
import Square from "../image/square.svg";
import profile from "../image/profile.jpg";


function AboutMe() {
  return (
    <div className="w-full h-screen bg-grey-500">
      <div className="flex  justify-around items-center">
        <div className=" flex flex-col">
          <div className="  mt-6 ">
            <div className="absolute ml-6 ">
              <Image className="flex " src={Square} width={500} height={500} />
            </div>
            <div className="mt-6">
              <Image className="" src={profile} width={500} height={500} />
            </div>
          </div>
          <div className="">
            <button className=" h-[50px] w-[200px] bg-red-500 flex items-center justify-center space-x-2">
              <FaCloudDownloadAlt className="text-white" />
              <p className="font-bold text-white">Download resume</p>
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-3xl">About Me</h2>
          <p className="w-[400px]">
            Hello! I’m Limon Shah Experienced with all stages of the development
            cycle for dynamic web projects. Having an in-depth knowledge
            including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS.
            Strong background in management and leadership
          </p>
          <p>
          
            <span>NAME:</span> Oliver Queen
          </p>
          <p className="">
          
            <span className="font-bold">DATE OF BIRTH:</span> 14 February 1986
          </p>
          <p className="">
            <span className="font-bold">NATIONALITY: </span> Citizen Of Envato
          </p>
          <p className="">
            <span className="font-bold">ADDRESS:</span> 23 High Hope Blvd., Some
            City, Some Country
          </p>
          <p className="">
            <span className="font-bold">PHONE:</span> (123) - 456-7890, (123) -
            456-7890
          </p>
          <p className="">
            <span className="font-bold">E-MAIL:</span> oliver.queen@yahoo.com
          </p>
        </div>
      </div>
      <div className="flex justify-center flex-col space-y-2 mt-[200px] ">
        <div className="flex items-center justify-center ml-[-228px]">
            <h2 className="text-2xl ">My Interest</h2>
        </div>
        <div className="flex items-center justify-center space-x-3">
            <div className=" h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center ">
                <ImPencil className=""/>
            </div>
            <div className=" h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center ">
               <IoAirplane/>
            </div>
            <div className=" h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center ">
                <ImMusic/>
            </div>
            <div className=" h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center ">
                <FaCoffee/>
            </div>
            <div className=" h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center ">
                <IoIosJet/>
            </div>
            <div className=" h-12 w-12 border-2 border-blue-500 rounded-full flex items-center justify-center ">
                <GiPencilBrush/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
