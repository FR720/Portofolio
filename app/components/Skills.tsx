import React from "react";
import SkillBar from "./SkillBar";
import { FaReact } from "react-icons/fa";

import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiRedux,
  SiReactquery,
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { BsFillFileLockFill } from "react-icons/bs"; // For Data Structure & Algorithms
import { GiBrain } from "react-icons/gi"; // For Problem Solving
import { RiNextjsLine } from "react-icons/ri";

const skills = [
  {
    title: "Next Js",
    Logo: <RiNextjsLine size={28} color="#61DBFB" />,
    percentage: 85,
  },
  {
    title: "React Js",
    Logo: <FaReact size={28} color="#61DBFB" />,
    percentage: 90,
  },
  {
    title: "React Query",
    Logo: <SiReactquery size={28} color="#FF4154" />,
    percentage: 80,
  },
  {
    title: "JavaScript",
    Logo: <DiJavascript1 size={28} color="#F7DF1E" />,
    percentage: 90,
  },
  {
    title: "TypeScript",
    Logo: <SiTypescript size={28} color="#3178C6" />,
    percentage: 80,
  },
  {
    title: "Redux Toolkit",
    Logo: <SiRedux size={28} color="#764ABC" />,
    percentage: 80,
  },
  {
    title: "Zustand",
    Logo: <FaReact size={28} color="#61DBFB" />, // Zustand doesn't have a widely recognized icon
    percentage: 85,
  },
  {
    title: "Framer Motion",
    Logo: <FaReact size={28} color="#61DBFB" />, // Framer Motion doesn't have a specific icon
    percentage: 85,
  },
  {
    title: "Tailwind",
    Logo: <SiTailwindcss size={28} color="#38BDF8" />,
    percentage: 90,
  },
  {
    title: "Bootstrap",
    Logo: <SiBootstrap size={28} color="#7952B3" />,
    percentage: 85,
  },
  {
    title: "CSS",
    Logo: <SiCss3 size={28} color="#1572B6" />,
    percentage: 90,
  },
  {
    title: "HTML",
    Logo: <SiHtml5 size={28} color="#E34F26" />,
    percentage: 90,
  },
  {
    title: "Node js",
    Logo: <SiNodedotjs size={28} color="#68A063" />,
    percentage: 85,
  },
  {
    title: "Express Js",
    Logo: <SiExpress size={28} color="#fff" />,
    percentage: 90,
  },
  {
    title: "Mongo DB",
    Logo: <SiMongodb size={28} color="#47A248" />,
    percentage: 85,
  },
  {
    title: "SQL DB",
    Logo: <BsFillFileLockFill size={28} color="#00618E" />, // Icon for SQL or databases
    percentage: 75,
  },
  {
    title: "Data Structure & Algorithms",
    Logo: <GiBrain size={28} color="#FFD700" />,
    percentage: 80,
  },
  {
    title: "Problem Solving",
    Logo: <GiBrain size={28} color="#FFD700" />,
    percentage: 85,
  },
];

const Skills = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-gray-500 mb-10">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-[80%] justify-center mx-auto">
        {skills.map((skill, id) => (
          <SkillBar
            key={id}
            Logo={skill.Logo}
            title={skill.title}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
