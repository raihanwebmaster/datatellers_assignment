import React from "react";
import "./style.css";
import PageLeftSide from "../../containers/PageLeftSide";
import PageRightSide from "../../containers/PageRightSide";

const HomePage = () => {
  return (
    <div className="container">
      <PageLeftSide />
      <PageRightSide />
    </div>
  );
};

export default HomePage;
