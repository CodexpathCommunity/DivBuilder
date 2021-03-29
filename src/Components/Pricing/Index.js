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
          offer: "Single page portfolio website",
        },
        {
          offer: "Source code",
        },
        {
          offer: "Figma design",
        },
        {
          offer: "Available in 4 days.",
        },
        {
          offer: "Hosting and domain",
        },
      ],
    },
    {
      heading: "Premium",
      subHeading: "Get our premuim offer",
      price: "$550",
      description: [
        {
          offer: "3 - 5 page blog website",
        },
        {
          offer: "Figma designs",
        },
        {
          offer: "Source code",
        },
        {
          offer: "Available in one week",
        },
        {
          offer: "2 rewiews",
        },
        {
          offer: "Hosting and domain",
        },
      ],
    },
    {
      heading: "Advanced",
      subHeading: "Get advanced offers and step your business up ",
      price: "$750",
      description: [
        {
          offer: "5+ page blogs ",
        },
        {
          offer: "Web applicaion",
        },
        {
          offer: "Database",
        },
        {
          offer: "Postings and downloads",
        },
        {
          offer: "Authentications",
        },
        {
          offer: "Available in Two weeks ",
        },
        {
          offer: "Hosting and domains",
        },
      ],
    },
    {
      heading: "Platinium",
      subHeading: "Get a wide range of services in one package",
      price: "$1200 ++",
      description: [
        {
          offer: "E-commerce shop",
        },
        {
          offer: "Payments",
        },
        {
          offer: "Admin dashboard",
        },
        {
          offer: "Database and store",
        },
        {
          offer: "User authentications",
        },
        {
          offer: "Protected Routes",
        },
        {
          offer: "Unlimited Reviews",
        },
        {
          offer: "Available in 3 - 4 weeks",
        },
        {
          offer: "Hostings and domains",
        },
      ],
    },
  ];

  return (
    <>
      <PricingContent id="pricing">
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
