import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/page_layout";

function ReactPage() {
  return (
    <PageLayout>
      <h1>React Page</h1>
      <p class="mb-3  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:mr-2 first-letter:float-left">
        In my previous role, part of my duties were to help maintain a React app
        that received genomic data from various APIs and served the info in a
        user-friendly experience. This app was super complex and I just had to
        make sure the components and their respective test worked with the our
        downstream changes. This simple project gave me a better understanding
        of how the React and Django REST Frameworks work together.
      </p>
    </PageLayout>
  );
}

export default ReactPage;
