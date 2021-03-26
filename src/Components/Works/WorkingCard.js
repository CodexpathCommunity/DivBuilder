import React from "react";
import {
  WorkImg,
  WorkingCardContent,
  WorkType,
  WorkHeading,
  WorkingBtn,
  WorkDesc,
  WorkTextContainer,
  PageLink,
} from "./WorkingElement";

function WorkingCard() {
  return (
    <WorkingCardContent>
      <WorkImg src="./images/amazonChallange.png" />
      <WorkTextContainer>
        <WorkType>Web Application</WorkType>
        <WorkHeading>Amazon website model</WorkHeading>
        <WorkDesc>
          Fullstack e-commerce application inspired by amazon with best
          fuctionalities.
        </WorkDesc>
        <PageLink href="https://www.amazon.com/">
          <WorkingBtn>View</WorkingBtn>
        </PageLink>
      </WorkTextContainer>
    </WorkingCardContent>
  );
}

export default WorkingCard;
