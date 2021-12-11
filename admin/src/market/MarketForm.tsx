import { Form } from "react-bootstrap";
import MarketDetailsButtons from "./MarketDetailsButtons";
import Time from "components/form/Time";
import { MarketInput, MarketWithId } from "./Market";
import { useForm } from "react-hook-form";
import Textarea from "components/form/Textarea";
import Input from "components/form/Input";

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
  const { control, register, handleSubmit } = useForm<MarketWithId>({
    defaultValues,
  });

  return (
    <Form className="container mb-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="my-3">{title}</h1>
      <Input label="Piac neve" required={true} {...register("name")} />
      <Input
        label="Piac logója"
        required={true}
        type="url"
        {...register("profilePic")}
      />
      <Textarea
        label="Piac helyszíne"
        rows={2}
        maxLength={100}
        {...register("place")}
      />
      <Time control={control} label="Piac kezdete" name="openingDate" />
      <Time control={control} label="Piac zárása" name="closingDate" />

      <MarketDetailsButtons submitButtonLabel={submitLabel} />
      {hasError && <p className="text-danger mt-3">{errorMessage}</p>}
    </Form>
  );
};

export default MarketForm;
