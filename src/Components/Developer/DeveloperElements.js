import { Button } from "@material-ui/core";
import styled from "styled-components";

export const DeveloperContent = styled.div`
  display: flex;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 15px 5px;
  justify-content: space-between;

  @media screen and (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const DeveloperTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  color: var(--mainTheme);
  width: 60%;

  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;
export const DevSub = styled.h4`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: ${({ last }) => (last ? "20px" : "15px")};
`;
export const DevH2 = styled.h2`
  font-size: 25px;
  font-weight: 600px;
  margin-bottom: 10px;
`;

export const DevText = styled.p`
  font-size: 14px;
  line-height: 1.5;
`;
export const SubSpan = styled.span`
  color: green;
`;
export const DevBtn = styled(Button)`
  text-transform: inherit !important;
  font-size: 12px !important;
  background: var(--mainTheme) !important;
  color: #fff !important;

  @media screen and (max-width: 320px) {
    font-size: 12px !important;
  }

  &:hover {
    background: var(--lightTheme) !important;
    color: var(--subTheme) !important;
  }
`;
export const DevImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 30%;

  @media screen and (max-width: 1024px) {
    width: 40%;
  }
  @media screen and (max-width: 768px) {
    width: 50%;
  }
  @media screen and (max-width: 640px) {
    width: 90%;
  }
`;
export const DevImg = styled.img`
  height: 220px;
  width: 250px;
  margin-top:10px;
  

  @media screen and (max-width:600px){{
      width:70%;
      margin:0;
  }
`;
export const DevIconContainer = styled.div`
  display: grid;
  color: var(--mainTheme);
  font-size: 30px;
`;
export const PageLink = styled.a`
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;
`;
