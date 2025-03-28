import React from 'react'
import AboutMeImage from './AboutMeImage'
import AboutMeText from './AboutMeText'

const AboutMeMain=()=> {
    return (
        <div id="about" className="flex md:flex-row sm:flex-col gap-40 px-4 max-w-[1000px] mx-auto mt-[100px] justify-between items-center">
        <AboutMeText/>
        <AboutMeImage/>
        </div>
    )
}

export default AboutMeMain