import emailLogo from './icons/social/email.svg';
import facebookLogo from './icons/social/facebook.svg';
import instagramLogo from './icons/social/instagram.svg';
import phoneLogo from './icons/social/phone.svg';
import webLogo from './icons/social/web.svg';
import '../styles/VendorContacts.css';

const VendorContacts = ({ facebook, instagram, website, email, phone }) => {
  const contacts = [
    {
      title: facebook,
      logo: facebookLogo
    },
    {
      title: instagram,
      logo: instagramLogo
    },
    {
      title: website,
      logo: webLogo
    },
    {
      title: email,
      logo: emailLogo
    },
    {
      title: phone,
      logo: phoneLogo
    }
  ];

  return (
    <div className='container'>
      <h1 className='title'>Elérhetőségek</h1>
      {contacts.map((contact) => {
        return (
          contact.title && (
            <div className='info'>
              <img src={contact.logo} className='logo' alt='' />
              <span>{contact.title}</span>
            </div>
          )
        );
      })}
    </div>
  );
};

export default VendorContacts;
