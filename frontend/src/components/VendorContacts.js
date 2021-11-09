import emailLogo from "./icons/social/email.svg";
import facebookLogo from "./icons/social/facebook.svg";
import instagramLogo from "./icons/social/instagram.svg";
import phoneLogo from "./icons/social/phone.svg";
import webLogo from "./icons/social/web.svg";
import "../styles/VendorContacts.css";
import { v4 } from "uuid";

const VendorContacts = (props) => {
  const { facebook, instagram, website, email, phone } = props;
  const contacts = [
    {
      title: facebook,
      logo: facebookLogo,
      link: "https://facebook.com/"
    },
    {
      title: instagram,
      logo: instagramLogo,
      link: "https://instagram.com/"
    },
    {
      title: website,
      logo: webLogo,
      link: "https:"
    },
    {
      title: email,
      logo: emailLogo,
      link: "mailto:"
    },
    {
      title: phone,
      logo: phoneLogo,
      link: "tel:"
    }
  ];

  return (
    <div className="contact-container">
      <h1 className="contact-title">Elérhetőségek</h1>
      {contacts.map((contact, index) => {
        return (
          contact.title && (
            <div key={v4()} className="contact-info">
              <img src={contact.logo} className="contact-logo" alt="" />
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="contact-links"
                href={contact.link + contact.title}
              >
                {contact.title}
              </a>
            </div>
          )
        );
      })}
    </div>
  );
};

export default VendorContacts;
