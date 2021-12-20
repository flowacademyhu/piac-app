import { Form } from "react-bootstrap";
import VendorDetailsButtons from "./VendorDetailsButtons";
import { VendorInput, VendorWithId } from "./Vendor";
import { useForm } from "react-hook-form";
import Textarea from "components/form/Textarea";
import Input from "components/form/Input";
import Checkbox from "components/form/Checkbox";
import TagInput from "components/form/TagInput";

interface VendorFormProps {
  title: string;
  submitLabel: string;
  hasError: boolean;
  errorMessage: string;
  onSubmit: (value: VendorInput) => void;
  defaultValues?: VendorInput;
}

const VendorForm = ({
  title,
  submitLabel,
  hasError,
  errorMessage,
  onSubmit,
  defaultValues,
}: VendorFormProps) => {
  const { control, register, handleSubmit } = useForm<VendorWithId>({
    defaultValues,
  });

  return (
    <Form className="container mb-3" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="my-3">{title}</h1>
      <Input
        label="Árus neve"
        required={true}
        data-test="name-input"
        {...register("name")}
      />
      <Input
        label="Árus logója"
        required={true}
        type="url"
        data-test="profilePic-input"
        {...register("profilePic")}
      />
      <Textarea
        label="Árus rövid bemutatkozása"
        rows={2}
        maxLength={100}
        data-test="intro-input"
        {...register("intro")}
      />
      <Textarea
        label="Árus hosszú leírása"
        rows={5}
        maxLength={2500}
        data-test="introductionLong-input"
        {...register("introductionLong")}
      />
      <Checkbox
        label="Bankkártyás fizetés"
        control={control}
        name="cardPayment"
      />
      <TagInput
        label="Árus termékei"
        placeholder="Írd be a termék nevét és nyomj enter-t"
        control={control}
        name="products"
      />
      <Input
        label="Árus telefonszáma"
        type="tel"
        data-test="phone-input"
        {...register("phone")}
      />
      <Input
        label="Árus e-mail címe"
        type="email"
        data-test="email-input"
        {...register("email")}
      />
      <Input
        label="Árus facebook linkje"
        data-test="facebook-input"
        {...register("facebook")}
      />
      <Input
        label="Árus instagram linkje"
        data-test="instagram-input"
        {...register("instagram")}
      />
      <Input
        label="Árus honlap címe"
        type="url"
        data-test="webSite-input"
        {...register("webSite")}
      />
      <VendorDetailsButtons submitButtonLabel={submitLabel} />
      {hasError && <p className="text-danger mt-3">{errorMessage}</p>}
    </Form>
  );
};

export default VendorForm;
