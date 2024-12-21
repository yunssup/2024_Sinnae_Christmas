import React from "react";
import { useNavigate } from "react-router-dom"; 
import * as S from "../QuizFirst/Style"; 

const Second = () => {
  const navigate = useNavigate(); 

  const handleTextClick = (text) => {
    if (text === "정답") {
      navigate("/quiz3"); 
    } else {
      navigate("/false"); 
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Header>2024 성탄제의 주제성구로</S.Header>
        <S.MidHeader>올바른 것을 고르시오!</S.MidHeader>
        <S.GridContainer>
          <S.GridItem onClick={() => handleTextClick("오답1")}>
          하느님, 저희를 다시 일으켜 주소서. 당신 얼굴을 비추소서. 저희가 구원되리이다.
          </S.GridItem>
          <S.GridItem onClick={() => handleTextClick("오답2")}>
          보소서, 저는 주님의 종입니다. 말씀하신 대로 저에게 이루어지기를 바랍니다.
          </S.GridItem>
          <S.GridItem onClick={() => handleTextClick("정답")}>
          그분 앞에서 기뻐 춤추어라
          </S.GridItem>
          <S.GridItem onClick={() => handleTextClick("오답3")}>
          행복하십니다, 주님께서 하신 말씀이 이루어지리라고 믿으신 분!
          </S.GridItem>
        </S.GridContainer>
      </S.Card>
    </S.Container>
  );
};

export default Second;
