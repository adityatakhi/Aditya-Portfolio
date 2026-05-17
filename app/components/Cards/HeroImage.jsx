import React from 'react'
import Image from 'next/image'

const HeroImage = () => {

    return (

        <div className="relative w-[360px] h-[520px] 2xl:w-[400px] 2xl:h-[580px] border-[3px] border-white rounded-[2rem] overflow-hidden shadow-lg shadow-orange-50 bg-[#F6EFE7]">

            <Image
                src="/images/hero.png"
                alt="Hero"
                fill
                priority
                className="object-cover"
            />

        </div>

    )
}

export default HeroImage