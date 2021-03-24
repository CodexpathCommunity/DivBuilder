import React from "react";
import { CardDesc, CardHeading, CardImg, ServiceCard } from "./ServiceElements";

function CardService({ src, heading, desc }) {
  return (
    <ServiceCard
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
    >
      <CardImg
        src={src}
        alt={heading}
        initial={{ x: -40 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, stiffness: 100 }}
      />
      <CardHeading> {heading} </CardHeading>
      <CardDesc>{desc}</CardDesc>
    </ServiceCard>
  );
}

export default CardService;
