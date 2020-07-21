import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Contact extends Component {
  render() {
    return (
      <div>
        <h2 style={{ marginBottom: "2rem" }}>GOT QUESTIONS?</h2>
        <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
        <a
          href="https://twitter.com/home"
          style={{
            textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
            margin: "0rem 2rem 0rem 0.5rem",
            textDecoration: "none",
          }}
        >
          Twitter
        </a>

        <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
        <a
          href="https://www.linkedin.com/in/varun-venkatesh-88aa75148/"
          style={{
            textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
            margin: "0rem 2rem 0rem 0.5rem",
            textDecoration: "none",
          }}
        >
          Linkedin
        </a>
        <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
        <a
          href="https://github.com/varunvenky99"
          style={{
            textShadow: "0 1px 0 rgba(0, 0, 0, 0.1)",
            margin: "0rem 2rem 0rem 0.5rem",
            textDecoration: "none",
          }}
        >
          Github
        </a>
      </div>
    );
  }
}

export default Contact;
