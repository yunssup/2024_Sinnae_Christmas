// src/App.js
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Style"; 

const Start = () => {
  const navigate = useNavigate(); 

  const handleStartClick = () => {
    navigate("/"); // "/start" 경로로 이동
  };

  return (
    <S.Container>
      <S.Card>
        <S.Title>재시작 하시겠습니까?</S.Title>
        <S.CheckboxContainer>
          <S.Recaptcha>
            <span>당신은 신내동성당 중고등부가 아닙니다 ㅡㅡ+</span>
          </S.Recaptcha>
        </S.CheckboxContainer>
        <S.StartButton onClick={handleStartClick}>
          재시작하기
        </S.StartButton>
      </S.Card>
    </S.Container>
  );
};

export default Start;
