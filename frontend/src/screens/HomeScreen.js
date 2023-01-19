import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import Copyright from "../components/Copyright";

const HomeScreen = () => {
  return (
    <>
      <h1>
        <Typewriter
          options={{
            strings: ["Welcome to Dwarpaaal', 'The gateway to DGX"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <div className="btn-main-container">
        <div className="btn-container">
          <Link to="/login/student" className="btn btn-lg btn-custom">
            Login for Students
          </Link>
        </div>
        <div className="btn-container">
          <Link to="/login/staff" className="btn btn-lg btn-custom">
            Login for Staff
          </Link>
        </div>
        <div className="btn-container">
          <Link to="/request-form" className="btn btn-lg btn-custom">
            Request Form
          </Link>
        </div>
      </div>

      <Copyright />
    </>
  );
};

export default HomeScreen;
