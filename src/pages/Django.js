import React from "react";
import { Link } from "react-router-dom";

function Django() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1>Django page</h1>
      <p></p>
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

export default Django;
