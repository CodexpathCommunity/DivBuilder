import React from "react";
import PricingCard from "./PricingCard";
import {
  PricingContainer,
  PricingContent,
  PricingHeadText,
  PricingCardContainer,
} from "./PricingElements";

function Pricing() {
  const pricingData = [
    {
      heading: "Basic",
      subHeading: "Get the least best offer",
      price: "$350",
      description: [
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
      ],
    },
    {
      heading: "Premium",
      subHeading: "Get the least best offer",
      price: "$350",
      description: [
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
      ],
    },
    {
      heading: "Advanced",
      subHeading: "Get the least best offer",
      price: "$350",
      description: [
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
      ],
    },
    {
      heading: "Platinium",
      subHeading: "Get a wide range of services in one package",
      price: "$350",
      description: [
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
        {
          offer: "singlepage application",
        },
      ],
    },
  ];

  return (
    <>
      <PricingContainer>
        <PricingContent>
          <PricingHeadText>Pricing</PricingHeadText>
          <PricingCardContainer>
            {pricingData.map(({ heading, subHeading, price, description }) => (
              <PricingCard
                heading={heading}
                subHeading={subHeading}
                price={price}
                description={description}
              />
            ))}
          </PricingCardContainer>
        </PricingContent>
      </PricingContainer>
    </>
  );
}

export default Pricing;
