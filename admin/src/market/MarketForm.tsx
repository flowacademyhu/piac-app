import { Form } from "react-bootstrap";
import Time from "components/form/Time";
import { Market, MarketInput, MarketWithId } from "./Market";
import { useForm } from "react-hook-form";
import Textarea from "components/form/Textarea";
import Input from "components/form/Input";
import { useQuery } from "react-query";
import { fetchVendors } from "components/Service";
import Checkbox from "components/form/Checkbox";
import DetailsButtons from "components/DetailsButtons";
interface MarketFormProps {
  title: string;
  submitLabel: string;
  hasError: boolean;
  errorMessage: string;
  onSubmit: (value: MarketInput) => void;
  defaultValues?: MarketInput;
}

const MarketForm = ({
  title,
  submitLabel,
  hasError,
  errorMessage,
  onSubmit,
  defaultValues,
}: MarketFormProps) => {
  const { control, register, handleSubmit } = useForm<MarketInput>({
    defaultValues,
  });

  const vendorsOfMarket = defaultValues?.vendors ?? [];

  const { data: allVendors } = useQuery("vendors", () => fetchVendors(), {
    cacheTime: 0,
  });

  return (
    <Form className="container mb-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="my-3">{title}</h1>
      <Input
        label="Piac neve"
        required={true}
        data-test="name-input"
        {...register("name")}
      />
      <Input
        label="Piac logója"
        required={true}
        type="url"
        data-test="profilePic-input"
        {...register("profilePic")}
      />
      <Textarea
        label="Piac helyszíne"
        rows={2}
        maxLength={100}
        data-test="place-input"
        {...register("place")}
      />
      <Time control={control} label="Piac kezdete" name="openingDate" />
      <Time control={control} label="Piac zárása" name="closingDate" />
      {allVendors &&
        allVendors.map((vendor: any) => (
          <Checkbox
            key={vendor.id}
            label={vendor.name}
            control={control}
            name={vendor.name}
            defaultChecked={vendorsOfMarket.some(
              (vendorId) => vendorId === vendor.id
            )}
          />
        ))}
      <DetailsButtons submitButtonLabel={submitLabel} to="/piac" />
      {hasError && <p className="text-danger mt-3">{errorMessage}</p>}
    </Form>
  );
};

export default MarketForm;
