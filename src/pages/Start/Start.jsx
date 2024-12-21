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
        <S.Title>당신은 신내동성당 중고등부입니까?</S.Title>
        <S.CheckboxContainer>
          <S.CustomCheckbox>
            <S.CheckboxInput
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <S.span>저는 신내동성당 중고등부입니다.</S.span>
          </S.CustomCheckbox>
          <S.Recaptcha>
            <S.boxspan>신내동성당 중고등부 인증 바로가기</S.boxspan>
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
