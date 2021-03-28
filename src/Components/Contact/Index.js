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
  MessageField,
  SubmitBtn,
} from "./ContactElemets";
import emailjs from "emailjs-com";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "service_kk1fqyg",
        e.target,
        "user_W7s5J5ipgDjWdY4yR0NLs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.targer.reset();
  };
  return (
    <>
      <ContactContainer>
        <ContactContent>
          <ContactFormContainer>
            <ContactHeading form>Leave a message!</ContactHeading>
            <ContactForm onSubmit={sendEmail}>
              <GridGap>
                <InputContainer grid>
                  <InputText>Your Name:</InputText>
                  <InputField type="text" />
                </InputContainer>
                <InputContainer grid>
                  <InputText>Email:</InputText>
                  <InputField type="email" />
                </InputContainer>
              </GridGap>
              <InputContainer>
                <InputText>Subject:</InputText>
                <InputField type="text" />
              </InputContainer>
              <InputContainer end>
                <InputText>Your Message:</InputText>
                <MessageField
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                ></MessageField>
              </InputContainer>
              <SubmitBtn>Submit</SubmitBtn>
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
