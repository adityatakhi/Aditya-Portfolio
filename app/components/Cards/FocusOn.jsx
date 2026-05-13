import React from 'react'
import { RiGeminiFill } from "react-icons/ri";


const FocusOn = () => {
    return (
        <div>
            <div className="focus w-[15vw] h-[17vw] bg-white rounded-2xl p-5 shadow-lg shadow-orange-100">
                <div className="gemini w-[2vw] h-[2vw] bg-white rounded-full shadow-md flex items-center justify-center mb-5">
                    <RiGeminiFill size={25}/>
                </div>
                <p className='text-[1vw] text-gray-500 mb-2'>Focused on</p>
                <h1 className='text-[1.3vw] font-semibold'>Building Impactful Solutions</h1>
                <div className="image h-[15vw]">
                    <img className='h-[35%] w-full' src="https://cdn.prod.website-files.com/69692c932cda8af835db14e1/6989fcc216afc2f9582d7c07_cta-desktop-img.svg" alt="graph" />
                </div>
            </div>
        </div>
    )
}

export default FocusOn