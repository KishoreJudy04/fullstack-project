import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  background: linear-gradient(120deg, #3f3d56 0%, #4b4b8f 100%);
  color: #fff;
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
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TextContent = styled.div`
  max-width: 600px;
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

export const PrimaryButton = styled.button`
  background: #2196f3;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1769aa;
  }
`;

export const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #2196f3;
    border-color: #2196f3;
  }
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
`;

export const ImageWrapper = styled.div`
  margin-left: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  border: 4px solid #fff;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
  background: #fff;
`;
