import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroTextContainer,
  HeroBigText,
  HeroSmallText,
  HeroImg,
  HeroBtn,
} from "./HeroElements";

function Hero() {
  return (
    <>
      <HeroContainer id="home">
        <HeroContent>
          <HeroTextContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <HeroBigText>Building The Future</HeroBigText>
            <HeroSmallText>
              We bring together a team of talented developers to make websites,
              web applications , mobile applications and providing solutions to
              digital branding.
            </HeroSmallText>
            <HeroBtn>Hire us</HeroBtn>
          </HeroTextContainer>

          <HeroImg
            transition={{ delay: 0.1, type: "spring", stiffness: 180 }}
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            src="./images/Team work_Two Color.svg"
          />
        </HeroContent>
      </HeroContainer>
    </>
  );
}

export default Hero;
