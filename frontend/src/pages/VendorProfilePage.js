import React from 'react';
import Footer from '../components/Footer';
import VendorHeader from '../components/VendorHeader';
import VendorInfoNav from '../components/VendorInfoNav';

const VendorProfilePage = (props) => {
  const {
    logo,
    name,
    description,
    cash,
    card,
    facebook,
    instagram,
    website,
    email,
    phone,
    introduction,
    products
  } = props;
  return (
    <div>
      <VendorHeader
        logo={logo}
        name={name}
        description={description}
        cash={cash}
        card={card}
      />
      <VendorInfoNav
        products={products}
        facebook={facebook}
        instagram={instagram}
        website={website}
        email={email}
        phone={phone}
        introduction={introduction}
      />
      <Footer />
    </div>
  );
};

export default VendorProfilePage;
