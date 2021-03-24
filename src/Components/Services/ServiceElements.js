import styled from "styled-components";
import { motion } from "framer-motion";

export const ServiceContainer = styled.div`
  display: flex;
  background: var(--mainTheme);
  align-items: center;
  height: 100%;
`;

export const ServiceContontent = styled.div`
  display: grid;
  grid-gap: 15px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
`;
export const ServiceCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;
export const ServiceCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #fff;
  font-family: "Nunito", sans-serif;
  padding: 15px 25px;
  box-sizing: border-box;
  width: 90%;
  margin: 0 auto;
  border-radius: 26px;
  background: #302b63;
  box-shadow: inset 10px 10px 20px #1b1837, inset -10px -10px 20px #453e8f;
`;
export const CardImg = styled(motion.img)`
  height: 8rem;
  object-fit: contain;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;
export const ServiceHeading = styled.h2`
  font-size: 22px;
  padding: 20px;
  color: #fff;
  margin-bottom: 10px;
  border-bottom: 3px solid var(--glazeTheme);
`;
export const CardHeading = styled.h2`
  font-size: 20px;
  padding-bottom: 5px;
  border-bottom: 4px solid var(--mainTheme);
  width: 100%;
`;

export const CardDesc = styled.p`
  font-size: 14px;
  padding-top: 5px;
`;
