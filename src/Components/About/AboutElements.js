import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export const AboutContainer = styled.div`
  display: flex;
  height: 100%;
  background: url(./images/blob.svg) center center/cover;
  margin-top: 15px;
`;
export const AboutContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  font-family: "Nunito", sans-serif;
  padding: 20px 15px;

  @media screen and (max-width: 420px) {
    flex-direction: column;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;

  @media screen and (max-width: 420px) {
    width: 100%;
  }
`;
export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 60%;

  @media screen and (max-width: 420px) {
    width: 100%;
    margin-top: 10px;
  }
`;
export const HeadingText = styled.h4`
  font-size: 22px;
  color: var(--mainTheme);
  margin-bottom: 10px;

  @media screen and (max-width: 540px) {
    font-size: 20px;
  }
  @media screen and (max-width: 420px) {
    font-size: 18px;
  }
`;
export const FeatureBigText = styled.h2`
  font-size: 40px;
  color: var(--mainTheme);
  margin-bottom: 15px;

  @media screen and (max-width: 540px) {
    font-size: 35px;
  }
  @media screen and (max-width: 420px) {
    font-size: 28px;
  }
`;
export const FeatureSmallText = styled.p`
  font-size: 18px;
  font-weight: 25;
  color: var(--mainTheme);
  line-height: 1.5;

  @media screen and (max-width: 540px) {
    font-size: 16px;
  }
  @media screen and (max-width: 420px) {
    font-size: 14px;
  }
`;
export const SpanTag = styled.span`
  font-size: 20px;
  font-weight: 700;

  @media screen and (max-width: 420px) {
    font-size: 16px;
  }
`;

export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IconText = styled.h6`
  font-size: 14px;
  color: var(--mainTheme);
  margin-top: 10px;

  @media screen and (max-width: 540px) {
    font-size: 12px;
  }
  @media screen and (max-width: 240px) {
    font-size: 10px;
  }
`;
export const ReactIcon = styled(FaReact)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);

  @media screen and (max-width: 420px) {
    font-size: 20px !important;
    padding: 8px;
  }
`;
export const FigmaIcon = styled(SiFigma)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);

  @media screen and (max-width: 420px) {
    font-size: 20px !important;
    padding: 8px;
  }
`;
export const FirebaseIcon = styled(SiFirebase)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);

  @media screen and (max-width: 420px) {
    font-size: 20px !important;
    padding: 8px;
  }
`;
export const StripeIcon = styled(FaCcStripe)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);

  @media screen and (max-width: 420px) {
    font-size: 20px !important;
    padding: 8px;
  }
`;
export const ResponsiveIcon = styled(MdDevices)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);

  @media screen and (max-width: 420px) {
    font-size: 20px !important;
    padding: 8px;
  }
`;
export const StarIcon = styled(FaStar)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);

  @media screen and (max-width: 420px) {
    font-size: 20px !important;
    padding: 8px;
  }
`;
