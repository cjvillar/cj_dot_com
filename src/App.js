import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Django from "./components/Django";
import Flask from "./components/Flask";
import ReactPage from "./components/React";
import Unity from "./components/Unity";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Nav />
      <div className="xxl:container xxl:mx-auto">
        <Hero />
        <About />
        <Skills />
        <ReactPage />
        <Flask />
        <Django />
        <Unity />
      </div>
      <Footer />
    </div>
  );
}

export default App;
