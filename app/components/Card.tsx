import Image from "next/image";
import React from "react";

interface CardProps {
  image: string;
  title: string;
  link: string;
}

const ProjectsCard = ({ image, title, link }: CardProps) => {
  return (
    <a
      className="shadow-2xl rounded-lg  overflow-hidden text-white shadow-black max-w-80 "
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit project: ${title}`}
    >
      <div className="relative h-56">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="fill"
          className="rounded-t-lg  transition-transform transform hover:scale-105 max-w-80 "
        />
      </div>
      <h3 className="text-center text-white font-semibold p-2 text-lg max-w-96">
        {title}
      </h3>
    </a>
  );
};

export default ProjectsCard;
