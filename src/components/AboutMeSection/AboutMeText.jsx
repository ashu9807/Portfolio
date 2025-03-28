import React from 'react'

const AboutMeText=()=> {
    return (
        <div className="flex flex-col md:items-center sm:items-center md:text-left sm:text-center">
            <h2 className="text-6xl text-cyan mb-10">About Me</h2>
        <p className='text-white'>
        I am Ashutosh Gupta, a passionate frontend developer With a strong foundation in HTML, CSS, JavaScript, and React I specialize in building modern, responsive, and user-friendly web applications. I am always eager to learn new technologies and frameworks to enhance my skills and knowledge. I am a quick learner, a team player, and a leader who can work efficiently in a team and deliver high-quality work within deadlines. I am looking forward to working on challenging projects that will help me grow as a developer and contribute to the tech community.
       </p>
       <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-center sm:self-center text-white" onClick={() => window.location.href = "https://github.com/ashu9807"}>My Projects</button>
        </div>
    )
}

export default AboutMeText
