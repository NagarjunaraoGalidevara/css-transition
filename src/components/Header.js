import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="tab-navigation">
        <span>Cheyenne Bergson</span>
        <span>Jonathan Higgins</span>
        <span>Hannibal Smith</span>
        <span>Messaging</span>
      </div>
      <div className="user-profile">
        <button className="role">Process Owner HOD</button>
        <button className="role">Admin</button>
        <img
          src="https://via.placeholder.com/40"
          alt="User Profile"
          className="profile-picture"
        />
      </div>
    </header>
  );
};

export default Header;
