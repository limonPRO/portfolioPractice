import React from 'react'
import bgimage from '../image/bg.jpg'
function Main() {
  const backgroundImage = {
    backgroundImage: `url("${bgimage}")`,
    backgroundSize: "cover",
    opacity: 0.9,
  };
  return (
    <div className='w-full h-screen bg-[#00d7bb]  flex items-center '>
       <div className='px-12'>
        <h1 className='text-4xl text-white'>Hello</h1>
        <h1 className='text-4xl text-white'>I am Md. Limon Shah</h1>
        <p className='text-2xl text-white'>software developer</p>
       </div>
    </div>
  )
}

export default Main