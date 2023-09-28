import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
