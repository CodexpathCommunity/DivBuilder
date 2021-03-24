import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  background: var(--mainTheme);
  align-items: center;
  height: 100%;
`;

export const ServiceContontent = styled.div`
  display: grid;
  grid-tempelate-columns: repeat(4, 1fr);
  grid-gap: 15px;
  justify-content: space-between;
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  padding: 40px 0;
`;
export const ServiceCard = styled.div`
 display:flex;
 flex-direction:column
 align-items:flex-start;
 padding:15px;
 height:25rem;
 width:20rem;
border-radius: 26px;
background: #302b63;
box-shadow: inset 10px 10px 20px #1b1837,
            inset -10px -10px 20px #453e8f;
`;
