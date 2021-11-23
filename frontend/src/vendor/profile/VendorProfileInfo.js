import Products from "./products/Products";
import VendorContacts from "./contacts/VendorContacts";
import VendorIntroduction from "./VendorIntroduction";
import Payment from "./payment/Payment";
import styled from "styled-components";

const ProfileComponents = styled.div`
  overflow-y: auto;
  margin-bottom: 20px;
`;

const VendorProfileInfo = ({
  products,
  facebook,
  instagram,
  website,
  email,
  phone,
  introductionLong,
  cardPayment,
}) => {
  return (
    <ProfileComponents>
      {products.length > 0 && <Products products={products} />}
      <Payment cardPayment={cardPayment} />
      <VendorContacts
        facebook={facebook}
        instagram={instagram}
        website={website}
        email={email}
        phone={phone}
      />
      <VendorIntroduction introductionLong={introductionLong} />
    </ProfileComponents>
  );
};

export default VendorProfileInfo;
