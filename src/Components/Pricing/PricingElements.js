import styled from "styled-components";

export const PricingContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  z-index: 50px;
  border-radius: 0px;
  background: #b8aec6;
  box-shadow: inset 30px 30px 61px #b6acc4, inset -30px -30px 61px #bab0c8;
`;

export const PricingContent = styled.div`
  display: grid;
  grid-gap: 15px;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 40px 0;
  height: 100%;
  z-index: 100px;
`;

export const PricingCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
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

export const PricingHeadText = styled.h2`
  font-size: 25px;
  padding-bottom: 5px;
  border-bottom: 4px solid var(--mainTheme);
  width: 100%;
  margin-bottom: 10px;
  color: var(--mainTheme);
`;

export const PricingCardContent = styled.div`
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
export const PricingHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;
export const PricingPlan = styled.h5`
  font-size: 12px;
  margin-bottom: 15px;
`;
export const pricingDesc = styled.p`
  font-size: 14px;
`;
