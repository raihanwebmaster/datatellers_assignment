// This is our main home page component.I made this component to  show the all content for the User-Interface.
import React from "react";
import "./style.css";
import PageLeftSide from "../../containers/PageLeftSide";
import PageRightSide from "../../containers/PageRightSide";

const HomePage = () => {
  return (
    <div className="container">
      {/* I divided the whole page into two parts and made two-component for each part  */}
      <PageLeftSide /> {/* This is our left side content   */}
      <PageRightSide /> {/* This is our right side content   */}
    </div>
  );
};

export default HomePage;
