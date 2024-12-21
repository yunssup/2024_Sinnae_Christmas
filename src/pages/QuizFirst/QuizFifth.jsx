import React from "react";
import { useNavigate } from "react-router-dom"; 
import * as S from "../QuizFirst/Style"; 

const Fifth = () => {
  const navigate = useNavigate(); 

  const handleImageClick = (image) => {
    if (image === "정답") {
      navigate("/finish"); 
    } else {
      navigate("/finish"); 
    }
  };

  return (
    <S.Container>
      <S.Card>
        <S.Header>다음 중 신내동성당 최고 멋쟁이를</S.Header>
        <S.MidHeader>고르시오!</S.MidHeader>
        <S.GridContainer2>
          <S.GridItem2 onClick={() => handleImageClick("정답")}>
            <img src="/image/단체1.jpg" alt="이미지 1" />
          </S.GridItem2>
          <S.GridItem2 onClick={() => handleImageClick("정답")}>
            <img src="/image/단체2.jpg" alt="이미지 2" />
          </S.GridItem2>
          <S.GridItem2 onClick={() => handleImageClick("정답")}>
          <img src="/image/단체3.jpg" alt="이미지 1" />
          </S.GridItem2>

        </S.GridContainer2>
      </S.Card>
    </S.Container>
  );
};

export default Fifth;
