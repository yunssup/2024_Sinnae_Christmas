// src/App.js
import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Style"; 

const Finish = () => {
  const navigate = useNavigate(); 

  const handleStartClick = () => {
    navigate("/"); // "/" 경로로 이동
  };

  return (
    <S.Container>
      <S.Card>
        <h1>당신은 신내동성당 중고등부입니까?</h1>
        <S.CheckboxContainer>
          <S.Recaptcha>
            <S.RecaptchaLogo />
            <span>당신은 신내동성당 중고등부 학생입니다❤️</span>
          </S.Recaptcha>
        </S.CheckboxContainer>
        <S.StartButton onClick={handleStartClick}>
          ❤️ 간식 받아가기 ❤️
        </S.StartButton>
      </S.Card>
    </S.Container>
  );
};

export default Finish;
