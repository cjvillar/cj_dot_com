import React from "react";
import { FaReact } from "react-icons/fa";
import thoughtimage from "../images/thoughts.png";
import raspimage from "../images/reactPie.png";

function ReactPage() {
  return (
    <div className="flex-wrapper content flex justify-center">
      <div className="flex flex-wrap items-center m-2 p-4 md:w-1/2" id="Projects">
        <div className="flex items-center mb-2 ">
          <div className="rounded-full bg-gray-700 m-4">
            <FaReact size={45} className="m-2 logo-clr" />
          </div>
          <h2>React/Next.js</h2>
        </div>

        <div className="flex justify-start md:flex-row flex-col  m-2 p-4">
          {/* <div class="md:w-1/2 flex items-center justify-center"></div> */}

          <div className="flex flex-col ">
            <div className="m-4 project-img-card">
              <img src={thoughtimage} alt="app view" />
            </div>
            <a
              className="font-bold hover-over m-2 p-2"
              href="https://github.com/cjvillar/NextThoughts"
            >
              Thoughts: <span>Click to go to GitHub repo</span>
            </a>

            <p className="p-4">
              "Thoughts" is a vibrant full-stack web application crafted with
              the power of the Next.js framework for the front end, MongoDB for
              seamless data storage, and effortlessly brought to life through
              Vercel's deployment magic. My primary goal was to learn Next.js
              and I think this simple little web app helped a lot. The journey
              involved insightful tutorials and reading the docs, which was a
              great learning experience. Check out:{" "}
              <a href="https://next-thoughts-ashen.vercel.app/"> thoughts.</a>
              The site uses the Google Oauth API which is set to test mode so
              only allowed users can make an account.
            </p>

            <div className="m-4 project-img-card">
              <img src={raspimage} alt="react website screenshot" />
            </div>
            <a
              className="font-bold hover-over m-2 p-2"
              href="https://github.com/cjvillar/pieAct"
            >
              Raspberry Pi Price: <span>Click to go to GitHub repo</span>
            </a>
            <p className="p-4">
              This project was influenced by my frustrations with how high
              Raspberry Pi prices have been. I like to track them out on
              Amazon.com and CanaKit.com which often leads to me buying more
              stuff I do not need. To solve this problem I looked into the
              wonderful Node library,{" "}
              <a href="https://pptr.dev/">Puppeteer. </a>
              The functionality, so far, is simple: go to Amazon and CanaKit,
              search for Raspberry Pi 4gb and scrape the prices from the first
              page. I created an automated job to run the page scraper using
              GitHub Actions. Additionally, I auto-commit the changes via{" "}
              <a href="https://github.com/stefanzweifel/git-auto-commit-action">
                git-auto-commit-action!
              </a>{" "}
              The action is set to run every day at midnight. If the “Update Pie
              Price” badge is green then the automated job is working. Check out
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
    </div>
  );
}

export default ReactPage;
