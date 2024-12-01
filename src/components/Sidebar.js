import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <h2>Risk Hawk</h2>
        <p>Manage your exposures</p>
      </div>
      <nav className="menu">
        <ul>
          <li>Internal Audit</li>
          <li>UAT Testing</li>
          <li>Interact</li>
          <li>Queue</li>
          <li>Workflow</li>
          <li>Admin</li>
          <li>Asset</li>
          <li>Parent</li>
          <li>Option One</li>
          <li>Option Two</li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
