import React from "react";
import { FaReact } from "react-icons/fa";
import thoughtimage from "../images/thougths.png";
import raspimage from "../images/react_pie .mov";

function ReactPage() {
  return (
    <div className="flex flex-col items-center content-1 h-screen overflow-y-auto">
      <div className="flex items-center mb-2">
        <div className="rounded-full bg-gray-700 m-4">
          <FaReact size={45} className="m-2 logo-clr" />
        </div>
        <h2>React/Next.js</h2>
      </div>

      <div className="flex justify-start md:flex-row flex-col " id="react">
        {/* <div class="md:w-1/2 flex items-center justify-center flex-col"></div> */}

        <div class="md:w-1/2 flex items-center justify-center"></div>

        <div className="flex flex-col">
          <div className="m-4 project-img-card">
            <img src={thoughtimage} alt="app view" />
          </div>
          <a
            className="font-bold hover-over"
            href="https://github.com/cjvillar/NextThoughts"
          >
            Thoughts: <span>Click to go to GitHub repo</span>
          </a>

          <p className="p-8">
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

          <a
            className="font-bold hover-over"
            href="https://github.com/cjvillar/pieAct"
          >
            Raspberry Pi Price: <span>Click to go to GitHub repo</span>
          </a>
          <div className="m-4 project-img-card">
            <video
              src={raspimage}
              alt="rasppi video"
              controls="controls"
              autoplay="false"
            />
          </div>
          <p className="p-8">
            This project came about one morning when I woke up with the urge to
            automate something. Recently, Raspberry Pi prices have been
            egregious. I like to check them out on Amazon.com which often leads
            to me buying more stuff I do not need. To solve this problem I
            looked into the wonderful Node library,{" "}
            <a href="https://pptr.dev/">Puppeteer. </a>
            The functionality, so far, is simple: go to Amazon, search for
            Raspberry Pi 4gb and scrape the prices from the first page. Cool. I
            love a service with a good free tier. With GitHub Actions I can set
            up an automated job to run the page scraper for me! Additionally, I
            can auto commit the changes via{" "}
            <a href="https://github.com/stefanzweifel/git-auto-commit-action">
              git-auto-commit-action!
            </a>{" "}
            The action is set to run everyday at midnight. If the Update Pie
            Price badge is green then the automated job is working. Check out
            the JSON hosted with GitHub pages:{" "}
            <a href="https://www.cjvillarreal.com/amazon-pie-scrapper/pie_price.json">
              Pie Prices.
            </a>{" "}
            You can also check out the prices on a React page I made:{" "}
            <a href="https://www.cjvillarreal.com/pieAct/">here.</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReactPage;
