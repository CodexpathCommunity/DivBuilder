import React from "react";
import PricingCard from "./PricingCard";
import {
  PricingContainer,
  PricingContent,
  PricingHeadText,
  PricingCardContainer,
} from "./PricingElements";

function Pricing() {
  return (
    <>
      <PricingContainer>
        <PricingContent>
          <PricingHeadText>Pricing</PricingHeadText>
          <PricingCardContainer>
            <PricingCard />
            <PricingCard />
            <PricingCard />
            <PricingCard />
          </PricingCardContainer>
        </PricingContent>
      </PricingContainer>
    </>
  );
}

export default Pricing;
