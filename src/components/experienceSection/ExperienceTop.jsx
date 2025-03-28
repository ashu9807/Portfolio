import React from 'react'
import ExperienceTopMiddle from './ExperienceTopMiddle'
import ExperienceTopRight from './ExperienceTopRight'
import ExperienceTopLeft from './ExperienceTopLeft'

const ExperienceTop=()=> {
    return (
        <div className="flex lg:flex-row sm:flex-col gap-40 items-center justify-center">
            <ExperienceTopLeft/>
            <ExperienceTopMiddle/>
            <ExperienceTopRight/>
        </div>
    )
}

export default ExperienceTop
