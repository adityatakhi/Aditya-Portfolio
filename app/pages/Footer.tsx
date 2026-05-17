"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"
import { IoArrowUp } from "react-icons/io5"

const Footer = () => {

  const marqueeRef = useRef(null)

  useGSAP(() => {

    gsap.to(marqueeRef.current, {
      x: "-50%",
      duration: 20,
      ease: "none",
      repeat: -1,
    })

  })

  return (
    <footer className="w-full px-5 sm:px-8 md:px-14 pt-20 md:pt-24 pb-8 overflow-hidden bg-[#FDFCF9]">

      {/* top border */}
      <div className="w-full h-[1px] bg-[#E8DED2] mb-14 md:mb-16" />

      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-14 lg:gap-10">

        {/* LEFT */}
        <div className="w-full lg:max-w-[60%]">

          <p className="text-[11px] sm:text-[12px] tracking-[0.35em] uppercase text-[#9A938B] mb-5">
            Current Direction
          </p>

          <h1 className="text-[2.4rem] sm:text-5xl md:text-6xl leading-[0.95] font-semibold tracking-tight text-[#0B132B]">

            Building things that feel simple,
            useful and quietly different.

          </h1>

        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-8">

          {/* SOCIALS */}
          <div className="flex items-center flex-wrap gap-3 sm:gap-4">

            <a
              href="https://www.instagram.com/aditya_takhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/aditya-kumar-7a6764378/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="https://github.com/adityatakhi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://t.me/aditya_takhi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaTelegramPlane size={17} />
            </a>

            <a
              href="mailto:kumaraditya01@gmail.com"
              className="w-11 h-11 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <MdEmail size={17} />
            </a>

          </div>

          {/* BACK TO TOP */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-3 px-4 py-2.5 rounded-full border border-[#E6DDD2] hover:bg-[#0B132B] transition-all duration-300"
          >

            <span className="text-sm text-[#0B132B] group-hover:text-white transition-all duration-300 whitespace-nowrap">
              Back to top
            </span>

            <div className="w-8 h-8 rounded-full bg-[#0B132B] group-hover:bg-white flex items-center justify-center transition-all duration-300">

              <IoArrowUp
                size={15}
                className="text-white group-hover:text-[#0B132B] transition-all duration-300"
              />

            </div>

          </button>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-16 md:mt-20 pt-7 border-t border-[#ECE4D9] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 overflow-hidden">

        {/* IDENTITY */}
        <div className="flex items-center gap-3 shrink-0">

          <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white flex items-center justify-center text-sm font-medium shrink-0">
            AK<span className="text-orange-300">.</span>
          </div>

          <div>

            <h3 className="text-[#0B132B] text-sm font-medium">
              Aditya Kumar
            </h3>

            <p className="text-xs text-[#8C847B]">
              Evolving through curiosity.
            </p>

          </div>

        </div>

        {/* MARQUEE */}
        <div className="w-full overflow-hidden">

          <div
            ref={marqueeRef}
            className="flex w-max"
          >

            {[...Array(2)].map((_, i) => (

              <div
                key={i}
                className="flex items-center gap-6 sm:gap-8 pr-8 text-xs sm:text-sm text-[#8C847B] whitespace-nowrap"
              >

                <span>
                  Not chasing a fixed identity
                </span>

                <span>•</span>

                <span>
                  Still exploring
                </span>

                <span>•</span>

                <span>
                  Building slowly
                </span>

                <span>•</span>

                <span>
                  Learning in public
                </span>

                <span>•</span>

                <span>
                  Quietly experimenting
                </span>

                <span>•</span>

              </div>

            ))}

          </div>

        </div>

      </div>

    </footer>
  )
}

export default Footer