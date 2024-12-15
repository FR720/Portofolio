import Image from "next/image";
import React from "react";
import { TypeAnimation } from "react-type-animation";

type Props = {
  contactRef: React.RefObject<HTMLDivElement>;
};

const HeroSection = ({ contactRef }: Props) => {
  return (
    <section className="mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600">
              {"Hello, I'm"}
              <br />
            </span>
            <TypeAnimation
              sequence={["Fady Raouf", 2000, "Software Engineer", 2000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Highly motivated and independent graduate with a specialization in
            Software, particularly in the context of web applications. Proven
            expertise in designing and developing advanced Application with
            React. Adept at integrating cutting-edge technologies to enhance app
            performance, safety, and functionality.
          </p>
          <div className="flex gap-4 mt-3 text-center sm:text-left">
            <button
              onClick={(e) => {
                e.preventDefault();
                contactRef?.current?.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-semibold w-full sm:w-fit py-3 px-6 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </button>
            <a
              href="/fady's Resume .pdf"
              target="_blank"
              className="font-semibold p-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-900 text-white"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>
        <div className="col-span-5 bg-[#181818] w-[250px] h-[220px] p-1 rounded-full relative place-self-center">
          <Image
            src="/hero.png"
            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="hero image"
            width={400}
            height={410}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
