import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const HeaderContainer = styled.div`
  display: flex;
  height: 3.5rem;
  align-items: center;
  background: var(--mainTheme);
  width: 100%;
  border-bottom: 2px solid #fff;
  position: sticky;
  top: 0;
  z-index: 500;

  @media screen and (max-width: 240px) {
    height: 3rem;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
`;
export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
export const HeaderText = styled.h2`
  font-family: "Press Start 2P", cursive;
  color: var(--subTheme);
  font-size: 28px;
  cursor: default;

  @media screen and (max-width: 540px) {
    font-size: 25px;
  }
  @media screen and (max-width: 240px) {
    font-size: 20px;
  }
`;

export const HeaderSpan = styled.span`
  color: #fff;
`;
export const HeaderImg = styled.img`
  height: 28px;
  object-fit: contain;
  margin-right: 10px;

  @media screen and (max-width: 540px) {
    height: 25px;
  }
  @media screen and (max-width: 240px) {
    font-size: 20px;
  }
`;
export const HeaderLinkContainer = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 640px) {
    display: block;
    position: absolute;
    top: 3.6rem;
    left: 0;
    background: var(--lightTheme);
    width: 50%;
    height: 90vh;
    border-right: #ccc 1px solid;
    opacity: 0.9;
    padding: 30px;
    transform: ${({ show }) => (show ? "translate(0)" : "translate(-400px)")};
    z-index: 100;
  }
`;
export const HeaderLinkContent = styled.li`
  margin: 0 10px;
  color: #fff;
  padding-bottom: 5px;
  list-style-type: none;
  cusor: pointer;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  cursor: pointer;

  @media screen and (max-width: 640px) {
    color: var(--mainTheme);
    margin: 0 0 25px 0;
    font-size: 25px;
  }
  @media screen and (max-width: 320px) {
    margin: 0 0 20px 0;
    font-size: 20px;
  }

  &:hover {
    border-bottom: 1px solid var(--subTheme);
  }
`;
export const HeaderIcon = styled(FaBars)`
  color: #fff;
  font-size: 25px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 640px) {
    display: block;
  }
  @media screen and (max-width: 240px) {
    font-size: 20px;
  }
`;
