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
  AccentText,
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
        <SectionTitle>
          Contact <AccentText>Me</AccentText>
        </SectionTitle>
        <ContactContent>
          <ContactInfo>
            <InfoTitle>Let's work together!</InfoTitle>
            <InfoText>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Whether you have a
              question or just want to say hi, feel free to reach out!
            </InfoText>
            <SocialLinks>
              <SocialLink
                type="button"
                onClick={() =>
                  window.open("https://github.com/KishoreJudy04", "_blank")
                }
                aria-label="GitHub"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="Logo"
                  width="30"
                />
              </SocialLink>
              <SocialLink
                type="button"
                onClick={() => window.open("https://linkedin.com", "_blank")}
                aria-label="LinkedIn"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                  alt="Logo"
                  width="30"
                />
              </SocialLink>
              <SocialLink
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/kishore_judy_04/",
                    "_blank"
                  )
                }
                aria-label="Instagram"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  alt="Logo"
                  width="30"
                />
              </SocialLink>
              <SocialLink
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100040365094247&sk=about",
                    "_blank"
                  )
                }
                aria-label="Facebook"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Logo"
                  width="30"
                />
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
                placeholder="Your Name"
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
                placeholder="Your Email"
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
                placeholder="Your Message"
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
          <p>© 2025 Kishore. All rights reserved.</p>
        </Footer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
