import styled from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 4rem;
`;

export const Info = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Textarea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const SubmitButton = styled.button`
  padding: 0.8rem;
  background-color: #2196f3;
  color: white;
  border: none;
  border-radius: 4px;
`;
