import React from "react";
import { useNavigate } from "react-router-dom"; 
import * as S from "../QuizFirst/Style"; 

const NextPage = () => {
  const navigate = useNavigate(); 

  const handleImageClick = (image) => {
    if (image === "동종") {
      navigate("/quiz2"); 
    } else {
      navigate("/false"); 
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Header>중고등부 선생님이</S.Header>
        <S.MidHeader>아닌 사람을 고르시오!</S.MidHeader>
        <S.GridContainer>
          <S.GridItem onClick={() => handleImageClick("기타성윤")}>
            <img src="/image/기타성윤.jpg" alt="이미지 1" />
          </S.GridItem>
          <S.GridItem onClick={() => handleImageClick("동종")}>
            <img src="/image/동종.jpg" alt="이미지 2" />
          </S.GridItem>
          <S.GridItem onClick={() => handleImageClick("현제")}>
            <img src="/image/현제.jpg" alt="이미지 3" />
          </S.GridItem>
          <S.GridItem onClick={() => handleImageClick("성윤")}>
            <img src="/image/성윤.jpg" alt="이미지 4" />
          </S.GridItem>
        </S.GridContainer>
      </S.Card>
    </S.Container>
  );
};

export default NextPage;
