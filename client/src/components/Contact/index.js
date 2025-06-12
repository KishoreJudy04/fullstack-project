import React, { Component } from "react";
import {
  ContactSection,
  Info,
  Form,
  Input,
  Textarea,
  SubmitButton,
} from "./styledComponents";

class Contact extends Component {
  render() {
    return (
      <ContactSection id="contact">
        <Info>
          <h2>Get In Touch</h2>
          <p>Email: alex.johnson.dev@email.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: San Francisco, CA</p>
        </Info>
        <Form>
          <Input placeholder="Your name" />
          <Input placeholder="Your email" />
          <Input placeholder="Subject" />
          <Textarea placeholder="Message" rows="5" />
          <SubmitButton>Send Message</SubmitButton>
        </Form>
      </ContactSection>
    );
  }
}

export default Contact;
