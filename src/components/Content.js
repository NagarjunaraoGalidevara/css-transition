import React from "react";
import Chatbox from "./Chatbox";
import ActionLauncher from "./ActionLauncher";
import CaseFavorite from "./CaseFavorite";
import "./Content.css";

const Content = () => {
  return (
    <div className="main-content">
      <Chatbox />
      <div className="side-widgets">
        <ActionLauncher />
        <CaseFavorite />
      </div>
    </div>
  );
};

export default Content;
