import React from "react";
import { Link } from "react-router-dom";

function PageLayout({ children }) {
  return (
    <>
    <div className="max-w-2xl mx-auto">
      <hr className="border-neutral-200 mt-28 mb-24" />
      {children}
      <hr className="border-neutral-200 mt-28 mb-24" />
      <Link
        to="/"
        className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
      >
        Go Back
      </Link>
    </div>
    </>
  );
}

export default PageLayout;
