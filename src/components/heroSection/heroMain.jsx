import React from 'react'
import HeroPic from './heroPic'
import HeroText from './heroText'

const HeroMain=()=> {
    return (
        <div className=" pt-40 pb-16">
            <div className="flex md:flex-row sm:flex-col  max-w-[1100px] mx-auto justify-between items-center relative px-4 z-0">
            <HeroText/> 
            <HeroPic/>
            </div>
            

        </div>
    )
}

export default HeroMain