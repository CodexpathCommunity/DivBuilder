import { Button } from "@material-ui/core";
import styled from "styled-components";

export const WorkingContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 50px;
  border-radius: 0px;
  background: #b8aec6;
  box-shadow: inset 30px 30px 61px #b6acc4, inset -30px -30px 61px #bab0c8;
  background: url("./images/polygon-scatter-haikei (1).svg") center center/cover;
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

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
export const WorkHeadText = styled.h2`
  font-size: 25px;
  padding-bottom: 5px;
  border-bottom: 4px solid var(--mainTheme);
  width: 100%;
  margin-bottom: 10px;
  color: var(--mainTheme);
`;
export const WorkingCardContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  border-radius: 9px;
  background: linear-gradient(145deg, #aba9c2, #cbc9e6);
  box-shadow: 20px 20px 26px #adabc4, -20px -20px 26px #cfcdea;
`;
export const WorkImg = styled.img`
  width: 100%;
  height: 140px;
  object-fit: contain;
`;
export const WorkTextContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 5px 15px;
  box-sizing: border-box;
  color: var(--mainTheme);
`;
export const WorkType = styled.h4`
  font-size: 12px;
  font-weight: 10;
  margin-bottom: 5px;
`;
export const WorkHeading = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 5px;
`;
export const WorkDesc = styled.p`
  font-size: 15px;
  font-weight: 100;
  margin-bottom: 8px;
`;
export const WorkingBtn = styled(Button)`
  text-transform: inherit !important;
  font-size: 12px !important;
  background: var(--lightTheme) !important;
  color: var(--subTheme) !important;

  @media screen and (max-width: 320px) {
    font-size: 12px !important;
  }

  &:hover {
    background: var(--mainTheme) !important;
    color: #fff !important;
  }
`;
export const PageLink = styled.a`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
`;
