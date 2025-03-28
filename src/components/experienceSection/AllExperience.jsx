import React from 'react'
import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";

const experiences = [
    {
      job: "Front-End Developer",
      company: "IBM",
      date: "June 2024 - August 2024",
      responsibilities: [
        "Implementing reusable components.",
        "Participating in large scale application.",
        "Working on the performance of web applications.",
        "Generating new ideas for better user experience.",
      ],
    },
    {
      job: "Data Structure Algorithm",
      company: "YBI",
      date: "Dec 2023 - Jan 2024",
      responsibilities: [
        " Work on real-world problems requiring efficient sorting, searching, and dynamic programming approaches.",
        " Work with developers to integrate optimized solutions in live projects.",
      ],
    },
    // {
    //   job: "Course Instructor",
    //   company: "Sprints",
    //   date: "2024 - Present",
    //   responsibilities: [
    //     "Teaching JavaScript, React and TailwindCSS.",
    //     "Participating in preparing course materials.",
    //     "Helping students through their way in learning web development technologies.",
    //   ],
    // },
  ];

const AllExperience=()=> {
    return (
        <div className="flex md:flex-row sm:flex-col items-center justify-between gap-1 mt-10">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
             
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
    )
}

export default AllExperience
