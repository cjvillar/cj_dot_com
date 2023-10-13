import React from "react";
import { FaUnity } from "react-icons/fa";
import unity from "../images/unity_game.mov";

function Unity() {
  return (
    <div className="flex-wrapper flex content justify-center">
      <div className="items-center h-auto">
        <div className="flex items-center mb-2">
          <div className="rounded-full bg-gray-700 m-4">
            <FaUnity size={45} className="m-2 logo-clr" />
          </div>
          <h2>Unity </h2>
        </div>

        <div className="flex justify-start md:flex-row flex-col" id="unity">
          <div class="md:w-1/2 flex items-center justify-center flex-col"></div>

          <div className="flex flex-col">
            <div className="m-4 project-img-card">
              <video src={unity} width="400" height="200" controls="controls" />
            </div>

            <div className="flex flex-col">
              <a
                className="font-bold hover-over ml-8"
                href="https://github.com/cjvillar/cats-are-jerks"
              >
                Unity Game Engine. <span>Click to go to GitHub repo</span>
              </a>
              <p className="p-8">
                I created some pixel art which then inspired 3d objects. After a
                bunch of coffee, I tried to make a game in Unity. The game is a
                work in progress (like so many others), so it may change. Play
                it{" "}
                <a href="https://www.cjvillarreal.com/cats-are-jerks/">here</a>{" "}
                (Desktop only).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Unity;
