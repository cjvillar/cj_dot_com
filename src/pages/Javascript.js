import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/page_layout";

function Javascript() {
  return (
    <PageLayout>
      <h1>Vanilla Javascript</h1>
      <p class="mb-3  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:mr-2 first-letter:float-left">
        I was initially motivated to learn JavaScript because I found it
        incredibly cool and exciting to create interactive experiences with it.
        The idea that I could bring web pages to life and make them dynamic
        through programming fascinated me. JavaScript's versatility and its
        ability to work seamlessly with HTML and CSS made it even more
        appealing. I was drawn to the potential of building interactive
        features, animations, and user interfaces that could engage and delight
        users. The perceived accessibility and simplicity of JavaScript further
        fueled my motivation, as it seemed like a language that could empower me
        to quickly turn my ideas into reality.
      </p>
    </PageLayout>
  );
}

export default Javascript;
