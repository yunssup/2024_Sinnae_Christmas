import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f9fafb;
  padding: 16px;
  box-sizing: border-box;
`;

// 카드 레이아웃
export const Card = styled.div`
  text-align: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  width: 80%;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
`;

// 제목 스타일
export const Title = styled.h1`
  font-size: 20px;
  color: #1f2937;
  margin-bottom: 20px;
  font-weight: bold;
`;
export const span = styled.span`
    font-size: 16px;
    color: #1f2937;
`
export const boxspan = styled.span`
    font-size: 12px;
    color: #333333;

`
// 체크박스 컨테이너
export const CheckboxContainer = styled.div`
  margin: 24px 0;
`;

// 커스텀 체크박스 라벨
export const CustomCheckbox = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1rem;
  color: #374151;
  gap: 12px;

  &:hover {
    color: #1f2937;
  }
`;
// 체크박스 스타일
export const CheckboxInput = styled.input`
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #d1d5db;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
  &:checked {
    background-color: #2563eb;
    border-color: #2563eb;
  }

  &:checked::after {
    content: "✔";
    display: block;
    color: white;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
  }

  &:focus {
    outline: 2px solid #93c5fd;
    outline-offset: 2px;
  }
`;

// Recaptcha 영역
export const Recaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  font-size: 0.9rem;
  color: #6b7280;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  width: 50%;
  margin: 12px auto 0 auto;
  background-color: #f3f4f6;

`;
// 버튼 스타일
export const StartButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#d1d5db" : "#2563eb")};
  color: ${(props) => (props.disabled ? "#9ca3af" : "white")};
  border: none;
  padding: 12px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: ${(props) => (props.disabled ? "#d1d5db" : "#1d4ed8")};
  }

  &:active {
    transform: ${(props) => (props.disabled ? "none" : "scale(0.97)")};
  }
`;
