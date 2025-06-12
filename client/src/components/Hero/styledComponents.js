import styled from "styled-components";

export const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem;
  background: linear-gradient(to right, #3f3d56, #4b4b8f);
  color: white;
`;

export const HeroText = styled.div`
  max-width: 50%;
`;

export const Highlight = styled.span`
  color: #00bcd4;
`;

export const Subtitle = styled.h2`
  font-weight: 400;
`;

export const Buttons = styled.div`
  margin-top: 1rem;
`;

export const ButtonPrimary = styled.button`
  background-color: #2196f3;
  color: white;
  padding: 10px 20px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1769aa;
  }
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #2196f3;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 3px solid white;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
`;

export const SocialIcons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1.5rem;
`;

export const SocialIconLink = styled.a`
  color: #222;
  background: white;
  border-radius: 6px;
  padding: 6px;
  font-size: 2rem;
  display: flex;
  align-items: center;
  transition: color 0.2s, background 0.2s;
  &:hover {
    color: #2196f3;
    background: #e3f2fd;
  }
`;
