import React from 'react'
import Exploring from '../../components/Cards/CurrentlyExploring'
import Techs from '../../components/Cards/Technologies'
import Focus from '../../components/Cards/FocusOn'
import HeroImage from '../../components/Cards/HeroImage'

const HomeRight = () => {

    return (

        <div className="right hidden min-[900px]:flex w-[45%] min-h-162.5 items-center justify-center">

            {/* IMAGE */}
            <div className="relative z-10 mb-20">
                <HeroImage />
            </div>

            {/* TOP CARD */}
            <div className="absolute left-200 top-25 z-20">

                <Focus />

            </div>

            {/* LEFT BOTTOM */}
            <div className="absolute left-180 bottom-30 z-20">

                <Exploring />

            </div>

            {/* LOGO */}
            <div className="absolute right-30 top-80 z-30">

                <div className="w-15 h-15 bg-white rounded-full flex items-center justify-center shadow-lg shadow-orange-50">

                    <h1 className='text-2xl'>
                        AK<span className='text-orange-500'>.</span>
                    </h1>

                </div>

            </div>

            {/* RIGHT BOTTOM */}
            <div className="absolute right-20 bottom-30 z-20">

                <Techs />

            </div>

        </div>

    )
}

export default HomeRight