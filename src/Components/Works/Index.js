import React from "react";
import WorkingCard from "./WorkingCard";
import {
  BolbBtm,
  BolbTop,
  WorkingContainer,
  WorkingContent,
  WorkingCardContainer,
  WorkHeadText,
} from "./WorkingElement";

function Works() {
  return (
    <>
      <WorkingContainer>
        <WorkingContent>
          <WorkHeadText>Our Projects</WorkHeadText>
          <WorkingCardContainer>
            <WorkingCard />
            <WorkingCard />
            <WorkingCard />
            <WorkingCard />
            <WorkingCard />
            <WorkingCard />
          </WorkingCardContainer>
        </WorkingContent>
      </WorkingContainer>
    </>
  );
}

export default Works;
