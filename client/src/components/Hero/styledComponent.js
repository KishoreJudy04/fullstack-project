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
`;

export const ButtonSecondary = styled(ButtonPrimary)`
  background-color: transparent;
  color: white;
  border: 1px solid white;
`;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 3px solid white;
`;

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  background-color: #282c34;
  color: white;
`;
