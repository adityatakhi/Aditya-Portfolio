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
    <footer className="w-full px-6 md:px-14 pt-24 pb-10 overflow-hidden bg-[#FDFCF9]">

      {/* top border */}
      <div className="w-full h-[1px] bg-[#E8DED2] mb-16" />

      {/* top section */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-16">

        {/* left */}
        <div>

          <p className="text-[12px] tracking-[0.35em] uppercase text-[#9A938B] mb-6">
            Current Direction
          </p>

          <h1 className="text-4xl md:text-6xl leading-[1] font-semibold tracking-tight text-[#0B132B] max-w-[700px]">
            Building things that feel simple,
            useful and quietly different.
          </h1>

        </div>

        {/* right */}
        <div className="flex flex-col items-start lg:items-end gap-8">

          {/* socials */}
          <div className="flex items-center flex-wrap gap-4">

            {/* Instagram */}
            <a
              href="https://www.instagram.com/aditya_takhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaInstagram size={18} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/aditya-kumar-7a6764378/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/adityatakhi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/aditya_takhi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <FaTelegramPlane size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:kumaraditya01@gmail.com"
              className="w-12 h-12 rounded-full border border-[#E6DDD2] flex items-center justify-center hover:bg-[#0B132B] hover:text-white transition-all duration-300"
            >
              <MdEmail size={18} />
            </a>

          </div>

          {/* back to top */}
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="group flex items-center gap-4 px-5 py-3 rounded-full border border-[#E6DDD2] hover:bg-[#0B132B] transition-all duration-300"
          >

            <span className="text-sm text-[#0B132B] group-hover:text-white transition-all duration-300">
              Back to top
            </span>

            <div className="w-8 h-8 rounded-full bg-[#0B132B] group-hover:bg-white flex items-center justify-center transition-all duration-300">

              <IoArrowUp
                size={16}
                className="text-white group-hover:text-[#0B132B] transition-all duration-300"
              />

            </div>

          </button>

        </div>

      </div>

      {/* bottom section */}
      <div className="mt-20 pt-8 border-t border-[#ECE4D9] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">

        {/* identity */}
        <div className="flex items-center gap-3 shrink-0">

          <div className="w-10 h-10 rounded-full bg-[#0B132B] text-white flex items-center justify-center text-sm font-medium">
            AK <span className="text-orange-300">.</span>
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

        {/* marquee */}
        <div className="w-full overflow-hidden">

          <div
            ref={marqueeRef}
            className="flex w-max"
          >

            {[...Array(2)].map((_, i) => (

              <div
                key={i}
                className="flex items-center gap-8 pr-8 text-sm text-[#8C847B] whitespace-nowrap"
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