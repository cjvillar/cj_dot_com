import React from "react";
import { Link } from "react-router-dom";

function Flask() {
  return (
    <>
      <h1>Flask page</h1>
      <p></p>
      <Link to="/">Go Back</Link>
      <hr className="border-neutral-200 mt-28 mb-24"/>
      <Link
        to="/"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Go Back
      </Link>
    </>
  );
}

export default Flask;
