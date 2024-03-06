import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="MainContactDiv">
      <div className="contactDiv">
        <div className="contactHeading">
          <h1>Contact Us</h1>
        </div>
        <h2>Name</h2>
        <input type="text" className="txtField"></input>
        <h2>Email</h2>
        <input type="email" className="emailField"></input>
        <h2>Message</h2>
        <input type="message" className="msgField"></input>
        <div className="sub">
          <button className="submitButton">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
