import emailLogo from "./email.svg";
import facebookLogo from "./facebook.svg";
import instagramLogo from "./instagram.svg";
import phoneLogo from "./phone.svg";
import webLogo from "./web.svg";
import "./VendorContacts.css";
import { v4 } from "uuid";
import styled from "styled-components";

const VendorPadding = styled.div`
  padding: 0 20px;
  margin-bottom: 20px;
`;

const ContactTitle = styled.h1`
  font-family: "Amatic SC", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #33221a;
`;

const ContactInfo = styled.div`
  text-align: left;
  align-content: center;
  margin-bottom: 20px;
  display: flex;
`;

const ContactLogo = styled.img`
  padding-right: 10px;
`;

const ContactLinks = styled.a`
  color: #53b896;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
  font-weight: bold;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VendorContacts = (props) => {
  const { facebook, instagram, website, email, phone } = props;
  const contacts = [
    {
      title: facebook,
      logo: facebookLogo,
      link: "https://facebook.com/",
    },
    {
      title: instagram,
      logo: instagramLogo,
      link: "https://instagram.com/",
    },
    {
      title: website,
      logo: webLogo,
      link: "",
    },
    {
      title: email,
      logo: emailLogo,
      link: "mailto:",
    },
    {
      title: phone,
      logo: phoneLogo,
      link: "tel:",
    },
  ];

  return (
    <VendorPadding>
      <ContactTitle>Elérhetőségek</ContactTitle>
      {contacts.map((contact, index) => {
        return (
          contact.title && (
            <ContactInfo key={v4()}>
              <ContactLogo src={contact.logo} alt="" />
              <ContactLinks
                target="_blank"
                rel="noopener noreferrer external"
                href={contact.link + contact.title}
              >
                {contact.title}
              </ContactLinks>
            </ContactInfo>
          )
        );
      })}
    </VendorPadding>
  );
};

export default VendorContacts;
