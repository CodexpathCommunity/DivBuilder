import React from "react";
import {
  DeveloperContainer,
  DeveloperContent,
  DevSub,
  DevBtn,
  DevH2,
  DevText,
  SubSpan,
  DeveloperTextContainer,
  DevImgContainer,
  DevImg,
} from "./DeveloperElements";

function Developer() {
  return (
    <DeveloperContainer>
      <DeveloperContent>
        <DeveloperTextContainer>
          <DevSub>Meet our lead developer</DevSub>
          <DevH2>Hi 👋, I'm Emmanuel Jacob.</DevH2>
          <DevText>
            I'm great at frontend With React, Redux and Firebase backend.
            <br />I can contribute to building your brand with my skills.
          </DevText>
          <DevSub last>
            Hire me from <SubSpan>$40/hr</SubSpan> and I promise you
            productivity.
          </DevSub>
          <DevBtn>Download CV</DevBtn>
        </DeveloperTextContainer>
        <DevImg src="./images/designer.jpg" />
      </DeveloperContent>
    </DeveloperContainer>
  );
}

export default Developer;

//meet our lead develope
//Hi, I'm Emmanuel Jacob.
//I'm a fullstack React developer and also great at frontend With React, Redux and Firebase backend.
//I can contribute to building your brand with my skills too
//Hire me from $40/hr and I promise you productivity.
//download cv.
//I'm a freelance developer and i'm in charge of distributig roles for the team
//image
