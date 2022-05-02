import React from "react";
import link from "./Images/link.svg";

const Displayrepos = ({ repodata }) => {
  const repos = repodata.map((repo, index) => {
    return (
      <div className="repos" key={index}>
        <div className="repo">
          <h1>{repo.name}</h1>
          <div className="repolink">
            <a href={repo.url} target="_blank" rel="noreferrer">
              <img src={link} alt=""></img>
            </a>
          </div>
          <p className="updated">updated at {repo.updated_at}</p>
         
        </div>
        <p className="repodesc">{repo.description}</p>
      </div>
    );
  });
  return <>{repos}</>;
};

export default Displayrepos;
