import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactFormContainer,
  ContactDetailContainer,
  ContactHeading,
  GridGap,
  ContactForm,
  InputContainer,
  InputText,
  InputField,
} from "./ContactElemets";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactContent>
          <ContactFormContainer>
            <ContactHeading form>Leave a message!</ContactHeading>
            <ContactForm>
              <GridGap>
                <InputContainer>
                  <InputText>Your Name:</InputText>
                  <InputField type="text" />
                </InputContainer>
                <InputContainer>
                  <InputText>Email:</InputText>
                  <InputField type="email" />
                </InputContainer>
              </GridGap>
            </ContactForm>
          </ContactFormContainer>
          <ContactDetailContainer>
            <ContactHeading>Contact Info.</ContactHeading>
            <h2>this is the contact form</h2>
          </ContactDetailContainer>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
