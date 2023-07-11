import React, { useState } from "react";
import data from "../PostData.json";
import { Link } from "react-router-dom";

function PostPreview() {
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const currentItem = data[currentItemIndex];

  const handleNextItem = () => {
    setCurrentItemIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <section>
      <div className="mb-8 md:mb-16">
        <div className="sm:mx-0">
          <div className="shadow-sm w-full hover:shadow-lg transition-shadow duration-200">
            <img src={currentItem.image} alt={currentItem.alt} />
          </div>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h2 className="mb-4 text-4xl lg:text-5xl font-bold leading-tight">
            {currentItem.title}
          </h2>
          <div className="mb-4 md:mb-0 text-lg">{currentItem.description}</div>
        </div>
      </div>
      <div className="flex lg:pl-4 lg:w-1/2">
        <Link
          to={currentItem.path}
          text={currentItem.text}
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Read More
        </Link>
        <button
          onClick={handleNextItem}
          class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1.5 px-4 border border-gray-400 rounded shadow"
        >
          Next
        </button>
      </div>
    </section>
  );
}

export default PostPreview;
