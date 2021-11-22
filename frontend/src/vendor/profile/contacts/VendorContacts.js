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
              <img src={contact.logo} className="contact-logo" alt="" />
              <a
                target="_blank"
                rel="noopener noreferrer external"
                className="contact-links"
                href={contact.link + contact.title}
              >
                {contact.title}
              </a>
            </ContactInfo>
          )
        );
      })}
    </VendorPadding>
  );
};

export default VendorContacts;
