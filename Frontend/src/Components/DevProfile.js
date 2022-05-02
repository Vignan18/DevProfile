import React, { useState, useEffect } from "react";


import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";

const DevProfile = () => {
  const location = useLocation();
  const githubId = location.state.links.id;
  const [developerDetails, setdeveloperDetails] = useState();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`/api/developers/${githubId}`)
      .then((response) => response.json())
      .then((response) => {
        setdeveloperDetails(response);
      });
  }, []);

  if (developerDetails !== undefined && Loading === false) {
    console.log(developerDetails);
    setLoading(true);
  }

  return (
    <>
      {Loading && <Profile developerDetails={developerDetails} />}

      <h1 style={{ textAlign: "center" }}>Github Repositories</h1>
      <Footer />
    </>
  );
};

export default DevProfile;
