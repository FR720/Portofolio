"use client";
import Image from "next/image";
import React, { useState } from "react";

const About = () => {
  const [currentTab, setCurrentTab] = useState("education");
  return (
    <section className="md:grid md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/about.webp" alt="about image" width={500} height={500} />
      <div className="flex flex-col text-white gap-4">
        <h2 className="text-4xl font-bold text-gray-500">About Me</h2>
        <p className="text-base lg:text-lg">
          I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience working
          with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and I
          am excited to work with others to create amazing applications.
        </p>
        <div className="flex gap-4 text-white mb-4">
          <button
            onClick={() => {
              setCurrentTab("education");
            }}
            className={`mr-3 font-semibold h-12 hover:text-white text-[#ADB7BE] border-b-4 ${
              currentTab === "education"
                ? "border-[#a855f7]"
                : "border-transparent"
            } `}
          >
            Education
          </button>
          <button
            onClick={() => {
              setCurrentTab("Certification");
            }}
            className={`mr-3 font-semibold h-12 hover:text-white text-[#ADB7BE] border-b-4 ${
              currentTab === "Certification"
                ? "border-[#a855f7]"
                : "border-transparent"
            } `}
          >
            Certification
          </button>
        </div>
        {currentTab === "Certification" ? (
          <ul className="ml-4">
            <li style={{ listStyleType: "disc" }}>Cyber Security from IBM</li>
            <li style={{ listStyleType: "disc" }}>
              Full Stack from Route Acadmey
            </li>
            <li style={{ listStyleType: "disc" }}>
              Advanced Data Base managment from Udemy
            </li>
          </ul>
        ) : (
          <ul className="ml-4">
            <li style={{ listStyleType: "disc" }}>
              Full Stack diplomate from Route Acadmey
            </li>
            <li style={{ listStyleType: "disc" }}>
              Fculty of Engineering Zagazig University
            </li>
          </ul>
        )}
      </div>
    </section>
  );
};

export default About;
