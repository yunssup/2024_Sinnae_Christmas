import React from "react";
import { useNavigate } from "react-router-dom"; 
import * as S from "../QuizFirst/Style"; 

const Fourth = () => {
  const navigate = useNavigate(); 

  const handleTextClick = (text) => {
    if (text === "정답") {
      navigate("/quiz5"); 
    } else {
      navigate("/false"); 
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Header>오늘은 대림 몇주일 일까요?</S.Header>
        <S.MidHeader>정답을 고르시오!</S.MidHeader>
        <S.GridContainer>
          <S.GridItem onClick={() => handleTextClick("오답1")}>
          대림 1주일
          </S.GridItem>
          <S.GridItem onClick={() => handleTextClick("오답2")}>
          대림 2주일
          </S.GridItem>
          <S.GridItem onClick={() => handleTextClick("오답3")}>
          대림 3주일
          </S.GridItem>
          <S.GridItem onClick={() => handleTextClick("정답")}>
          대림 4주일
          </S.GridItem>
        </S.GridContainer>
      </S.Card>
    </S.Container>
  );
};

export default Fourth;
