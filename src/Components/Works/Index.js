import React from "react";
import WorkingCard from "./WorkingCard";
import {
  BolbBtm,
  BolbTop,
  WorkingCardContent,
  WorkingContainer,
  WorkingContent,
  WorkingCardContainer,
} from "./WorkingElement";

function Works() {
  return (
    <>
      <WorkingContainer>
        <WorkingContent>
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
