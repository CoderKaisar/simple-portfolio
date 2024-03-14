import React from 'react';

const Navbar = () => {
    return (
        <section className='flex justify-between py-6 px-8'>
            <h2 className='text-md font-semibold md:text-xl lg:text-3xl'>John Doe</h2>
            <div>
                <ul className='flex flex-col md:flex-row justify-center items-center gap-4'>
                    <li><a href="#aboutme">About</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </section>
    );
};

export default Navbar;