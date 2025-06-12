import React, { Component } from "react";
import { FooterSection } from "./styledComponent";

class Footer extends Component {
  render() {
    return (
      <FooterSection>
        <p>
          © 2024 Alex Johnson. Built with React.js and Node.js. All rights
          reserved.
        </p>
      </FooterSection>
    );
  }
}

export default Footer;
