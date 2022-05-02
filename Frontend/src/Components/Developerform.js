import React, { useState } from "react";
import { useContext } from "react";
import { DeveloperContext } from "./HomePage";
import "./developerForm.css";

const Developerform = ({ formdisplay }) => {
  const { setloading, setdeveloperCount } = useContext(DeveloperContext);
  const [github, setgithub] = useState("");
  const [hackerrank, sethackerrank] = useState("");
  const [linkedIn, setlinkedIn] = useState("");
  const [medium, setmedium] = useState("");
  const [codechef, setcodechef] = useState("");
  const [twitter, settwitter] = useState("");
  const [inValidUser, setinValidUser] = useState(false);

  const clickHandler = () => {
    formdisplay();
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setloading(true);

    fetch("/api/developers/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        github_id: github,
        linkedin_id: linkedIn,
        codechef_id: codechef,
        hackerrank_id: hackerrank,
        twitter_id: twitter,
        medium_id: medium,
      }),
    }).then((res) => {
      setloading(false);
      if (res.status === 200) {
        formdisplay();
        setdeveloperCount((prev) => prev + 1);
      } else {
        setinValidUser(true);
      }
    });
  };

  return (
    <div className="developerForm">
      <div className="formdata">
        <form onSubmit={submitHandler}>
          <label htmlFor="github">Github</label>
          <input
            type="text"
            value={github}
            onChange={(e) => setgithub(e.target.value)}
            required
          />
          {inValidUser && (
            <p style={{ marginLeft: "100px", color: "red" }}>
              Please enter valid github user name
            </p>
          )}
          <label htmlFor="HackerRank">HackerRank</label>
          <input
            type="text"
            value={hackerrank}
            onChange={(e) => sethackerrank(e.target.value)}
          />
          <label htmlFor="LinkedIn">LinkedIn</label>
          <input
            type="text"
            value={linkedIn}
            onChange={(e) => setlinkedIn(e.target.value)}
          />

          <label htmlFor="Medium">Medium</label>
          <input
            type="text"
            value={medium}
            onChange={(e) => setmedium(e.target.value)}
          />
          <label htmlFor="Twitter">Twitter</label>
          <input
            type="text"
            value={twitter}
            onChange={(e) => settwitter(e.target.value)}
          />
          <label htmlFor="Codechef">Codechef</label>
          <input
            type="text"
            value={codechef}
            onChange={(e) => setcodechef(e.target.value)}
          />
          <div className="buttons">
            <button id="cancelBtn" onClick={clickHandler}>
              Exit
            </button>
            <button id="submitBtn" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Developerform;
