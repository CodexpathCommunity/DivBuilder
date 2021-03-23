import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderImg,
  HeaderSpan,
  HeaderText,
  HeaderLogoContainer,
  HeaderLinkContainer,
  HeaderLinkContent,
  HeaderIcon,
} from "./HeaderElements";

function Header({ show, setShow }) {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogoContainer onClick={() => setShow(!show)}>
            <HeaderImg
              src="./images/logo.png"
              alt="DivBuilder Transparent Logo"
            />
            <HeaderText>
              Div<HeaderSpan>Builder</HeaderSpan>
            </HeaderText>
          </HeaderLogoContainer>

          <HeaderLinkContainer show={show}>
            <HeaderLinkContent onClick={() => setShow(!show)}>
              Home
            </HeaderLinkContent>
            <HeaderLinkContent onClick={() => setShow(!show)}>
              About
            </HeaderLinkContent>
            <HeaderLinkContent onClick={() => setShow(!show)}>
              Services
            </HeaderLinkContent>
            <HeaderLinkContent onClick={() => setShow(!show)}>
              Gallery
            </HeaderLinkContent>
            <HeaderLinkContent onClick={() => setShow(!show)}>
              Pricing
            </HeaderLinkContent>
            <HeaderLinkContent onClick={() => setShow(!show)}>
              Contact
            </HeaderLinkContent>
          </HeaderLinkContainer>

          <HeaderIcon onClick={() => setShow(!show)} />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}

export default Header;
