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

function WorkingCard({ src, type, heading, desc, link, download }) {
  return (
    <WorkingCardContent>
      <WorkImg src={src} />
      <WorkTextContainer>
        <WorkType>{type}</WorkType>
        <WorkHeading>{heading}</WorkHeading>
        <WorkDesc>{desc}</WorkDesc>
        <PageLink href={link} download={download}>
          <WorkingBtn>View</WorkingBtn>
        </PageLink>
      </WorkTextContainer>
    </WorkingCardContent>
  );
}

export default WorkingCard;
