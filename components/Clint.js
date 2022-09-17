import Image from 'next/image'
import React from 'react'
import Profile from '../image/profile.jpg'
import {HiCursorClick} from 'react-icons/hi'
 
function Clint() {
  return (
    <div className="w-full h-screen bg-[#313741] ">
    
            <header className='text-center py-20'>
           <h1 className='text-6xl font-bold text-[#00d7bb]'>Clint Testimonial</h1>
            </header>
            <div className='flex flex-col'>
            
                <div className='flex flex-col items-center justify-center'>
                    <Image className=' rounded-full' src={Profile} width={100} height={100}/>
                    <h2 className='font-bold text-[#00d7bb] py-4'>Alex farguson</h2>
                    <p className='text-white italic'> " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here "</p>
                    <span className='text-white '> as opposed to using 'Content here, content here</span>

                </div>
                <div className='w-full h-[200px]  bg-[#00d7bb] mt-[320px] flex items-center justify-center'>
                    <div className='flex'>
                        <HiCursorClick className='mx-4' size={40} />
                        <div>
                        <p className='text-5xl font-bold'>HIRE ME FOR YOUR AWESOME PROJECT</p>
                        <p className='text-center'>I am available for Freelance projects that depends on your project value.</p>
                        <p className='text-center'> Hire me and get your project done!</p>
                        </div>
                        
                    </div>
                    <div className='px-4 pb-4'>
                    <button className="h-[60px] w-[190px] bg-black text-[#00d7bb] text-2xl text-bold">HIRE ME</button>
                    </div>
                 </div>
            </div>
           
            
            
    </div>
  )
}

export default Clint