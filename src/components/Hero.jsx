import React from 'react';
import profileAvatar from '../assets/images/profile-pic.png'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Hero = () => {
    return (
        <div className='py-14 flex flex-col md:flex-row lg:flex-row justify-center items-center gap-14'>
            <img src={profileAvatar} className='w-[150px] md:w-[350px] lg:w-[350px]' alt="" />
            <div className='flex flex-col justify-center items-center gap-4'>
                <span className='text-xl text-gray-400 font-bold'>Hello, I'm</span>
                <h1 className='text-5xl font-bold'>John Doe</h1>
                <p className='text-3xl font-semibold text-gray-400'>Frontend Developer</p>
                <div className=' flex flex-col gap-4 md:flex-row lg:flex-row justify-center items-center '>
                    <button className='px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-400  hover:text-white '>Download CV</button>
                    <button className='px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-400  hover:text-white '>Contact Info</button>
                </div>
                <div className='flex justify-start items-center gap-4 py-2'>
                    <FaGithub className='text-3xl' />
                    <FaLinkedinIn className='text-3xl' />
                </div>
            </div>
        </div>
    );
};

export default Hero;