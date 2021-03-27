import React from "react";
import {
  PricingCardContent,
  PricingDesc,
  PricingHeading,
  PricingPlan,
  ProductDescContainer,
  ProductDescContent,
  CheckIcon,
  PriceText,
} from "./PricingElements";

const PricingCard = ({ heading, subHeading, price, description }) => {
  return (
    <>
      <PricingCardContent>
        <PricingHeading> {heading} </PricingHeading>
        <PricingPlan> {subHeading} </PricingPlan>
        <ProductDescContainer>
          {description.map(({ offer }) => (
            <ProductDescContent>
              <CheckIcon />
              <PricingDesc> {offer} </PricingDesc>
            </ProductDescContent>
          ))}
        </ProductDescContainer>
        <PriceText> {price} </PriceText>
      </PricingCardContent>
    </>
  );
};

export default PricingCard;
