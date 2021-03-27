import { Button } from "@material-ui/core";
import styled from "styled-components";

export const DeveloperContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 50px;
  border-radius: 0px;
  background: #b8aec6;
  box-shadow: inset 30px 30px 61px #b6acc4, inset -30px -30px 61px #bab0c8;
`;
export const DeveloperContent = styled.div`
 display:flex;
 align-items:center
 max-width:1200px;
 width:90%;
 margin:0 auto;
 padding:10px 5px;
 box-sizing:border-box;
 justify-content:space-evenly;
 border-radius: 0px;
background: #ededed;
box-shadow:  9px 9px 31px #c9c9c9,
             -9px -9px 31px #ffffff;

@media screen and (max-width:600px){
    flex-direction:column;
    align-items:center;
}
`;
export const DeveloperTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  color: var(--mainTheme);
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
export const DevImg = styled.img`
  height: 250px;
  width: 250px;

  @media screen and (max-width:600px){{
      width:70%;
      margin:0 auto;
  }
`;