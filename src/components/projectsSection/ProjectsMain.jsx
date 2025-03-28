import React from 'react'
import SingleProjects from './SingleProjects'
import ProjectsText from "./ProjectsText";

const projects = [
    
    {
      name: "Study App",
      year: "Jan2024",
      align: "right",
      image: "../../public/images/website-img-3.jpg",
      link: "https://study-notion-iota-six.vercel.app/",
    },
    {
      name: "SynthAI",
      year: "Sept2023",
      align: "left",
      image: "../../public/images/website-img-2.webp",
      link: "https://gemini-omega-tawny.vercel.app/",
    },
    {
      name: "Edusity",
      year: "Mar2023",
      align: "right",
      image: "../../public/images/website-img-1.jpg",
      link: "https://edusity-xi.vercel.app/",
    },
    
    // {
    //   name: "Bank of Luck",
    //   year: "May2024",
    //   align: "left",
    //   image: "../../public/images/website-img-4.jpg",
    //   link: "#",
    // },
  ];

const ProjectsMain=()=> {
    return (
        <div id="projects" className="max-w-[1200px] mx-auto px-4">
        <ProjectsText />
        <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
          {projects.map((project, index) => {
            return (
              <SingleProjects
                key={index}
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
                link={project.link}
              />
            );
          })}
        </div>
      </div>
    )
}

export default ProjectsMain
