import React from "react";
import { Link} from "react-router-dom";

function About() {
    
  return (
    <div className="max-w-2xl mx-auto">
      <h1>About page</h1>
      <hr className="border-neutral-200 mt-28 mb-24"/>
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
      <hr className="border-neutral-200 mt-28 mb-24"/>
      <Link
        to="/"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Go Back
      </Link>
    
    </div>

  );
}

export default About;
