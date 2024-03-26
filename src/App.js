import React, { useState } from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Django from "./components/Django";
import Flask from "./components/Flask";
import ReactPage from "./components/React";
import Unity from "./components/Unity";
import ChromeDinoComponent from "./ee/dino";

function App() {
  const [showGamePopup, setShowGamePopup] = useState(false);

  const toggleGamePopup = () => {
    setShowGamePopup((prevState) => !prevState);
  };

  return (
    <div className="overflow-x-hidden">
      <Nav toggleGamePopup={toggleGamePopup} />
      {showGamePopup && <div className="flex-wrap h-screen content-1"> < ChromeDinoComponent /></div> }
      <div className="xxl:container xxl:mx-auto">
        <Hero />
        <About />
        <Skills />
        <ReactPage />
        <Flask />
        <Django />
        <Unity />
        <Footer />
      </div>
    </div>
  );
}

export default App;
