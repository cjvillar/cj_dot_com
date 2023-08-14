import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Django from "./components/Django";
import Flask from "./components/Flask";
import ReactPage from "./components/React";
import Unity from "./components/Unity";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <ReactPage />
      <Django />
      <Flask />
      <Unity />
      <Footer />
    </div>
  );
}

export default App;
