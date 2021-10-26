import emailLogo from "./icons/social/email.svg";
import facebookLogo from "./icons/social/facebook.svg";
import instagramLogo from "./icons/social/instagram.svg";
import phoneLogo from "./icons/social/phone.svg";
import webLogo from "./icons/social/web.svg";
import "../styles/VendorContacts.css";

const VendorContacts = (props) => {
  const { facebook, instagram, website, email, phone } = props;
  const contacts = [
    {
      title: facebook,
      logo: facebookLogo,
      link: "https:",
    },
    {
      title: instagram,
      logo: instagramLogo,
      link: "https:",
    },
    {
      title: website,
      logo: webLogo,
      link: "https:",
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
    <div className="container">
      <h1 className="title">Elérhetőségek</h1>
      {contacts.map((contact) => {
        return (
          contact.title && (
            <div className="info">
              <img src={contact.logo} className="logo" alt="" />
              <a href={contact.link + contact.title}>{contact.title}</a>
            </div>
          )
        );
      })}
    </div>
  );
};

export default VendorContacts;
