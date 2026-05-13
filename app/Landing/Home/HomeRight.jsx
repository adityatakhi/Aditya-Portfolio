import React from 'react'
import Exploring from '../../components/Cards/CurrentlyExploring'
import Techs from '../../components/Cards/Technologies'
import Focus from '../../components/Cards/FocusOn'
import HeroImage from '../../components/Cards/HeroImage'

const HomeRight = () => {
    return (
        <div className="right w-1/2 h-full flex items-center justify-center py7 px-5 relative">
            <div className="focus absolute left-3 top-3">
                <Focus />
            </div>
            <HeroImage />
            <div className="focus absolute left-5 bottom-10">
                <Exploring />
            </div>
            <div className="image absolute right-[8vw] top-[10vw]">
                <div className="logo w-[7vw] h-[7vw] bg-white flex items-center justify-center rounded-full overflow-hidden shadow-lg shadow-orange-50 bg-cover">
                    <h1 className='text-[2vw]'>AK<span className='text-orange-500'>.</span></h1>
                </div>
            </div>
            <div className="focus absolute right-15 bottom-8">
                <Techs />
            </div>
        </div>
    )
}

export default HomeRight