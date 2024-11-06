import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" border-t z-10 border-t-[#33353F]  text-white">
      <div className=" grid grid-cols-2 gap-4 p-10 items-center justify-center">
        <div className="col-span-1 flex flex-col gap-2 ">
          <h3 className="text-2xl font-semibold text-yellow-500">Overview</h3>
          <p>
            {` I'm a full-stack web developer skilled in Next.js and Express.js,
            building efficient, scalable applications with a focus on
            performance and user experience. Continuously expanding my
            expertise, I aim to deliver impactful, tech-driven solutions.`}
          </p>
        </div>
        <div className="col-span-1 flex flex-col  gap-4">
          <h3 className="text-2xl font-semibold text-yellow-500">
            Social Media
          </h3>
          <div className="flex gap-3 items-center  ">
            <a target="_blank" href="https://www.facebook.com/2000fadyraouf/">
              <FaFacebook className="text-blue-500" size={40} />
            </a>
            <a target="_blank" href="https://www.instagram.com/ff0_231">
              <FaInstagram className="text-red-500" size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
