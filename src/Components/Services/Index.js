import React from "react";
import { ServiceContainer, ServiceContontent } from "./ServiceElements";
import CardService from "./CardService";

function Services() {
  return (
    <>
      <ServiceContainer>
        <ServiceContontent>
          <CardService />
        </ServiceContontent>
      </ServiceContainer>
    </>
  );
}

export default Services;
