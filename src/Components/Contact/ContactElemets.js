import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  border-radius: 0px;
  background: linear-gradient(145deg, #bfbac8, #e3ddee);
  box-shadow: 5px 5px 100px #b4b0bd, -5px -5px 100px #f4eeff;
`;
export const ContactContent = styled.div`
  display:flex;
 align-items:center
 max-width:1200px;
 width:90%;
 margin:0 auto;
 padding:10px 5px;
 box-sizing:border-box;
 justify-content:space-between;
 color:var(--mainTheme);
`;
export const ContactFormContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex: 0.6;
  padding: 5px;
  box-sizing: border-box;
`;

export const ContactForm = styled.form`
  display: grid;
  grid-gap: 15px;
  width: 100%;
`;
export const GridGap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5px;
`;
export const InputContainer = styled.div`
  padding: 5px;
  border: 1px solid var(--mainTheme);
  width: 90%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
export const InputText = styled.h4`
  font-size: 14px;
  font-weight: 200;
  margin-right: 5px;
`;
export const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;

  &:focus {
    outline: none;
  }
`;
export const ContactDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.4;
  padding: 5px;
  box-sizing: border-box;
`;
export const ContactHeading = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: ${({ form }) => (form ? "15px" : "10px")};
`;
