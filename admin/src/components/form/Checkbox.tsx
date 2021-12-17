import { Form, FormControlProps } from "react-bootstrap";
import { Control, FieldPath, Controller } from "react-hook-form";

interface CheckboxProps<T>
  extends Omit<FormControlProps, "onChange" | "onBlur"> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const Checkbox = <T,>({ label, control, name, ...props }: CheckboxProps<T>) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <Form.Group className="mb-3" controlId={name}>
          <Form.Label>{label}</Form.Label>
          <Form.Control
            placeholder={`${label}...`}
            data-test={`${name}-input`}
            onChange={(e) =>
              field.onChange((e.target.value))
            }
            value={(field.value as string)}
            {...props}
          />
        </Form.Group>
      )}
    />
  );
};

export default Checkbox;