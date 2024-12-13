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
        <h1>당신은 신내동성당 중고등부입니까?</h1>
        <S.CheckboxContainer>
          <S.CustomCheckbox>
            <S.CheckboxInput
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span>저는 신내동성당 중고등부입니다.</span>
          </S.CustomCheckbox>
          <S.Recaptcha>
            <S.RecaptchaLogo />
            <span>정말인지 확인해본다ㅋㅋ</span>
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
