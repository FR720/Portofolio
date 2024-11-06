import Image from "next/image";
import React from "react";

type CardProps = {
  image: string;
  title: string;
  link: string;
};

const ProjectsCard: React.FC<CardProps> = ({ image, title, link }) => {
  return (
    <a
      className="shadow-2xl rounded-lg  overflow-hidden text-white  max-w-96"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit project: ${title}`}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg  transition-transform transform hover:scale-105 max-w-96 "
        />
      </div>
      <h3 className="text-center text-white font-semibold p-2 text-lg max-w-96">
        {title}
      </h3>
    </a>
  );
};

export default ProjectsCard;
