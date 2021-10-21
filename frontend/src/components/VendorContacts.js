import emailLogo from './icons/social/email.svg'
import facebookLogo from './icons/social/facebook.svg'
import instagramLogo from './icons/social/instagram.svg'
import phoneLogo from './icons/social/phone.svg'
import webLogo from './icons/social/web.svg'
import '../styles/VendorContacts.css'

const VendorContacts = (props) => {
    const {facebook, instagram, website, email, phone} = props;

    return (
        <div className="container">
            <h1 className="title">Elérhetőségek</h1>
            {facebook && (
                <div className="info">
                    <img src={facebookLogo} className="logo" alt=""/>
                    <span>{facebook}</span>
                </div>)}
            {instagram && (
                <div className="info">
                    <img src={instagramLogo} className="logo" alt=""/>
                    <span>{instagram}</span>
                </div>)}
            {website && (
                <div className="info">
                    <img src={webLogo} className="logo" alt=""/>
                    <span>{website}</span>
                </div>)}
            {email && (
                <div className="info">
                    <img src={emailLogo} className="logo" alt=""/>
                    <span>{email}</span>
                </div>)}
            {phone && (
                <div className="info">
                    <img src={phoneLogo} className="logo" alt=""/>
                    <span>{phone}</span>
                </div>)}
        </div>
    );
}

export default VendorContacts;