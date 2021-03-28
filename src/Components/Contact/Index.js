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
  LocationIcon,
  ContactTextDetailContainer,
  ContactDetailFlex,
  DetailedTextContainer,
  DetailHeading,
  DetailText,
  PhoneIcon,
  EmailIcon,
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
            <InputText>
              Feel free to contact us for career prospect, business services and
              other professional inquiries
            </InputText>
            <ContactTextDetailContainer>
              <ContactDetailFlex>
                <LocationIcon />
                <DetailedTextContainer>
                  <DetailHeading>Location</DetailHeading>
                  <DetailText>Enugu, NG.</DetailText>
                </DetailedTextContainer>
              </ContactDetailFlex>
              <ContactDetailFlex>
                <PhoneIcon />
                <DetailedTextContainer>
                  <DetailHeading>Phone</DetailHeading>
                  <DetailText>+2347015688584</DetailText>
                </DetailedTextContainer>
              </ContactDetailFlex>
              <ContactDetailFlex>
                <EmailIcon />
                <DetailedTextContainer>
                  <DetailHeading>Email</DetailHeading>
                  <DetailText>codexpath3@gmail.com</DetailText>
                </DetailedTextContainer>
              </ContactDetailFlex>
            </ContactTextDetailContainer>
          </ContactDetailContainer>
        </ContactContent>
      </ContactContainer>
    </>
  );
};

export default Contact;
