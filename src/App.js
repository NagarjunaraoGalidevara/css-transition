import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Content from "./components/Content";
import "./index.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-wrapper">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;