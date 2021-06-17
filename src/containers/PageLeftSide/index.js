import React, { useState } from "react";
import axios from "axios";
import Typical from "react-typical";
import { Button } from "@material-ui/core";
import "./style.css";
import BackgroundAnimation from "../BackgrooundAnimation/BackgroundAnimation";
import { url } from "../api";

const PageLeftSide = () => {
  const [jobStatus, setJobStatus] = useState(""); // created 'jobStatus' state to store our api data
  const [isLoaded, setIsLoaded] = useState(false); // created 'isLoaded' state for loading

  // use handleClick function for fetching the data from our API after clicking the button
  const handleClick = async () => {
    setIsLoaded(true);
    const data = await axios.get(url, {
      headers: {
        "x-api-key": `syaNs11gHB9pev48g5Zrt5p5O4cKX7yU1bUDj7F5`,
      },
    }); //used axios for fetching data from API

    // If our data is fetching correctly from API than it enter into try(), if our data is not fetch correctly than catch() method will catch it
    try {
      if (data.status === 200) {
        setTimeout(() => {
          setIsLoaded(false);
          setJobStatus(data.data);
        }, 3000);
      } else if (data.status === 400) {
        setIsLoaded(false);
        alert("server down");
        throw new Error("Server responds with error!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // create this div for wrapping h1 tag and background animation
    <div className="PageLeftSide">
      <div style={{ position: "absolute" }} className="title">
        <h1>
          FIND OUT <br /> YOUR <br />{" "}
          <span>
            <Typical // To animate specific text , used this Typical tag
              steps={["JOB STATUS", 2500, "CURRENT JOB STATUS", 2500]}
              loop={Infinity}
              wrapper="span"
            />
          </span>
        </h1>
      </div>
      <div style={{ position: "relative", width: "45%", marginLeft: "40px" }}>
        <BackgroundAnimation />{" "}
        {/* This "BackgroundAnimation" tag used for showing the fancy animation */}
      </div>

      {/* This div made to contains our loader and fetched data */}
      <div style={{ height: "40px" }}>
        {/* If "isLoading" state is true than it will show the spinner , if that state is false than it will show our fetched data */}
        {!isLoaded ? (
          <>
            {jobStatus.status === "Pending" && (
              <p className="status">
                Your job condition is
                <span style={{ color: "yellow", textTransform: "uppercase" }}>
                  {" "}
                  {jobStatus.status}
                </span>
                . Please, wait until it become success.
              </p>
            )}
            {jobStatus.status === "Success" && (
              <p className="status">
                Hurrah! Your job is
                <span style={{ color: "green", textTransform: "uppercase" }}>
                  {" "}
                  {jobStatus.status}
                </span>
                . Please, waiting for our next steps
              </p>
            )}
          </>
        ) : (
          <div className="spinner">
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
          </div>
        )}
      </div>

      <div style={{ textAlign: "center" }}>
        {/* This button is made by material-UI. The reason behind using this framework is material ui has outstanding button features. Anyone can use it easily */}
        <Button
          style={{
            background: "linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)",
            borderRadius: 3,
            color: "white",
            boxShadow: "0 3px 5px 2px rgba(33, 203, 243, .3)",
            marginTop: "80px",
          }}
          variant="contained"
          onClick={handleClick} // After clicking this button the "handleClick" function will start working. That's why used onClink() method
        >
          Find out
        </Button>
      </div>
    </div>
  );
};

export default PageLeftSide;
