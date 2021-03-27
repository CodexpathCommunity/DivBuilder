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
  DevIconContainer,
  PageLink,
} from "./DeveloperElements";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

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
        <DevImgContainer>
          <DevImg src="./images/designer.jpg" />
          <DevIconContainer>
            <PageLink href="https://www.linkedin.com/in/emmanuel-jacob-661a451bb/">
              <AiFillLinkedin />
            </PageLink>
            <PageLink href="https://github.com/CodexpathCommunity">
              <FaGithubSquare />
            </PageLink>
            <PageLink href="https://twitter.com/codexpath2">
              <FaTwitterSquare />
            </PageLink>
            <PageLink href="https://www.facebook.com/skyboy.ema">
              <AiFillFacebook />
            </PageLink>
            <PageLink href="https://www.instagram.com/skyboycode/">
              <AiFillInstagram />
            </PageLink>
            <PageLink href="https://www.youtube.com/channel/UCWNk7hxPmAg1u251-hTdunA/">
              <AiFillYoutube />
            </PageLink>
          </DevIconContainer>
        </DevImgContainer>
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
