import React, { useState } from "react";
import Developerform from "./Developerform";

const AddDeveloper = () => {
  const [formVisibility, setformVisibility] = useState(false);
  const clickHandler = () => {
    setformVisibility(true);
  };
  const formdisplay = () => {
    setformVisibility(false);
  };
  return (
    <>
        <h2 className="formheading">Could not find what are you were looking for?</h2>
        <div className="buttonContainer">
          <button className="add" onClick={clickHandler}>
            Add developer info
          </button>
        </div>
        {formVisibility && <Developerform formdisplay={formdisplay} />}
    </>
  );
};

export default AddDeveloper;
