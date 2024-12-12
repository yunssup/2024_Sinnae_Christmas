// src/pages/NextPage/NextPage.jsx
import React from "react";
import * as S from "../QuizFirst/Style"; // 스타일 재사용

const NextPage = () => {
  return (
    <S.Container>
      <S.Card>
        <S.Header>중고등부 선생님이</S.Header>
        <S.MidHeader>아닌 사람을 고르시오!</S.MidHeader>
        <S.GridContainer>
        <S.GridItem><img src="/image/기타성윤.jpg" alt="이미지 1" /></S.GridItem>
        <S.GridItem><img src="/image/동종.jpg" alt="이미지 2" /></S.GridItem>
        <S.GridItem><img src="/image/현제.jpg" alt="이미지 3" /></S.GridItem>
        <S.GridItem><img src="/image/성윤.jpg" alt="이미지 4" /></S.GridItem>
        </S.GridContainer>
      </S.Card>
    </S.Container>
  );
};

export default NextPage;
