import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import VendorHeader from '../components/VendorHeader';
import VendorInfoNav from '../components/VendorInfoNav';

const VendorProfilePage = ({ vendorId }) => {
  const [vendor, setVendor] = useState({});

  // ***** Test data *****
  vendor.logo =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png';
  vendor.name = 'Vendor Name';
  vendor.description =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad blanditiis facere porro dolores.';
  vendor.cash = true;
  vendor.cardPayment = true;
  vendor.products = ['product1', 'product2'];
  vendor.facebook = 'facebook.link';
  vendor.instagram = 'instagram.link';
  vendor.website = 'website.link';
  vendor.email = 'mail.@example,com';
  vendor.phone = '+36 1 555 5555';
  vendor.intro =
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio cum, voluptatem magnam, animi dolor sunt, iure veritatis quaerat repellat porro deleniti adipisci sequi. Explicabo iure impedit blanditiis delectus? Explicabo, accusantium eligendi. Earum minus corrupti maiores maxime, ipsum fugit perferendis neque optio odio voluptate blanditiis qui natus beatae debitis culpa accusantium quo quisquam saepe repudiandae voluptatum ducimus animi! Error distinctio placeat reiciendis ipsa eligendi ullam debitis quaerat voluptatem quibusdam. Iure pariatur assumenda nisi rem laborum quibusdam veritatis voluptate facere tenetur tempore possimus autem rerum exercitationem quae itaque et officiis non, ea reiciendis cumque fugiat sed nesciunt necessitatibus. Esse architecto iure atque consectetur minus ducimus, et dignissimos illum ipsa eum enim facilis dolor officia, corporis sit illo quis maxime debitis! Labore officia quibusdam eos dolorum aliquam est quisquam, similique facilis cum hic iusto';
  // ***** Test data end *****

  useEffect(() => {
    const fetchVendor = async () => {
      const response = await axios.get(
        'localhost:8081/v1/api/vendor/' + vendorId
      );
      setVendor(response.data);
    };
    fetchVendor();
  }, [vendorId]);

  return (
    <>
      <VendorHeader
        logo={vendor.logo}
        name={vendor.name}
        description={vendor.description}
        cardPayment={vendor.cardPayment}
      />
      <VendorInfoNav
        products={vendor.products}
        facebook={vendor.facebook}
        instagram={vendor.instagram}
        website={vendor.website}
        email={vendor.email}
        phone={vendor.phone}
        introduction={vendor.intro}
      />
      <Footer />
    </>
  );
};

export default VendorProfilePage;
