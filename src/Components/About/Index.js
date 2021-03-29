import React from "react";
import {
  AboutContainer,
  AboutContent,
  TextContainer,
  HeadingText,
  FeatureBigText,
  FeatureSmallText,
  SpanTag,
  IconContainer,
  IconContent,
  ReactIcon,
  IconText,
  FigmaIcon,
  FirebaseIcon,
  StripeIcon,
  ResponsiveIcon,
  StarIcon,
} from "./AboutElements";

function About() {
  return (
    <>
      <AboutContainer id="packages">
        <AboutContent>
          <TextContainer>
            <HeadingText>Packages</HeadingText>
            <FeatureBigText>
              Core <br /> Packages
            </FeatureBigText>
            <FeatureSmallText>
              Best packages with the <SpanTag> latest technologies</SpanTag>
              <br /> to make modern websites
            </FeatureSmallText>
          </TextContainer>
          <IconContainer>
            <IconContent>
              <FigmaIcon />
              <IconText>Figma UI design</IconText>
            </IconContent>
            <IconContent>
              <ReactIcon
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
              />
              <IconText>React.js Codebase</IconText>
            </IconContent>
            <IconContent>
              <FirebaseIcon />
              <IconText>Firebase Database</IconText>
            </IconContent>
            <IconContent>
              <StripeIcon />
              <IconText>Payment Gateways powered by stripe</IconText>
            </IconContent>
            <IconContent>
              <ResponsiveIcon />
              <IconText>Mobile Responsive applications</IconText>
            </IconContent>
            <IconContent>
              <StarIcon />
              <IconText>5 star customer service</IconText>
            </IconContent>
          </IconContainer>
        </AboutContent>
      </AboutContainer>
    </>
  );
}

export default About;
