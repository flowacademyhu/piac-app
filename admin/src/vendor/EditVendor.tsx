import { fetchVendorById, updateVendor } from "components/Service";
import { useMutation, useQuery } from "react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { VendorInput } from "./Vendor";
import VendorForm from "./VendorForm";

const EditVendor = () => {
  const navigate = useNavigate();

  const id = useParams().id ?? "";

  const {
    data: vendor,
    isLoading,
    isError,
  } = useQuery("vendor", () => fetchVendorById(id), {
    cacheTime: 0,
  });

  const editVendorMutation = useMutation(
    (vendor: VendorInput) => updateVendor(vendor, id),
    {
      onSuccess: () => navigate("/arus"),
    }
  );

  const submitForm = (vendor: VendorInput) => editVendorMutation.mutate(vendor);

  if (!id) {
    return <Navigate to="/arus" replace />;
  }

  if (isLoading) {
    return <>Betöltés...</>;
  }

  if (isError) {
    return <>Hiba történt az árus betöltése során!</>;
  }

  return (
    <VendorForm
      title="Árus módosítása"
      submitLabel="Módosítás"
      hasError={editVendorMutation.isError}
      errorMessage="Nem sikerült az árust módosítani!"
      onSubmit={submitForm}
      defaultValues={vendor}
    />
  );
};

export default EditVendor;
