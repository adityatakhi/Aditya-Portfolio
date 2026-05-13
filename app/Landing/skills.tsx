"use client"

import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Skills = () => {

    const sliderRef = useRef(null)

    const images = [

        // Frontend
        "https://cdn.iconscout.com/icon/free/png-256/free-html-5-icon-svg-download-png-1175208.png?f=webp&w=128",
        "https://cdn.iconscout.com/icon/free/png-256/free-css-icon-svg-download-png-722685.png?f=webp",
        "https://cdn.iconscout.com/icon/free/png-256/free-javascript-logo-icon-svg-download-png-3029998.png",
        "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/png/nextjs.png",
        "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        "https://avatars.githubusercontent.com/u/2386673?v=4", // GSAP
        "https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion.webp",
        "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
        "https://cdn.iconscout.com/icon/free/png-256/free-typescript-icon-svg-download-png-1175078.png",
    
        // Backend
        "https://cdn.iconscout.com/icon/free/png-256/free-node-js-icon-svg-download-png-1174935.png",
        "https://user-images.githubusercontent.com/11978772/40430986-a0eb7b92-5e63-11e8-80eb-43fe07f664a6.png",
        "https://webimages.mongodb.com/_com_assets/cms/kuyjf3vea2hg34taa-horizontal_default_slate_blue.svg",
        "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-icon-svg-download-png-1175120.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
    
        // Python / Data
        "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg",
        "https://seaborn.pydata.org/_images/logo-tall-lightbg.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        "https://numpy.org/images/logo.svg",
    
        // Tools
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg",
        "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/960px-Visual_Studio_Code_1.35_icon.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    ]

    useGSAP(() => {
        const slider = sliderRef.current
        gsap.to(slider, {
            xPercent: -50,
            duration: 20,
            ease: "none",
            repeat: -1,
        })
    })

    return (
        <div className="w-full overflow-hidden py-8 mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div ref={sliderRef} className="flex w-max gap-10">
            {[...images, ...images, ...images].map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt="skill"
                        className="h-16 object-contain shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
                    />
                ))}
            </div>
        </div>
    )
}

export default Skills