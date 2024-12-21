import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f0f4f8;
`;

// 카드 레이아웃
export const Card = styled.div`
  width: 50vw; /* 카드 너비 */
  height: 70vh; /* 카드 높이 */

  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// 헤더 스타일
export const Header = styled.div`
  background-color: #4285f4;
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 22px;
  font-weight: bold;
`;

export const MidHeader = styled.div`
  background-color: #4285f4;
  color: white;
  padding: 10px 0;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

// 이미지 그리드 컨테이너
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 배치 */
  gap: 8px; /* 이미지 간격 */
  padding: 16px;
  background-color: #f9fafb;
  height: calc(100% - 100px); /* 헤더를 제외한 나머지 공간 */
  box-sizing: border-box;
`;

// 그리드 아이템 (4칸 이미지)
export const GridItem = styled.div`
  width: 100%;
  padding-top: calc(50% - 8px); /* 높이를 카드 높이에 맞춤 */
  position: relative;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid gray;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;

// 푸터 영역
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f9fafb;
`;

// 푸터 아이콘 버튼
export const FooterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    width: 24px;
    height: 24px;
    color: #9ca3af;

    &:hover {
      color: #6b7280;
    }
  }
`;

// 확인 버튼
export const ConfirmButton = styled.button`
  background-color: #4285f4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  &:disabled {
    background-color: #a1c2fa;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #357ae8;
  }
`;
