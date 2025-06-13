import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgb(70, 92, 233) 0%,
    rgb(118, 15, 221) 100%
  );
  background-position: center;
  color: #fff;

  @media (max-width: 768px) {
    background: url("https://i.ibb.co/S4RTrB0y/IMG-9602-removebg-preview.png")
      no-repeat center center;
    background-size: cover;
    min-height: 100vh;
    padding: 60px 1.5rem 2rem 1.5rem;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(63, 61, 86, 0.7);
  z-index: 1;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  padding: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    min-height: 85vh;
  }
`;

export const TextContent = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const MainHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

export const AccentText = styled.span`
  color: #00bcd4;
`;

export const SubHeading = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #e0e0e0;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: #fff;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: #00bcd4;
  }
  &:active {
    color: rgb(250, 1, 84);
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
`;

export const ImageWrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media (max-width: 768px) {
    margin-left: 0;
    order: 2;
  }
`;

export const ProfileImage = styled.img`
  width: 350px;
  height: auto;
  margin-top: 5px;
  animation: ${float} 3s ease-in-out infinite;

  @media (max-width: 768px) {
    width: 80%;
    display: none;
    margin: 0 auto;
  }
`;

export const ResumeButton = styled.a`
  display: inline-block;
  color: white;
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px #667eea;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px #764ba2;
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 15px #764ba2;
  }
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1rem;
  }
`;
