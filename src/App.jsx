import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Journey from "./components/Journey/Journey";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div
        className="
  fixed
  top-0
  left-1/2
  -translate-x-1/2

  w-[600px]
  h-[200px]

  bg-purple-700/20
  blur-[120px]

  pointer-events-none
"
      />
      <Navbar />
      <Hero />
      <Skills />
      <Journey />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;