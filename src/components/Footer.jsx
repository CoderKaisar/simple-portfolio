import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='flex gap-6 justify-center items-center'>
                <button className='text-2xl hover:text-gray-400 hover:border-b pb-2'>About</button>
                <button className='text-2xl hover:text-gray-400 hover:border-b pb-2'>Experience</button>
                <button className='text-2xl hover:text-gray-400 hover:border-b pb-2'>Projects</button>
                <button className='text-2xl hover:text-gray-400 hover:border-b pb-2'>Contact</button>
            </div>
            <p className='text-lg text-gray-400 py-2 text-center mb-6'>Copywrite@2023 John Doe. All Right Reserved.</p>
        </div>
    );
};

export default Footer;