import React from "react";
import { FaReact } from "react-icons/fa";

function ReactPage() {
  return (
    <div className="content" id="react">
      <div className="container">
        <FaReact size={30} />
        <div className="col-2">
          <h2>React/Next.js </h2>
          <span className="line"></span>
          <p cassName="first-letter:mr-2 first-letter:float-left">
            In my previous role, part of my duties were to help maintain a React
            app that received genomic data from various APIs and served the info
            in a user-friendly experience. This app was super complex and I just
            had to make sure the components and their respective test worked
            with the our downstream changes. This simple project gave me a
            better understanding of how the React and Django REST Frameworks
            work together.
          </p>

          <p class="m-3">
            "Thoughts" is a vibrant full-stack web application crafted with the
            power of the Next.js framework for the front end, MongoDB for
            seamless data storage, and effortlessly brought to life through
            Vercel's deployment magic. My primary goal was to learn Next.js and
            I think this simple little web app helped a lot. The journey
            involved insightful tutorials and reading the docs, which was a
            great learning experience. Check out:{" "}
            <a href="https://next-thoughts-ashen.vercel.app/"> thoughts.</a>
            The site uses the Google Oauth API which is set to test mode so only
            allowed users can make an account.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReactPage;
