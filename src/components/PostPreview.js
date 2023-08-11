import React, { useState } from "react";
import data from "../PostData.json";
import { Link } from "react-router-dom";

function PostPreview() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const currentItem = data[currentItemIndex];
  const [isFadeIn, setIsFadeIn] = useState(true);

  const handleNextItem = () => {
    setIsFadeIn(false);
    setTimeout(() => {
      setCurrentItemIndex((prevIndex) =>
        prevIndex === data.length - 1 ? 0 : prevIndex + 1,
      );
      setIsFadeIn(true);
    }, 500); // Adjust the delay
  };

  return (
    <section>
      <div className="mb-8 md:mb-16 relative">
        <div className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200">
          <Link to={currentItem.path}>
            <div
              className={`sm:mx-0 ${
                isFadeIn ? "fade-in" : "fade-out"
              } transition-opacity duration-500`}
            >
              <img
                className="h-auto" // max-w-md"
                src={currentItem.image}
                alt={currentItem.alt}
              />
            </div>
            {/* <div className=" absolute inset-0 flex flex-col justify-center items-center bg-transparent overlay"> */}
            <div className=" absolute inset-0 flex flex-col justify-center items-center bg-transparent overlay">
            
              <h2 className="text-white text-4xl lg:text-6xl font-bold leading-tight">
                {currentItem.title}
              </h2>
              <div className="text-white text-xlg">
                {currentItem.description}
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h2 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight">
            {currentItem.title}
          </h2>
          <div className="mb-4 md:mb-0 text-lg">{currentItem.description}</div>
        </div>
      </div> */}
      <div className="flex lg:pl-4 lg:w-1/2">
        <button
          onClick={handleNextItem}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 border border-gray-400 rounded shadow"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default PostPreview;
