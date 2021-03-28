import React from "react";
import { FooterContainer } from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      DivBuilder &copy;{new Date().getFullYear()} all rights reserved.
    </FooterContainer>
  );
};

export default Footer;
