import styled from "styled-components";

export const WorkingContainer = styled.div`
  display: flex;
  height: 60vh;
  position: relative;
  z-index: 50px;
  background: url("./images/polygon-scatter-haikei (1).svg") center center/cover;
`;
export const BolbTop = styled.img`
  height: 700px;
  position: absolute;
  left: -300px;
  top: -200px;
  object-fit: contain;
  z-index: -10px;
`;
export const BolbBtm = styled.img`
  height: 500px;
  position: absolute;
  right: -200px;
  bottom: -200px;
  object-fit: contain;
  z-index: -10px;
`;
export const WorkingContent = styled.div`
  display: grid;
  grid-gap: 15px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  height: 100%;
  z-index: 100px;
`;
export const WorkingCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 90%;
  margin: 0 auto;
  z-index: 100px;
`;
export const WorkingCardContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100px;
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  border-radius: 9px;
  background: linear-gradient(145deg, #aba9c2, #cbc9e6);
  box-shadow: 20px 20px 26px #adabc4, -20px -20px 26px #cfcdea;
`;
