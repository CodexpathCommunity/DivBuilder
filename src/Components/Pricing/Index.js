import React from "react";
import PricingCard from "./PricingCard";
import {
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
    </>
  );
}

export default Pricing;
