// src/App.js
import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Style"; 

const Start = () => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate(); 

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleStartClick = () => {
    if (!isChecked) {
      alert("체크박스를 선택하세요!");
      return;
    }
    navigate("/quiz1"); // 다음 페이지로 이동
  };

  return (
    <S.Container>
      <S.Card>
        <h1>재시작 하시겠습니까?</h1>
        <S.CheckboxContainer>
          <S.Recaptcha>
            <S.RecaptchaLogo />
            <span>당신은 신내동성당 중고등부가 아닙니다 ㅡㅡ+</span>
          </S.Recaptcha>
        </S.CheckboxContainer>
        <S.StartButton disabled={!isChecked} onClick={handleStartClick}>
          시작하기
        </S.StartButton>
      </S.Card>
    </S.Container>
  );
};

export default Start;
