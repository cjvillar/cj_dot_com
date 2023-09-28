import React from "react";
import { FaUnity } from "react-icons/fa";

function Unity() {
  return (
    <div className="flex flex-col items-center content">
      <div className="flex items-center mb-2">
        <FaUnity size={45} className="mr-2" />
        <h2>Unity </h2>
      </div>

      <div
        className="flex justify-start md:flex-row flex-col content"
        id="unity"
      >
        <div class="md:w-1/2 flex items-center justify-center flex-col">
          {/* <img
            src={null}
            alt="django"
            className="small-image md:large-image lg:larger-image xl:larger-image"
          /> */}
        </div>
        <div class="md:w-1/2 flex items-center justify-center"></div>
        {/* <span className="line"></span> */}
        <div className="flex flex-col">
          <a
            className="font-bold hover-over"
            href="https://github.com/cjvillar/cats-are-jerks"
          >
            Unity Game Engine. <span>Click to go to GitHub repo</span>
          </a>
          <p className="p-8">
            I created some pixel art which then inspired 3d objects. After a
            bunch of coffee, I tried to make a game in Unity. The game is a work
            in progress (like so many others), so it may change.{" "}
            <a href="https://www.cjvillarreal.com/cats-are-jerks/">
              Play it in the browser.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Unity;
