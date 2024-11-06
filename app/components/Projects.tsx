import React from "react";
import ProjectsCard from "./Card";

const projects = [
  {
    image: "/new.png",
    title: "New Portfolio",
    link: "https://portofolio-fady.vercel.app",
  },
  {
    image: "/game.jpg",
    title: "Game Basesd Learning",
    link: "https://game-based-learning.vercel.app/",
  },
  {
    image: "/youtube.png",
    title: "Youtube Clone",
    link: "https://youtube-clone-43do.vercel.app/",
  },
  {
    image: "/old.png",
    title: "Old portfolio",
    link: "https://fady.vercel.app/",
  },
];
const Projects = () => {
  return (
    <section>
      <h2 className="text-4xl font-bold text-gray-500 mb-10">Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            image={project.image}
            title={project.title}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
