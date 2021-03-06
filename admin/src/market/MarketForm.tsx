import { Form } from "react-bootstrap";
import Time from "components/form/Time";
import { MarketInput } from "./Market";
import { useForm } from "react-hook-form";
import Textarea from "components/form/Textarea";
import Input from "components/form/Input";
import { useQuery } from "react-query";
import { fetchVendors } from "components/Service";
import DetailsButtons from "components/DetailsButtons";
import CheckboxList from "components/form/CheckboxList";
interface MarketFormProps {
  title: string;
  submitLabel: string;
  hasError: boolean;
  errorMessage: string;
  onSubmit: (value: MarketInput) => void;
  defaultValues: MarketInput;
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

  const allVendorsQuery = useQuery("vendors", () => fetchVendors(), {
    cacheTime: 0,
  });

  const { isLoading, isIdle, isError } = allVendorsQuery;

  if (isLoading || isIdle) {
    return <>Betöltés...</>;
  }

  if (isError) {
    return <>Hiba történt a piac betöltése során!</>;
  }

  const allVendors = allVendorsQuery.data;

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
      <CheckboxList
        control={control}
        label="Árusok"
        name="vendors"
        items={allVendors}
      />

      <DetailsButtons submitButtonLabel={submitLabel} to="/piac" />
      {hasError && <p className="text-danger mt-3">{errorMessage}</p>}
    </Form>
  );
};

export default MarketForm;
