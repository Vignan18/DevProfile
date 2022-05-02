import React, { useState } from "react";
import search from "./Images/search.svg";

const Search = ({ searchfn }) => {
  const [text, settext] = useState("");
  const filtertext = (e) => {
    if (e.target.value === "") {
      searchfn("");
    }
    settext(e.target.value);
  };
  return (
    <>
      <div className="search">
        <input
          className="searchInput"
          type="text"
          id="search"
          value={text}
          placeholder="search for username"
          onChange={(e) => {
            filtertext(e);
          }}
        />
        <div class="searchIcon" style={{ "margin-top": "17px" }}>
          <button onClick={() => searchfn(text)}>
            <img src={search} style={{ width: "30px" }} alt="searchIcon"/>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
