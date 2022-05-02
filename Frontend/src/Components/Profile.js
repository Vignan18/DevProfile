import React from "react";
import { Link } from "react-router-dom";
import github from "./Images/iconfinder_github_317712.png";
import hackerrank from "./Images/iconfinder_160_Hackerrank_logo_logos_4373234.png";
import codechef from "./Images/codechef-1324440139527402917_32.png";
import linkedin from "./Images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png";
import medium from "./Images/iconfinder_Circled_Medium_svg5_5279113.png";
import twitter from "./Images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png";
import locationSvg from "./Images/location_on-24px.svg";
import work from "./Images/business-24px.svg";
import link from "./Images/insert_link-24px (1).svg";
import Repositories from "./Repositories";

const Profile = ({ developerDetails }) => {
  const {
    avatar_url,
    id,
    bio,
    hackerrank_id,
    linkedin_id,
    location,
    company,
    medium_id,
    twitter_id,
    codechef_id,
    repos,
  } = developerDetails;
  return (
    <>
      <div className="main-container">
        <div className="header">
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <h2>The Developer Profile</h2>
          </Link>

          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <h2>All Developers</h2>
          </Link>
        </div>
        <div className="main-profile">
          <div>
            <img className="avatar" src={avatar_url} width="300px" alt=""></img>
          </div>
          <div className="profile-info">
            <h1>{id}</h1>
            <h3>{bio}</h3>
            <div className="profiles">
              <a
                href={`https://github.com/${id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt=""></img>
              </a>
              <a
                href={`https://www.linkedin.com/in/${linkedin_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt=""></img>
              </a>
              <a
                href={`https://www.hackerrank.com/${hackerrank_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={hackerrank} alt=""></img>
              </a>
              <a
                href={`https://www.codechef.com/users/${codechef_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={codechef} alt=""></img>
              </a>
              <a
                href={`https://medium.com/${medium_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={medium} alt=""></img>
              </a>
              <a
                href={`https://twitter.com/${twitter_id}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} alt=""></img>
              </a>
              <br></br>
            </div>
            <div class="otherdetails">
              <img
                style={{ marginRight: "0px" }}
                className="otherDetailsImg"
                src={locationSvg}
                alt=""
              />
              <span style={{ marginLeft: "10px" }} className="otherCss">
                {location}
              </span>
              <img className="otherDetailsImg" src={work} alt="" />
              <span className="otherCss">{company}</span>
              <img className="otherDetailsImg" src={link} alt="" />
              <span
                style={{ marginLeft: "10px", marginBottom: "10px" }}
                className="otherCss"
              >{`https://www.linkedin.com/in/${linkedin_id}`}</span>
            </div>
          </div>
        </div>
      </div>
      <h1 style={{ textAlign: "center" }}>Github Repositories</h1>
      <div className="repos">

        <Repositories repos={repos} />
      </div>
    </>
  );
};

export default Profile;
