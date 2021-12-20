import "@pathofdev/react-tag-input/build/index.css";
import ReactTagInput from "@pathofdev/react-tag-input";
import { Form, FormControlProps } from "react-bootstrap";
import { Controller, FieldPath, Control } from "react-hook-form";

interface TagInputProps<T>
  extends Omit<FormControlProps, "type" | "onChange" | "onBlur" | "size"> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const TagInput = <T,>({
  control,
  name,
  label,
  placeholder,
}: TagInputProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Group className="mb-3" controlId={name}>
          <Form.Label>{label}</Form.Label>
          <ReactTagInput
            data-test={`${name}-input`}
            placeholder={placeholder}
            tags={field.value as string[]}
            onChange={field.onChange}
          />
        </Form.Group>
      )}
    />
  );
};

export default TagInput;
