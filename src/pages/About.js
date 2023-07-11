import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/page_layout";

function About() {
  return (
    <PageLayout>
      <h1>About page</h1>
      <p class="mb-3  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:mr-2 first-letter:float-left">
        I’m a lifelong learner who gets bouts of creativity. I’ve found coding
        as one medium to express my ideas and explore; it’s always a challenge
        and I appreciate that. Professionally, I’ve been working as a Software
        Developer, and previously Tester, in the clinical genomics space at{" "}
        <a href="https://www.invitae.com/en">Invitae</a>. Moreover, I’ve worked
        in QA on projects such as the{" "}
        <a href="https://genome.ucsc.edu/"> UCSC Genome Browser</a>, and as a
        Data Wrangler at the{" "}
        <a href="https://data.humancellatlas.org/">Human Cell Atlas</a> and{" "}
        <a href="https://cirm.ucsc.edu/">California Institutes of health</a>. I
        created this website to hopefully inspire others to make things. Feel
        free to connect on <a href="https://github.com/cjvillar">GitHub</a>
      </p>
    </PageLayout>
  );
}

export default About;
