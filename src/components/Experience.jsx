import React from 'react';
import checkmark from '../assets/images/checkmark.png'
const Experience = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className='text-center py-8' id='experience'>
                <span className='text-lg text-gray-400'>Explore My</span>
                <h1 className='text-5xl font-semibold mb-8'>Experience</h1>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 mx-4 md:mx-20 lg:mx-20 mb-2 md:mb-14'>
                <div className=' border-2 rounded-2xl p-2 md:p-8 lg:p-8'>
                    <h2 className='text-center py-2 text-2xl font-semibold text-gray-400 mb-6'>Frontend Development</h2>
                    <div className='grid grid-cols-2 gap-2 md:gap-8 gap-x-2 justify-items-center md:gap-x-16 w-[300px] h-[250px] md:w-[380px] content-start '>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>HTML</h2>
                                <p className='text-sm'>Experienced</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>CSS</h2>
                                <p className='text-sm'>Experienced</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>SASS</h2>
                                <p className='text-sm'>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>Javascript</h2>
                                <p className='text-sm'>Basic</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>TypeScript</h2>
                                <p className='text-sm'>Basic</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>Material UI</h2>
                                <p className='text-sm'>Intermediate</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' border-2 rounded-2xl p-2 md:p-8 lg:p-8'>
                    <h2 className='text-center py-2 text-2xl font-semibold text-gray-400 mb-6'>Backend Development</h2>
                    <div className='grid grid-cols-2 gap-8 md:gap-x-16 gap-x-2 h-[250px] w-[300px] md:w-[380px]  content-start '>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>PostgreSQL</h2>
                                <p className='text-sm'>Basic</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>Node JS</h2>
                                <p className='text-sm'>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>Express JS</h2>
                                <p className='text-sm'>Intermediate</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <img src={checkmark} className='w-8' alt="" />
                            <div>
                                <h2 className='mb-0 font-bold text-xl'>Git</h2>
                                <p className='text-sm'>Intermediate</p>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        </div>
    );
};

export default Experience;