import React, { useState } from "react";
import {
  ContactSection,
  Container,
  SectionTitle,
  ContactContent,
  ContactInfo,
  ContactForm,
  InfoTitle,
  InfoText,
  SocialLinks,
  SocialLink,
  FormGroup,
  Label,
  Input,
  TextArea,
  SubmitButton,
  Footer,
} from "./styledComponents";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! I'll get back to you soon.");
    }, 1000);
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <InfoTitle>Let's work together!</InfoTitle>
            <InfoText>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a project in mind or just want to say hello, feel
              free to reach out. I'd love to hear from you!
            </InfoText>
            <SocialLinks>
              <SocialLink
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                📱
              </SocialLink>
              <SocialLink
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                💼
              </SocialLink>
              <SocialLink href="mailto:john@example.com">✉️</SocialLink>
              <SocialLink
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                🐦
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </SubmitButton>
          </ContactForm>
        </ContactContent>
        <Footer>
          <p>© 2025 John Doe. All rights reserved.</p>
        </Footer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
