import React from 'react'
/* eslint-disable @next/next/no-img-element */

const Technologies = () => {
    return (
        <div>
            <div className="tech w-[17vw] h-[15vw] bg-white/90 p-7 rounded-2xl shadow-lg shadow-orange-100">
                <p className='text-md text-gray-500 mb-5'>Currently Exploring</p>
                <div className="images flex flex-wrap items-center justify-center gap-8">
                <img className='w-[2.5vw] rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/960px-React-icon.svg.png" alt="tech" />
                <img className='w-[2.5vw] rounded' src="https://www.svgrepo.com/show/354112/nextjs.svg" alt="tech" />
                <img className='w-[2.5vw] rounded' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTc9pc2a5676fRF2Vy5CpHOXnRU8BVdNhiA&s" alt="tech" />
                <img className='w-[2.5vw] rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png" alt="tech" />
                <img className='w-[2.5vw] rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1280px-Postgresql_elephant.svg.png" alt="tech" />
                <img className='w-[2.5vw] rounded' src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png" alt="tech" />
                </div>
            </div>
        </div>
    )
}

export default Technologies