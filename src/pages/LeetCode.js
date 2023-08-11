import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../components/page_layout";

function LeetCode() {
  const url =
    "https://leetcode.com/graphql?query=query{%20matchedUser(username:%20%22hey_cj%22)%20{%20username%20submitStats:%20submitStatsGlobal%20{%20acSubmissionNum%20{%20difficulty%20count%20submissions%20}%20}%20}%20}";

  const [jsonData, setJsonData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      console.log(response)
      setJsonData(data);
    }
    fetchData();
  }, [url]);

  if (!jsonData) {
    
    return <div>Loading...</div>;
  }

  console.log(jsonData);

  return (
    <PageLayout>
      <h1>Leet Code Practice</h1>
      <p className="mb-3  first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:mr-2 first-letter:float-left"></p>

      {/* <div className='container'>
      <h1>Username: {username}</h1>
      <h2>Submissions :</h2>
      <ul>
        {submitStats.map((submission, index) => (
          <li key={index}>
            <div className="submission-details">
            <strong>Difficulty:</strong> {submission.difficulty},&nbsp;
            <strong>Count:</strong> {submission.count},&nbsp;
            <strong>Submissions:</strong> {submission.submissions}
            </div>
          </li>
        ))}
      </ul>
    </div> */}
    </PageLayout>
  );
}

export default LeetCode;
