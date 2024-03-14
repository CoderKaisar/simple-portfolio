import React from 'react';
import project1 from "../assets/images/project-1.png"
import project2 from "../assets/images/project-2.png"
import project3 from "../assets/images/project-3.png"

const Projects = () => {
    return (
        <section id='projects' >
            <div className='flex flex-col justify-center items-center gap-2'>
                <span className='text-lg text-gray-400'>Browse My Recent</span>
                <h2 className='text-6xl font-bold '>Projects</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center gap-6 px-2 md:px-14 lg:px-14 py-20'>
                <div className='border-2 p-6 rounded-2xl flex flex-col justify-center items-center gap-4'>
                    <img src={project1} className='h-64 rounded-3xl' alt="" />
                    <h3 className='text-2xl font-bold text-center'>Project One</h3>
                    <div className='flex gap-6'>
                        <button className='border px-6 border-gray-400 py-2 rounded-full hover:bg-gray-500 hover:text-white'>GitHub</button>
                        <button className='border px-6  border-gray-400 py-2 rounded-full hover:bg-gray-500 hover:text-white'>Live Demo</button>
                    </div>
                </div>
                <div className='border-2 p-6 rounded-2xl flex flex-col justify-center items-center gap-4'>
                    <img src={project2} className='h-64 rounded-3xl' alt="" />
                    <h3 className='text-2xl font-bold text-center'>Project Two</h3>
                    <div className='flex gap-6'>
                        <button className='border px-6 border-gray-400 py-2 rounded-full hover:bg-gray-500 hover:text-white'>GitHub</button>
                        <button className='border px-6  border-gray-400 py-2 rounded-full hover:bg-gray-500 hover:text-white'>Live Demo</button>
                    </div>
                </div>
                <div className='border-2 p-6 rounded-2xl flex flex-col justify-center items-center gap-4'>
                    <img src={project3} className='h-64 rounded-3xl' alt="" />
                    <h3 className='text-2xl font-bold text-center'>Project Three</h3>
                    <div className='flex gap-6'>
                        <button className='border px-6 border-gray-400 py-2 rounded-full hover:bg-gray-500 hover:text-white'>GitHub</button>
                        <button className='border px-6  border-gray-400 py-2 rounded-full hover:bg-gray-500 hover:text-white'>Live Demo</button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default Projects;