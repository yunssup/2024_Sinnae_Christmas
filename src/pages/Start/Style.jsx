// src/styles.js
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f4f8;
`;

export const Card = styled.div`
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  padding: 30px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 1.2rem;
  color: #333333;
  margin-bottom: 20px;
`;

export const CheckboxContainer = styled.div`
  margin: 20px 0;
`;

export const CustomCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: #555;
`;

export const CheckboxInput = styled.input`
  margin-right: 10px;
  transform: scale(1.5);
`;

export const Recaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 0.9rem;
  color: #888;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  margin: 10px auto 0 auto;
`;

export const RecaptchaLogo = styled.div`
  width: 20px;
  height: 20px;
  background-color: #4285f4;
  border-radius: 50%;
  margin-right: 10px;
`;

export const StartButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#4285f4")};
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#d9d9d9" : "#357ae8")};
  }
`;
