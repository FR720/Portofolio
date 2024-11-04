import About from "./components/About";
import Contct from "./components/Contct";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <About />
        <Contct />
      </div>
      <Footer />
    </main>
  );
}
