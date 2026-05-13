import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaLinkedin, FaInstagram, FaTelegram, FaGithub, FaEnvelope } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const HomeLeft = () => {
    return (
        <div className='w-full lg:max-w-[45%]'>
            <div className="left h-full py-10 px-6 lg:px-0">
                <div className="highlight inline-flex h-10 px-4 text-sm items-center justify-center shadow-xl shadow-orange-50 mb-5 rounded-lg">
                    <GoDotFill size={20} color='green' />
                    <p className='ml-2'>Available for opportunities</p>
                </div>
                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold mb-3'>Aditya kumar</h1>
                <h1 className='font-semibold text-xl sm:text-2xl lg:text-3xl mb-3 leading-tight'>Full Stack Developer <span className='text-orange-200'>|</span> Data Science <span className='text-orange-200'>|</span> <br />Machine Learning</h1>
                <p className='text-gray-500 mb-5 max-w-xl'>I build fast, scalable and user-focused digital experiences using modern technologies and data-driven solutions.</p>
                <div className="imp-btns flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
                    <button className='h-14 w-full sm:w-44 bg-black rounded-xl text-white flex items-center justify-center gap-3 shadow-lg shadow-orange-100 px-4'>
                        <span>Projects</span>
                        <MdOutlineArrowOutward size={20} />
                    </button>
                    <button className='h-14 w-full sm:w-44 bg-black rounded-xl text-white flex items-center justify-center gap-3 shadow-lg shadow-orange-100 px-4'>
                        <span>Download</span>
                        <MdOutlineFileDownload size={23} />
                    </button>
                </div>
                <div className="accounts w-full p-4">
                    <p className='text-gray-500 mb-2.5'>Connect with me</p>
                    <div className="icons grid grid-cols-5 sm:flex sm:flex-row gap-3">
                        <a href='https://www.instagram.com/aditya_takhi/' className='h-12 w-12 rounded-full shadow-xl bg-white shadow-orange-50 flex items-center justify-center'><FaInstagram size={22} /></a>
                        <a href='https://t.me/aditya_takhi' className='h-12 w-12 rounded-full shadow-xl bg-white shadow-orange-50 flex items-center justify-center'><FaTelegram size={22} /></a>
                        <a href='https://www.linkedin.com/in/aditya-kumar-7a6764378/' className='h-12 w-12 rounded-full shadow-xl bg-white shadow-orange-50 flex items-center justify-center'><FaLinkedin size={22} /></a>
                        <a href='https://github.com/adityatakhi' className='h-12 w-12 rounded-full shadow-xl bg-white shadow-orange-50 flex items-center justify-center'><FaGithub size={22} /></a>
                        <a href='mailto:kuamraditya01@gmail.com' className='h-12 w-12 rounded-full shadow-xl bg-white shadow-orange-50 flex items-center justify-center'><FaEnvelope size={22} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeLeft