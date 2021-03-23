import styled from "styled-components";
import { FaReact } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { SiFigma } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { MdDevices } from "react-icons/md";
import { FaStar } from "react-icons/fa";

export const AboutContainer = styled.div`
  display: flex;
  height: 40vh;
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
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 40%;
`;
export const HeadingText = styled.h4`
  font-size: 22px;
  color: var(--mainTheme);
  margin-bottom: 10px;
`;
export const FeatureBigText = styled.h2`
  font-size: 40px;
  color: var(--mainTheme);
  margin-bottom: 15px;
`;
export const FeatureSmallText = styled.p`
  font-size: 18px;
  font-weight: 25;
  color: var(--mainTheme);
  line-height: 1.5;
`;
export const SpanTag = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  width: 60%;
`;
export const IconContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ReactIcon = styled(FaReact)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);
`;
export const FigmaIcon = styled(SiFigma)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);
`;
export const FirebaseIcon = styled(SiFirebase)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);
`;
export const StripeIcon = styled(FaCcStripe)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);
`;
export const ResponsiveIcon = styled(MdDevices)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);
`;
export const StarIcon = styled(FaStar)`
  font-size: 25px !important;
  font-weight: 600 !important;
  color: var(--mainTheme);
  padding: 10px;
  border-radius: 999px;
  border: 2px solid var(--mainTheme);
`;
export const IconText = styled.h6`
  font-size: 14px;
  color: var(--mainTheme);
  margin-top: 10px;
`;
