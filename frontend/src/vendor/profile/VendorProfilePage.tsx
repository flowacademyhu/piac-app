import { useParams, Redirect } from "react-router-dom";
import VendorHeader from "./VendorHeader";
import { fetchVendorById } from "../../api/Service";
import VendorProfileInfo from "./VendorProfileInfo";
import VendorProfileMarkets from "./VendorProfileMarkets";
import { useQuery } from "react-query";
import { Helmet } from "react-helmet";
import IdPrameter from "types/IdParameter";

const VendorProfilePage = () => {
  const vendorId = useParams<IdPrameter>().id;

  const { data: vendor, isLoading } = useQuery(["vendor", vendorId], () =>
    fetchVendorById(vendorId)
  );

  return (
    <>
      {!isLoading &&
        (vendor ? (
          <>
            <Helmet>
              <title>{vendor.name}</title>
              <meta name="description" content={vendor.intro} />
            </Helmet>
            <VendorHeader
              profilePic={vendor.profilePic}
              name={vendor.name}
              intro={vendor.intro}
            />
            <VendorProfileInfo
              products={vendor.products}
              cardPayment={vendor.cardPayment}
              facebook={vendor.facebook}
              instagram={vendor.instagram}
              website={vendor.webSite}
              email={vendor.email}
              phone={vendor.phone}
              introductionLong={vendor.introductionLong}
            />
            <VendorProfileMarkets />
          </>
        ) : (
          <>
            <div style={{ height: "90%" }} />
            <Redirect to="/arusok" />
          </>
        ))}
    </>
  );
};

export default VendorProfilePage;
