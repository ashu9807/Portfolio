import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'
import AllSkillsSm from './AllSkillsSm'

const SkillsMain=()=> {
    return (
        <div id="skills">
            <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">

            
            <SkillsText/>
            <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block">
                <AllSkills />
            </div>
            <div className="sm:block lg:hidden">
          <AllSkillsSm />
            </div>
            </div> 
        </div>
    )
}

export default SkillsMain