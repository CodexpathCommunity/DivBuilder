import React from "react";
import { PricingCardContent } from "./PricingElements";

const PricingCard = () => {
  return (
    <>
      <PricingCardContent>
        <PricingHeading>Basic</PricingHeading>
        <PricingPlan>Get the least best plan</PricingPlan>
        <pricingDesc></pricingDesc>
        <pricingDesc></pricingDesc>
        <pricingDesc></pricingDesc>
        <pricingDesc></pricingDesc>
      </PricingCardContent>
    </>
  );
};

export default PricingCard;
