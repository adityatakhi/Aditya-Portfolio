"use client"

import React, { useRef, useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md"
import { HiOutlineMenuAlt3 } from "react-icons/hi"
import { IoClose } from "react-icons/io5"

// GSAP
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Navbar = () => {

    const navRef = useRef(null)

    const [menuOpen, setMenuOpen] = useState(false)

    useGSAP(() => {

        // ENTRY
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })

        // SCROLL HIDE/SHOW
        ScrollTrigger.create({
            start: "top -80",

            onUpdate: (self) => {

                if (self.direction === 1) {

                    gsap.to(navRef.current, {
                        y: -120,
                        duration: 0.4,
                        ease: "power2.out",
                    })

                } else {

                    gsap.to(navRef.current, {
                        y: 0,
                        duration: 0.4,
                        ease: "power2.out",
                    })

                }

            }
        })

    })

    return (

        <div
            ref={navRef}
            className="w-full flex justify-center fixed top-4 left-0 z-[999] px-7 sm:px-7"
        >

            <div className="max-w-7xl w-full backdrop-blur-md bg-white/80 rounded-2xl px-5 py-3 shadow-md shadow-orange-50 border border-white/40">

                {/* TOP BAR */}
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-2">

                        <span className="text-xl font-semibold tracking-tight">
                            AK<span className="text-orange-500">.</span>
                        </span>

                    </div>

                    {/* DESKTOP NAV */}
                    <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

                        <a href="#" className="hover:text-black transition duration-300">
                            Home
                        </a>

                        <a href="#" className="hover:text-black transition duration-300">
                            About
                        </a>

                        <a href="#" className="hover:text-black transition duration-300">
                            Skills
                        </a>

                        <a href="#" className="hover:text-black transition duration-300">
                            Projects
                        </a>

                        <a href="#" className="hover:text-black transition duration-300">
                            Experience
                        </a>

                        <a href="#" className="hover:text-black transition duration-300">
                            Contact
                        </a>

                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-3">

                        {/* CTA */}
                        <button className="hidden sm:flex group bg-[#111827] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 items-center gap-2">

                            Let’s Connect

                            <MdOutlineArrowOutward
                                size={20}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                            />

                        </button>

                        {/* MOBILE MENU */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden w-11 h-11 rounded-xl bg-[#111827] text-white flex items-center justify-center"
                        >

                            {
                                menuOpen
                                    ? <IoClose size={24} />
                                    : <HiOutlineMenuAlt3 size={24} />
                            }

                        </button>

                    </div>

                </div>

                {/* MOBILE MENU */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ${menuOpen ? "max-h-[400px] opacity-100 mt-5" : "max-h-0 opacity-0"}`}>

                    <div className="flex flex-col gap-4 text-sm font-medium text-gray-700 pb-2">

                        <a href="#">
                            Home
                        </a>

                        <a href="#">
                            About
                        </a>

                        <a href="#">
                            Skills
                        </a>

                        <a href="#">
                            Projects
                        </a>

                        <a href="#">
                            Experience
                        </a>

                        <a href="#">
                            Contact
                        </a>

                        <button className="mt-2 group bg-[#111827] text-white px-5 py-3 rounded-xl text-sm font-medium flex items-center justify-center gap-2">

                            Let’s Connect

                            <MdOutlineArrowOutward
                                size={20}
                                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                            />

                        </button>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default Navbar