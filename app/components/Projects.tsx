import React from "react";
import ProjectsCard from "./projectsCard";

const Projects = () => {
  return (
    <div>
      <ProjectsCard
        image={"/game.jpg"}
        title={"Game Basesd Learning"}
        link={"https://game-based-learning.vercel.app/"}
      />
    </div>
  );
};

export default Projects;
