import styled from "styled-components";

const ContactContainer = styled.div`
  margin: -80px 20px 80px;
  font-family: "Open Sans", sans-serif;
  font-size: 12px;
  font-weight: bold;
`;

const ContactLabel = styled.p`
  margin-bottom: 5px;
`;

const ContactLink = styled.a`
  color: #53b896;
  text-decoration: none;
  &: hover {
    color: #53b896;
  }
`;

const EmailContact = ({ isMarket }) => {
  const contactLabel = `Hiányolsz egy ${isMarket ? "piacot" : "árust"}?`;
  const emailAddress = "felpenzzel.hu@gmail.com";
  const linkText = "Írj nekünk emailt!";
  return (
    <ContactContainer>
      <ContactLabel>{contactLabel}</ContactLabel>
      <ContactLink href={`mailto:${emailAddress}`}>{linkText}</ContactLink>
    </ContactContainer>
  );
};

export default EmailContact;
