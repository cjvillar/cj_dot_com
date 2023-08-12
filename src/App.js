import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Django from "./components/Django";
import Flask from "./components/Flask";
import ReactPage from "./components/React";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <ReactPage />
      <Django />
      <Flask />
      <Footer />
    </div>
  );
}

export default App;
