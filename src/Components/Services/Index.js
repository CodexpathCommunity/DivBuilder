import React from "react";
import {
  ServiceCardContainer,
  ServiceContainer,
  ServiceContontent,
  ServiceHeading,
} from "./ServiceElements";
import CardService from "./CardService";

function Services() {
  const CardData = [
    {
      src: "./images/Designer _Isometric (1).svg",
      heading: "Web Design",
      desc:
        "We make the vision clear for you by designing your idea with tools like Figma and Adobe XD.",
    },
    {
      src: "./images/HTML_Outline.svg",
      heading: "Websites",
      desc:
        "We build your website from scratch and also get the source code which you can upgrade in the future.",
    },
    {
      src: "./images/World-wide-web_Flatline.svg",
      heading: "Web Applications",
      desc:
        "We build fullstack social applications with functionalities like Databse, payment gateways, Authentications and more...",
    },
    {
      src: "./images/Bug Fixed_Isometric.svg",
      heading: "Web Maintainance",
      desc:
        "We re-design and make your existing website to be more performant by fixing bugs and upgrading the code base.",
    },
    {
      src: "./images/Mobile Phone_Monochromatic.svg",
      heading: "Mobile Applications",
      desc:
        "Let's make your IOS and android applications and get them to your app store. ",
    },
    {
      src: "./images/SEO_Isometric.svg",
      heading: "SEO",
      desc:
        "We make your website to be serchable on any search engine by optimizing your website.",
    },
    {
      src: "./images/Social Media_Isometric.svg",
      heading: "Social Media Branding",
      desc:
        "We create social contents that can grow your personal and business social media presence. ",
    },
    {
      src: "./images/Marketing_Isometric.svg",
      heading: "Digital Marketing",
      desc:
        "Our experts put time to study to make your brand grow throw digital marketing.",
    },
  ];
  return (
    <>
      <ServiceContainer>
        <ServiceContontent>
          <ServiceHeading>Our Services</ServiceHeading>
          <ServiceCardContainer>
            {CardData.map(({ src, heading, desc }) => (
              <CardService src={src} heading={heading} desc={desc} />
            ))}
          </ServiceCardContainer>
        </ServiceContontent>
      </ServiceContainer>
    </>
  );
}

export default Services;
