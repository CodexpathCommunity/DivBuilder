import React from "react";
import {
  HeaderContainer,
  HeaderContent,
  HeaderImg,
  HeaderSpan,
  HeaderText,
  HeaderLogoContainer,
} from "./HeaderElements";

function Header() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <HeaderLogoContainer>
            <HeaderImg
              src="./images/logo.png"
              alt="DivBuilder Transparent Logo"
            />
            <HeaderText>
              Div<HeaderSpan>Builder</HeaderSpan>
            </HeaderText>
          </HeaderLogoContainer>
        </HeaderContent>
      </HeaderContainer>
    </>
  );
}

export default Header;
