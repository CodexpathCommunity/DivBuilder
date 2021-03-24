import React from "react";
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
        <BolbTop src="./images/blob_6-2-20.svg" />
        <WorkingContent>
          <WorkingCardContainer>
            <WorkingCardContent>
              <h2>this is the works section</h2>
            </WorkingCardContent>
            <WorkingCardContent>
              <h2>this is the works section</h2>
            </WorkingCardContent>
            <WorkingCardContent>
              <h2>this is the works section</h2>
            </WorkingCardContent>
            <WorkingCardContent>
              <h2>this is the works section</h2>
            </WorkingCardContent>
            <WorkingCardContent>
              <h2>this is the works section</h2>
            </WorkingCardContent>
            <WorkingCardContent>
              <h2>this is the works section</h2>
            </WorkingCardContent>
          </WorkingCardContainer>
        </WorkingContent>
        <BolbBtm src="./images/blob_6-2-9.svg" />
      </WorkingContainer>
    </>
  );
}

export default Works;
