import React from 'react'
import { FaCode } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";


const CurrentlyExploring = () => {
    return (
        <div>
            <div className="exploring w-[17vw] h-[17vw] p-3 bg-white/95 rounded-2xl shadow-lg shadow-orange-100">
                <p className='text-[1vw] text-gray-500 mb-2.5'>Currently Exploring</p>
                <div className="fields flex flex-col gap-3">
                    <div className="flex items-center gap-3 border-b border-gray-300 p-2">
                        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                            <FaCode className="text-white text-lg" />
                        </div>
                        <span className="text-[1vw] font-medium">Full Stack Development</span>
                    </div>

                    <div className="flex items-center gap-3 border-b border-gray-300 p-2">
                        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                            <FaDatabase className="text-white" />
                        </div>
                        <span className="text-[1vw] font-medium">Data Analytics</span>
                    </div>

                    <div className="flex items-center gap-3 border-b border-gray-300 p-2">
                        <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center shrink-0">
                            <LuBrain className="text-white text-lg" />
                        </div>
                        <span className="text-[1vw] font-medium">AI / Machine Learning</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CurrentlyExploring