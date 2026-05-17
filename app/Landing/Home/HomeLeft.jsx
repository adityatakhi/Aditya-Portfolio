import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md"
import { MdOutlineArrowOutward } from "react-icons/md"

import {
    FaLinkedin,
    FaInstagram,
    FaTelegram,
    FaGithub,
    FaEnvelope
} from "react-icons/fa"

import { GoDotFill } from "react-icons/go"

const HomeLeft = () => {

    return (

        <div className='w-full lg:max-w-[45%]'>

            <div className="left h-full py-8 sm:py-10 px-5 sm:px-6 lg:px-0">

                {/* STATUS */}
                <div className="highlight inline-flex h-10 px-4 text-sm items-center justify-center shadow-lg shadow-orange-50 mb-6 rounded-xl bg-white">

                    <GoDotFill
                        size={18}
                        color='green'
                    />

                    <p className='ml-2 whitespace-nowrap'>
                        Available for opportunities
                    </p>

                </div>

                {/* NAME */}
                <h1 className='text-[3rem] sm:text-6xl lg:text-7xl leading-[0.95] font-bold mb-4 text-[#0B132B]'>

                    Aditya kumar

                </h1>

                {/* TITLE */}
                <h1 className='font-semibold text-xl sm:text-2xl lg:text-3xl mb-5 leading-tight text-[#111827]'>

                    Full Stack Developer

                    <span className='text-orange-200 px-2'>
                        |
                    </span>

                    Data Science

                    <span className='text-orange-200 px-2'>
                        |
                    </span>

                    <br className='hidden sm:block' />

                    Machine Learning

                </h1>

                {/* DESCRIPTION */}
                <p className='text-gray-500 mb-7 max-w-xl text-sm sm:text-base leading-relaxed'>

                    I build fast, scalable and user-focused digital experiences using modern technologies and data-driven solutions.

                </p>

                {/* BUTTONS */}
                <div className="imp-btns flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">

                    <button className='h-14 w-full sm:w-44 bg-black rounded-xl text-white flex items-center justify-center gap-3 shadow-lg shadow-orange-100 px-4 hover:scale-[1.02] transition-all duration-300'>

                        <span>
                            Projects
                        </span>

                        <MdOutlineArrowOutward size={20} />

                    </button>

                    <button className='h-14 w-full sm:w-44 bg-black rounded-xl text-white flex items-center justify-center gap-3 shadow-lg shadow-orange-100 px-4 hover:scale-[1.02] transition-all duration-300'>

                        <span>
                            Download
                        </span>

                        <MdOutlineFileDownload size={23} />

                    </button>

                </div>

                {/* SOCIALS */}
                <div className="accounts w-full">

                    <p className='text-gray-500 mb-4 text-sm sm:text-base'>
                        Connect with me
                    </p>

                    <div className="icons flex flex-wrap gap-3">

                        <a
                            href='https://www.instagram.com/aditya_takhi/'
                            target='_blank'
                            className='h-12 w-12 rounded-full shadow-lg bg-white shadow-orange-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
                        >
                            <FaInstagram size={20} />
                        </a>

                        <a
                            href='https://t.me/aditya_takhi'
                            target='_blank'
                            className='h-12 w-12 rounded-full shadow-lg bg-white shadow-orange-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
                        >
                            <FaTelegram size={20} />
                        </a>

                        <a
                            href='https://www.linkedin.com/in/aditya-kumar-7a6764378/'
                            target='_blank'
                            className='h-12 w-12 rounded-full shadow-lg bg-white shadow-orange-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
                        >
                            <FaLinkedin size={20} />
                        </a>

                        <a
                            href='https://github.com/adityatakhi'
                            target='_blank'
                            className='h-12 w-12 rounded-full shadow-lg bg-white shadow-orange-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href='mailto:kumaraditya01@gmail.com'
                            className='h-12 w-12 rounded-full shadow-lg bg-white shadow-orange-50 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300'
                        >
                            <FaEnvelope size={20} />
                        </a>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default HomeLeft