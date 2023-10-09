import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

import Django from "./components/Django";
import Flask from "./components/Flask";
import ReactPage from "./components/React";
import Unity from "./components/Unity";

function App() {
  return (
    <div className="app ">
      <Nav />
      <Hero />
      <About />
      <Skills />
      {/* <Projects /> */}
      <Django />
      <Flask />
      <ReactPage />
      <Unity />
      <Footer />
    </div>
  );
}

export default App;
