import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  font-family:경기천년바탕_Regular;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f9fafb;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px; /* 작은 화면에서는 padding 줄이기 */
  }

  @media (max-width: 768px) {
    padding: 14px; /* 아이패드에서는 패딩 조정 */
  }
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

  @media (max-width: 480px) {
    width: 90%; /* 모바일에서는 카드 크기 축소 */
    padding-top: 20px;
    padding-bottom: 20px;
  }

  @media (max-width: 900px) {
    width: 90%; /* 아이패드에서는 카드 크기 조정 */
    padding-top: 30px;
    padding-bottom: 30px;
  }
`;

// 제목 스타일
export const Title = styled.h1`

  font-size: 20px;
  color: #1f2937;
  margin-bottom: 20px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 18px; /* 작은 화면에서는 폰트 크기 축소 */
  }
`;

export const span = styled.span`
  font-size: 16px;
  color: #1f2937;

  @media (max-width: 480px) {
    font-size: 12px; /* 작은 화면에서는 폰트 크기 축소 */
  }

`;

export const boxspan = styled.span`
  font-size: 12px;
  color: #333333;

  @media (max-width: 480px) {
    font-size: 10px; /* 작은 화면에서는 폰트 크기 축소 */
  }
`;

// 체크박스 컨테이너
export const CheckboxContainer = styled.div`
  margin: 24px 0;

  @media (max-width: 480px) {
    margin: 16px 0; /* 모바일에서 여백 줄이기 */
  }

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

  @media (max-width: 480px) {
    font-size: 0.9rem; /* 작은 화면에서는 폰트 크기 축소 */
  }

  @media (max-width: 900px) {
    font-size: 0.95rem; /* 아이패드에서는 폰트 크기 약간 증가 */
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

  @media (max-width: 480px) {
    width: 16px;
    height: 16px; /* 작은 화면에서는 체크박스 크기 축소 */
  }

  @media (max-width: 900px) {
    width: 17px;
    height: 17px; /* 아이패드에서는 체크박스 크기 약간 조정 */
  }
`;

// Recaptcha 영역
export const Recaptcha = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;
  font-size: 18px;
  color: #6b7280;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 12px;
  width: 50%;
  margin: 12px auto 0 auto;
  background-color: #f3f4f6;

  @media (max-width: 480px) {
    width: 90%; /* 작은 화면에서 Recaptcha 영역 크기 축소 */
  }

  @media (max-width: 768px) {
    width: 70%; /* 아이패드에서 Recaptcha 영역 크기 조정 */
  }
`;

// 버튼 스타일
export const StartButton = styled.button`
  background-color: ${(props) => (props.disabled ? "#d1d5db" : "#2563eb")};
  color: ${(props) => (props.disabled ? "#9ca3af" : "white")};
  border: none;
  padding: 12px 20px;
  font-size: 15px;
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

  @media (max-width: 480px) {
    padding: 10px 16px; /* 작은 화면에서는 버튼 크기 축소 */
    font-size: 14px; /* 작은 화면에서는 폰트 크기 축소 */
  }

  @media (max-width: 768px) {
    padding: 12px 18px; /* 아이패드에서는 버튼 크기 약간 확장 */
    font-size: 15px; /* 아이패드에서 폰트 크기 약간 증가 */
  }
`;
