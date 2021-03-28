import styled from "styled-components";
import { BiCheck } from "react-icons/bi";

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
  width: 80%;
  height: 100%;
  margin: 0 auto;
  z-index: 100px;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    width: 60%;
  }
  @media screen and (max-width: 420px) {
    width: 80%;
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
  height: max-content;
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  box-sizing: border-box;
  color: var(--mainTheme);
  border-radius: 9px;
  background: linear-gradient(145deg, #aba9c2, #cbc9e6);
  box-shadow: 20px 20px 26px #adabc4, -20px -20px 26px #cfcdea;
`;
export const PricingHeading = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
`;
export const PricingPlan = styled.h5`
  font-size: 12px;
  margin-bottom: 15px;
`;
export const ProductDescContainer = styled.div`
  dispaly: flex
  flex-direction:column;
  align-items:flex-start;
  padding: 15px 5px;
  box-sizing: border-box;
  border-top: 1px solid var(--mainTheme);
  border-bottom: 1px solid var(--mainTheme);
  width:100%;
  margin-bottom:5px;
  line-height:1.5;
`;
export const ProductDescContent = styled.div`
  display: flex;
  align-items: center;
`;
export const PricingDesc = styled.p`
  font-size: 14px;
  font-weight: 200;
`;
export const CheckIcon = styled(BiCheck)`
  font-size: 20px;
  margin-right: 10px;
`;
export const PriceText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  margin: 0 auto;
`;
