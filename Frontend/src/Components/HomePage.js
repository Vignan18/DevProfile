import React, { useEffect, useState } from "react";
import logo from "./Images/test.png";
import Footer from "./Footer";
import Search from "./Search";
import Developers from "./Developers";
import AddDeveloper from "./AddDeveloper";
import Loading from "./Loading";

export const DeveloperContext = React.createContext();

function HomePage() {
  const [developers, setdevelopers] = useState([]);
  const [developerCount, setdeveloperCount] = useState(2);
  const [loading, setloading] = useState(true);
  const [filterdDevelopers, setFilterdDevelopers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  //Fetching Developers from backend
  const fetchingDevelopers = () => {
    fetch("/api/developers/")
      .then((response) => response.json())
      .then((response) => {
        setdevelopers(response);
        setloading(false);
      });
  };

  useEffect(() => {
    fetchingDevelopers();
  }, [developerCount]);

  //Displaying developers based on search
  const DevelopersListView = () => {
    if (isSearching && filterdDevelopers.length > 0) {
      return <Developers developers={filterdDevelopers} />;
    }
    return <Developers developers={developers} />;
  };

  //Search Functionality
  const searchfn = (inputText) => {
    if (inputText === "") {
      setIsSearching(false);
      return;
    }
    const filterData = developers.filter((dev) => {
      return dev.id.toLowerCase().includes(inputText);
    });
    setIsSearching(true);
    setFilterdDevelopers(filterData);
  };

  return (
    <DeveloperContext.Provider value={{ setloading, setdeveloperCount }}>
      <>
        <div className="container">
          <div className="main-dag">
            <h3 className="title">
              The Developer <br></br> Repository
            </h3>
            <img src={logo} alt=""/>
          </div>
          <h3 className="title1">Explore developer profiles</h3>
          <div className="line"></div>
          <Search searchfn={searchfn} />

          {loading ? <Loading /> : <DevelopersListView />}
          <div className="line"></div>
        </div>
        <AddDeveloper />
        <Footer />
      </>
    </DeveloperContext.Provider>
  );
}

export default HomePage;
