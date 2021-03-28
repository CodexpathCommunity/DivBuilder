import styled from "styled-components";
import { Button } from "@material-ui/core";
import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

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
  width: 95%;
  margin: auto;
`;
export const GridGap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96%;
  margin: 0 auto;
`;
export const InputContainer = styled.div`
  padding: 5px;
  border: 1px solid var(--mainTheme);
  width: ${({ grid }) => (grid ? "47%" : "95%")};
  display: flex;
  align-items: ${({ end }) => (end ? "flex-start" : "center")};
  margin: ${({ grid }) => (grid ? "none" : "0 auto")};
`;
export const InputText = styled.h4`
  font-size: 14px;
  font-weight: 200;
  margin-right: 5px;
  line-height: 1.2;
`;
export const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;
  height: ${({ end }) => (end ? "80px" : "28px")};

  &:focus {
    outline: none;
  }
`;
export const MessageField = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  padding: 0 10px;
  box-sizing: border-box;
  font-size: 12px;
  height: 30px
      border-style: none; 
    border-color: Transparent; 
    overflow: auto; 

  &:focus {
      border: 0 none #FFF;
    overflow: hidden;
    outline:none;
  }
`;
export const ContactDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 0.4;
  padding: 15px;
  box-sizing: border-box;
`;
export const ContactHeading = styled.h2`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: ${({ form }) => (form ? "20px" : "10px")};
`;

export const ContactTextDetailContainer = styled.div`
  display: grid;
  grid-gap: 15px;
  margin-top: 15px;
  padding: 10px;
  box-sizing: border-box;
`;
export const ContactDetailFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const DetailedTextContainer = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;
`;
export const DetailHeading = styled.h3`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 5px;
`;
export const DetailText = styled.h5`
  font-size: 14px;
  font-weight: 100;
`;
export const LocationIcon = styled(MdLocationOn)`
  font-size: 18px;
  padding: 10px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);
  border-radius: 999px;
`;
export const PhoneIcon = styled(FaPhoneAlt)`
  font-size: 18px;
  padding: 10px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);
  border-radius: 999px;
`;
export const EmailIcon = styled(MdEmail)`
  font-size: 18px;
  padding: 10px;
  border: 1px solid var(--mainTheme);
  color: var(--mainTheme);
  border-radius: 999px;
`;
export const SubmitBtn = styled(Button)`
  text-transform: inherit !important;
  font-size: 12px !important;
  background: var(--mainTheme) !important;
  color: #fff !important;

  @media screen and (max-width: 320px) {
    font-size: 12px !important;
  }

  &:hover {
    background: var(--lightTheme) !important;
    color: var(--subTheme) !important;
  }
`;
