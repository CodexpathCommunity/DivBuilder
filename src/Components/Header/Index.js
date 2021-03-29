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
  NavLinks,
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
            <NavLinks
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <HeaderLinkContent onClick={() => setShow(!show)}>
                Home
              </HeaderLinkContent>
            </NavLinks>
            <NavLinks
              to="packages"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <HeaderLinkContent onClick={() => setShow(!show)}>
                Packages
              </HeaderLinkContent>
            </NavLinks>
            <NavLinks
              to="service"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <HeaderLinkContent onClick={() => setShow(!show)}>
                Services
              </HeaderLinkContent>
            </NavLinks>
            <NavLinks
              to="works"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <HeaderLinkContent onClick={() => setShow(!show)}>
                Works
              </HeaderLinkContent>
            </NavLinks>
            <NavLinks
              to="pricing"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <HeaderLinkContent onClick={() => setShow(!show)}>
                Pricing
              </HeaderLinkContent>
            </NavLinks>
            <NavLinks
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <HeaderLinkContent onClick={() => setShow(!show)}>
                Contact
              </HeaderLinkContent>
            </NavLinks>
          </HeaderLinkContainer>

          <HeaderIcon onClick={() => setShow(!show)} />
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}

export default Header;
