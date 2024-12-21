import styled from "styled-components";

// 전체 컨테이너
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #f9fafb;
  padding: 16px;
  box-sizing: border-box;
`;

// 카드 레이아웃
export const Card = styled.div`
  width: 90%;
  max-width: 500px; /* 최대 너비 설정 */
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.02);
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
`;

// 중간 헤더
export const MidHeader = styled.div`
  background-color: #3b82f6;
  color: white;
  padding: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

// 이미지 그리드 컨테이너
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열 배치 */
  gap: 12px; /* 이미지 간격 */
  padding: 16px;
  background-color: #f9fafb;
  box-sizing: border-box;
`;

// 세로 배열을 위한 플렉스 컨테이너
export const GridContainer2 = styled.div`
  display: flex;
  flex-direction: column; /* 세로 배열 */
  gap: 12px;
  padding: 16px;
  background-color: #f9fafb;
  box-sizing: border-box;
`;

// 그리드 아이템
export const GridItem = styled.div`
  position: relative;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1; /* 정사각형 비율 */
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
  border: 2px solid #e5e7eb;
  transition: transform 0.2s, box-shadow 0.2s;
  text-align: center;
  font-size: 16px; /* 텍스트 크기 */
  font-weight: 500; /* 텍스트 두께 */
  color: #374151; /* 텍스트 색상 */
  background-color: #ffffff; /* 배경색 */
  border-radius: 8px; /* 모서리 둥글게 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: background-color 0.2s, color 0.2s;

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
`;

// 세로형 그리드 아이템
export const GridItem2 = styled(GridItem)`
  aspect-ratio: unset;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: auto;
    height: 100%;
    object-fit: contain;
  }
`;

// 푸터 영역
export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: #f3f4f6;
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
`;
