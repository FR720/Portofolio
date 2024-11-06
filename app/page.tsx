// pages/index.tsx
"use client";
import React, { useRef } from "react";
import About from "./components/About";
import Contct from "./components/Contct";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <main className="flex flex-col min-h-screen bg-[#121212]">
      <Navbar
        refs={{
          home: heroRef,
          about: aboutRef,
          skills: skillsRef,
          work: projectsRef,
          contacts: contactRef,
        }}
      />

      <div className="container mx-auto px-12 py-4 flex flex-col gap-20">
        <section ref={heroRef}>
          <HeroSection />
        </section>
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={contactRef}>
          <Contct />
        </section>
      </div>

      <Footer />
    </main>
  );
}
