import React from 'react'
import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa6";
// import { motion } from "framer-motion";
const skills = [
    {
      skill: "HTML",
      icon: FaHtml5,
    },
    {
      skill: "CSS",
      icon: FaCss3Alt,
    },
    {
      skill: "JavaScript",
      icon: IoLogoJavascript,
    },
    {
      skill: "SQL",
      icon: TbBrandMysql,
    },
    {
      skill: "ReactJS",
      icon: FaReact,
    },
    {
      skill: "Redux",
      icon: SiRedux,
    },
    {
      skill: "NodeJS",
      icon: FaNodeJs,
    },
    {
      skill: "TailwindCSS",
      icon: RiTailwindCssFill,
    },
  ];

const AllSkills=()=> {
    return (
        <div>
            <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
            {skills.map((item,index)=>{
                return <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>}/>
                })}
            </div>
        </div>
    )
}

export default AllSkills