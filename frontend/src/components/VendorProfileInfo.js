import Products from "./Products";
import VendorContacts from "./VendorContacts";
import VendorIntroduction from "./VendorIntroduction";

const VendorProfileInfo = ({
  products,
  facebook,
  instagram,
  website,
  email,
  phone,
  introductionLong,
}) => {
  return (
    <div className="profile-components">
      <Products products={products} />
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
