import React from "react";
import { useNavigate } from "react-router-dom"; 
import * as S from "../QuizFirst/Style"; 

const Third = () => {
  const navigate = useNavigate(); 

  const handleImageClick = (image) => {
    if (image === "예진") {
      navigate("/quiz4"); 
    } else {
      navigate("/false"); 
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Header>다음중 MBTI가 F인</S.Header>
        <S.MidHeader>선생님을 고르시오!</S.MidHeader>
        <S.GridContainer>
          <S.GridItem onClick={() => handleImageClick("윤서")}>
            <img src="/image/윤서.jpg" alt="이미지 1" />
          </S.GridItem>
          <S.GridItem onClick={() => handleImageClick("예진")}>
            <img src="/image/예진.jpg" alt="이미지 2" />
          </S.GridItem>
          <S.GridItem onClick={() => handleImageClick("현제")}>
            <img src="/image/현제2.jpg" alt="이미지 3" />
          </S.GridItem>
          <S.GridItem onClick={() => handleImageClick("서현")}>
            <img src="/image/성윤.jpg" alt="이미지 4" />
          </S.GridItem>
        </S.GridContainer>
      </S.Card>
    </S.Container>
  );
};

export default Third;
