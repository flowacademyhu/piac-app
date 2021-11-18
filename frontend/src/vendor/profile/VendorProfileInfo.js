import Products from "./products/Products";
import VendorContacts from "./contacts/VendorContacts";
import VendorIntroduction from "./VendorIntroduction";
import Payment from "./payment/Payment";

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
    <div className="profile-components">
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
    </div>
  );
};

export default VendorProfileInfo;
