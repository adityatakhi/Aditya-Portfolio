"use client"

import React, { useRef } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md"

// GSAP
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const Navbar = () => {

    const navRef = useRef(null)

    useGSAP(() => {

        // entry animation
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        })

        // hide/show on scroll
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
            className="w-full flex justify-center mt-6 fixed top-0 left-0 z-[999] px-4 sm:px-6"
        >

            <div className="max-w-7xl w-full backdrop-blur-md bg-white/80 rounded-2xl px-5 py-3 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-0 shadow-md shadow-orange-50 border border-white/40">

                {/* LOGO */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-semibold tracking-tight">
                        AK<span className="text-orange-500">.</span>
                    </span>
                </div>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">

                    <a href="#" className="hover:text-black transition duration-300 hover:-translate-y-[1px]">
                        Home
                    </a>

                    <a href="#" className="hover:text-black transition duration-300 hover:-translate-y-[1px]">
                        About
                    </a>

                    <a href="#" className="hover:text-black transition duration-300 hover:-translate-y-[1px]">
                        Skills
                    </a>

                    <a href="#" className="hover:text-black transition duration-300 hover:-translate-y-[1px]">
                        Projects
                    </a>

                    <a href="#" className="hover:text-black transition duration-300 hover:-translate-y-[1px]">
                        Experience
                    </a>

                    <a href="#" className="hover:text-black transition duration-300 hover:-translate-y-[1px]">
                        Contact
                    </a>

                </div>

                {/* CTA */}
                <button className="group bg-[#111827] text-white px-5 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-all duration-300 flex items-center gap-2">

                    Let’s Connect

                    <MdOutlineArrowOutward
                        size={20}
                        className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />

                </button>

            </div>

        </div>
    )
}

export default Navbar