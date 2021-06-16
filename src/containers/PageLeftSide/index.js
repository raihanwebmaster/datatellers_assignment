import React, { useState } from "react";
import Typical from "react-typical";
import { Button } from "@material-ui/core";
import "./style.css";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";
const PageLeftSide = () => {
  return (
    <div className="PageLeftSide">
      <div style={{ position: "absolute" }} className="title">
        <h1>
          FIND OUT <br /> YOUR <br />{" "}
          <span>
            <Typical
              steps={["JOB STATUS", 2500, "CURRENT JOB STATUS", 2500]}
              loop={Infinity}
              wrapper="span"
            />
          </span>
        </h1>
      </div>
      <div style={{ position: "relative", width: "45%", marginLeft: "40px" }}>
        <BackgroundAnimation />
      </div>

      <p className="status">Pending / Success</p>
      <div className="spinner">
        <div className="double-bounce1"></div>
        <div className="double-bounce2"></div>
      </div>

      <div style={{ textAlign: "center" }}>
        <Button
          style={{
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            borderRadius: 3,
            color: "white",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
            marginTop: "80px",
          }}
          variant="contained"
        >
          Find out
        </Button>
      </div>
    </div>
  );
};

export default PageLeftSide;
