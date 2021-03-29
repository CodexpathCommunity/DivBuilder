import React from "react";
import {
  ContactContent,
  ContactFormContainer,
  ContactDetailContainer,
  ContactHeading,
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
        "service_wbmuqan",
        "template_i999p2y",
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
    e.target.reset();
  };
  return (
    <>
      <ContactContent id="contact">
        <ContactFormContainer>
          <ContactHeading form>Leave a message!</ContactHeading>
          <ContactForm onSubmit={sendEmail}>
            <InputContainer>
              <InputText>Your Name:</InputText>
              <InputField
                type="text"
                placeholder="John Wick"
                name="from_name"
              />
            </InputContainer>
            <InputContainer>
              <InputText>Email:</InputText>
              <InputField
                type="email"
                placeholder="Johnwick@gmail.com"
                name="from_email"
              />
            </InputContainer>
            <InputContainer>
              <InputText>Subject:</InputText>
              <InputField type="text" placeholder="subject" name="subject" />
            </InputContainer>
            <InputContainer end>
              <InputText>Your Message:</InputText>
              <MessageField
                placeholder="leave your message here"
                name="message"
                id=""
                cols="10"
                rows="10"
              ></MessageField>
            </InputContainer>
            <SubmitBtn type="submit">Submit</SubmitBtn>
          </ContactForm>
        </ContactFormContainer>
        <ContactDetailContainer>
          <ContactHeading>Contact Info.</ContactHeading>
          <InputText>
            Feel free to contact us for career prospect, business services and
            other professional inquiries.
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
    </>
  );
};

export default Contact;
