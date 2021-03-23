import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  height: 4rem;
  background: var(--mainTheme);
  width: 100%;
  border-bottom: 2px solid #fff;
  position:sticky:
  top:0;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  box-sizing: border-box;
  margin: 0 auto;
  align-items: center;
`;
export const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const HeaderText = styled.h2`
  font-family: "Press Start 2P", cursive;
  color: rgb(255, 72, 0);
  font-size: 28px;
`;

export const HeaderSpan = styled.span`
  color: #fff;
`;
export const HeaderImg = styled.img`
  height: 35px;
  object-fit: contain;
  margin-right: 10px;
`;
