import styled from "styled-components";

export const AboutSection = styled.section`
  display: flex;
  align-items: center;
  padding: 4rem;
  gap: 2rem;
`;

export const Text = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 40%;
  border-radius: 10px;
`;

export const Stats = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

export const StatBox = styled.div`
  text-align: center;
  h3 {
    font-size: 2rem;
    color: #2196f3;
  }
`;
