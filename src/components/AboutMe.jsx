import React from 'react';
import aboutMe from "../assets/images/about-pic.png"
import experience from "../assets/images/experience.png"
import education from "../assets/images/education.png"
const AboutMe = () => {
    return (
        <section className='py-14 px-4 md:mx-14 lg:mx-20' id='aboutme'>
            <div className='flex  flex-col justify-center items-center gap-2'>
                <p className='text-md text-gray-500'>Get To Know More</p>
                <h2 className='text-lg md:text-3xl lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-10'>About Me</h2>
            </div>
            <div>
                <div className='flex flex-col md:flex-row lg:flex-row justify-center items-center gap-6 py-4'>
                    <img src={aboutMe} className=' w-[250px] md:w-[350px] lg:[w-400px] rounded-3xl ' alt="" />
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <div className='flex flex-col md:flex-row lg:flex-row justify-center md:justify-between lg:justify-between items-center  gap-4'>
                            <div className='border-2 rounded-3xl px-10 py-6 flex flex-col justify-center items-center'>
                                <img className='w-[30px] mb-2' src={experience} alt="" />
                                <div className='text-center'>
                                    <h3 className='text-xl font-bold'>Experience</h3>
                                    <p className='text-md text-gray-400 font-semibold'>2+ years</p>
                                    <p className='text-md text-gray-400 font-semibold'>Frontend Development</p>
                                </div>
                            </div>
                            <div className='border-2 rounded-3xl  px-10  py-6 flex flex-col justify-center items-center'>
                                <img className='w-[30px] mb-2' src={education} alt="" />
                                <div className='text-center'>
                                    <h3 className='text-xl font-bold'>Education</h3>
                                    <p className='text-md text-gray-400'>B.Sc. Bachelors Degree</p>
                                    <p className='text-md text-gray-400'>M.Sc. Masters Degree</p>
                                </div>
                            </div>
                        </div>
                        <p className='text-gray-400 text-justify'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis reprehenderit et laborum, rem, dolore eum quod voluptate exercitationem nobis, nihil esse debitis maxime facere minus sint delectus velit in eos quo officiis explicabo deleniti dignissimos. Eligendi illum libero dolorum cum laboriosam corrupti quidem, reiciendis ea magnam? Nulla, impedit fuga!
                        </p>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default AboutMe;