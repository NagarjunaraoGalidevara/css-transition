import React from "react";
import "./Chatbox.css";

const Chatbox = () => {
  return (
    <section className="chat-section">
      <header className="chat-header">
        <h2>Hannibal Smith</h2>
        <p>1 Market Street San Francisco, CA 94105</p>
      </header>
      <div className="chat-messages">
        <div className="message received">Rachel: Lorem ipsum dolor sit...</div>
        <div className="message sent">You: Lorem ipsum dolor sit...</div>
      </div>
      <div className="chat-input">
        <textarea placeholder="Type a message"></textarea>
        <button>Send</button>
      </div>
    </section>
  );
};

export default Chatbox;
