import React from 'react';
import email from "../assets/images/email.png"
import linkedin from "../assets/images/linkedin.png"

const ContactMe = () => {
    return (
        <div className='mb-20' id='contact'>
            <div className='text-center'>
                <span className='text-gray-400 text-xl'>Get in Touch</span>
                <h2 className='text-5xl font-bold mb-10 py-2'>Contact Me</h2>
            </div>
            <div className='flex justify-center items-center'>

                <div className='flex justify-center items-center border w-[450px] border-gray-100 py-8 px-10 rounded-3xl'>
                    <img src={email} className='w-8' alt="" />
                    <button className='hover:text-gray-500 text-2xl hover:border-b px-2'>Example@gmail.com</button>
                    <img src={linkedin} className='w-8' alt="" />
                    <button className='hover:text-gray-500 text-2xl hover:border-b px-2'>LinkedIn</button>

                </div>
            </div>
        </div>
    );
};

export default ContactMe;