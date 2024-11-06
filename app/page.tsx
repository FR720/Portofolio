import About from "./components/About";
import Contct from "./components/Contct";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212] ">
      <ToastContainer />
      <Navbar />
      <div className="container mx-auto px-12 py-4 flex flex-col gap-20">
        <HeroSection />
        <About />
        <Skills />
        <Projects />
        <Contct />
      </div>
      <Footer />
    </main>
  );
}
