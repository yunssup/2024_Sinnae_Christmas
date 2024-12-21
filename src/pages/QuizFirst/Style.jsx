import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  font-family:경기천년바탕_Regular;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f9fafb;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 480px) {
    padding: 10px; /* 작은 화면에서 패딩 줄이기 */
  }

  @media (max-width: 768px) {
    padding: 14px; /* 아이패드에서 패딩 조정 */
  }
`;

// 카드 레이아웃
export const Card = styled.div`
  width: 100%;
  max-width: 500px; /* 최대 너비 설정 */
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 480px) {
    max-width: 100%; /* 모바일에서 카드 크기 전체로 확장 */
  }

  @media (max-width: 768px) {
    max-width: 95%; /* 아이패드에서 카드 크기 조정 */
  }
`;
// 헤더 스타일
export const Header = styled.div`
  background-color: #2563eb;
  color: white;
  padding: 16px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;

  @media (max-width: 480px) {
    font-size: 20px; /* 작은 화면에서 폰트 크기 축소 */
    padding: 12px;
  }
  @media (max-width: 768px) {
    font-size: 22px; /* 아이패드에서는 폰트 크기 약간 조정 */
  }
`;

// 중간 헤더
export const MidHeader = styled.div`
  background-color: #3b82f6;
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 16px; /* 작은 화면에서 폰트 크기 축소 */
    padding: 10px;
  }

  @media (max-width: 768px) {
    font-size: 17px; /* 아이패드에서는 폰트 크기 약간 조정 */
  }
`;

// 이미지 그리드 컨테이너
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 배치 */
  gap: 5px; /* 이미지 간격 */
  padding: 8px;
  background-color: #f9fafb;
  box-sizing: border-box;
`;

// 세로 배열을 위한 플렉스 컨테이너
export const GridContainer2 = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배열 */
  gap: 5px;
  padding: 8px;
  background-color: #f9fafb;
  box-sizing: border-box;
  height: 100%; /* 높이를 부모 컨테이너에 맞게 설정 */

`;

// 그리드 아이템
export const GridItem = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1; /* 정사각형 비율 */
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #e5e7eb;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
  color: #374151;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 480px) {
    font-size: 12px; /* 모바일에서 폰트 크기 축소 */
  }

  @media (max-width: 768px) {
    font-size: 15px; /* 아이패드에서는 폰트 크기 약간 조정 */
  }
`;

// 그리드 아이템 (이미지를 가운데 정렬)
export const GridItem2 = styled.div`
  position: relative;
  width: 100%;
  height: 200px; /* 원하는 높이 설정 */
  display: flex;
  align-items: center; /* 세로 가운데 정렬 */
  justify-content: center; /* 가로 가운데 정렬 */
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지를 꽉 채우되, 비율을 유지 */
  }
`;


// 푸터 영역
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f3f4f6;

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 12px;
    align-items: flex-start;
  }

  @media (max-width: 768px) {
    padding: 14px;
  }
`;

// 푸터 아이콘 버튼
export const FooterButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  svg {
    width: 28px;
    height: 28px;
    color: #6b7280;

    &:hover {
      color: #4b5563;
    }
  }

  @media (max-width: 480px) {
    svg {
      width: 24px;
      height: 24px; /* 모바일에서 아이콘 크기 축소 */
    }
  }

  @media (max-width: 768px) {
    svg {
      width: 26px;
      height: 26px; /* 아이패드에서 아이콘 크기 약간 줄이기 */
    }
  }
`;

// 확인 버튼
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;

  &:disabled {
    background-color: #93c5fd;
    cursor: not-allowed;
  }

  &:hover:enabled {
    background-color: #2563eb;
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    padding: 10px 18px; /* 모바일에서 버튼 크기 축소 */
    font-size: 14px; /* 모바일에서 폰트 크기 축소 */
  }

  @media (max-width: 768px) {
    padding: 12px 22px; /* 아이패드에서 버튼 크기 조정 */
    font-size: 15px; /* 아이패드에서 폰트 크기 조정 */
  }
`;
