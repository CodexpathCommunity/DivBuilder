import styled from "styled-components";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";

export const HeroContainer = styled.div`
  height: 70vh;
  position: relative;
  background: url("./images/heroBg.svg") no-repeat center center/cover;
  background: #0f0c29; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29);
  background: linear-gradient(to right, #24243e, #302b63, #0f0c29);

  @media screen and (max-width: 1024px) {
    height: 40vh;
  }
  @media screen and (max-width: 768px) {
    height: 60vh;
  }
  @media screen and (max-width: 540px) {
    height: 80vh;
  }
  @media screen and (max-width: 320px) {
    height: 90vh;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`;
export const HeroTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: 90%;
    align-items: center;
  }
`;
export const HeroBigText = styled.h2`
  font-size: 35px;
  color: #fff;
  margin-bottom: 10px;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 414px) {
    font-size: 32px;
  }
  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
  @media screen and (max-width: 320px) {
    font-size: 26px;
  }
`;
export const HeroSmallText = styled.h4`
  font-size: 20px;
  line-height: 1.5;
  color: #fff;
  margin-bottom: 20px;
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: 414px) {
    font-size: 18px;
  }
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;
export const HeroImg = styled(motion.img)`
  height: 320px;
  object-fit: contain;

  @media screen and (max-width: 1024px) {
    height: 250px;
  }
  @media screen and (max-width: 768px) {
    height: 280px;
  }
  @media screen and (max-width: 540px) {
    height: 250px;
  }
  @media screen and (max-width: 414px) {
    height: 200px;
  }
  @media screen and (max-width: 385px) {
    height: 180px;
  }
  @media screen and (max-width: 360px) {
    height: 160px;
  }
  @media screen and (max-width: 320px) {
    height: 150px;
  }
`;

export const HeroBtn = styled(Button)`
  text-transform: inherit !important;
  font-size: 20px !important;
  background: var(--lightTheme) !important;
  color: var(--subTheme) !important;

  @media screen and (max-width: 320px) {
    font-size: 16px !important;
  }

  &:hover {
    background: var(--mainTheme) !important;
    color: #fff !important;
  }
`;
