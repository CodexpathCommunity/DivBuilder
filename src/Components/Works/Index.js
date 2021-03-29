import React from "react";
import WorkingCard from "./WorkingCard";
import {
  BolbBtm,
  BolbTop,
  WorkingContainer,
  WorkingContent,
  WorkingCardContainer,
  WorkHeadText,
} from "./WorkingElement";

function Works() {
  const workData = [
    {
      src: "./images/Amazon.png",
      type: "Fullstack web app",
      heading: "Amazon Model",
      desc:
        "E-commerce shop inpired by the original amazon. made with with express running on firebase serverless cloud fuctions.",
      link: "https://clone-c04c9.web.app/",
    },
    {
      src: "./images/Apple.png",
      type: "website",
      heading: "Apple website model",
      desc:
        "Multiple page blog website like the apple home page that can help boost your brand and sales.",
      link: "https://apple-clone-c616c.web.app/",
    },
    {
      src: "./images/Dolla.png",
      type: "website",
      heading: "Dollar",
      desc:
        "Bitcon pricing website to price vendor rate for the clents that want to invest in bitcons.",
      link: "https://dolla-78aa9.web.app/",
    },
    {
      src: "./images/covid-19.png",
      type: "web app",
      heading: "covid-19 tracker",
      desc:
        "Made at the peak of covid-19 to track the world daily statistics of covid 19 from any where.",
      link: "https://covid-tracker-7766d.web.app/",
    },
    {
      src: "./images/figmablog.png",
      type: "Figma web design",
      heading: "Modern Blog Design",
      desc:
        "10 pages + of a modern blog made with figma and available for use. ",
      link: "./images/blog-club-free-ui-kit-for-figma.fig",
      download: true,
    },
    {
      src: "./images/figmaffood.png",
      type: "Figma web design",
      heading: "Foodly IOS ui kit",
      desc: "Food delivery user interface designed in figma.",
      link: "./images/foodly.zip",
      download: true,
    },
  ];
  return (
    <>
      <WorkingContainer id="works">
        <WorkingContent>
          <WorkHeadText>Our Projects</WorkHeadText>
          <WorkingCardContainer>
            {workData.map(({ src, type, heading, desc, link, download }) => (
              <WorkingCard
                src={src}
                type={type}
                heading={heading}
                desc={desc}
                link={link}
                download={download}
              />
            ))}
          </WorkingCardContainer>
        </WorkingContent>
      </WorkingContainer>
    </>
  );
}

export default Works;
