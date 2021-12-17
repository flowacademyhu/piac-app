import { useController, Control, FieldPath } from "react-hook-form";
import { Form, FormControlProps } from "react-bootstrap";

interface CheckboxInputProps<T>
  extends Omit<FormControlProps, "type" | "onChange" | "onBlur" | "size"> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const Checkbox = <T,>({
  label,
  control,
  name,
  ...props
}: CheckboxInputProps<T>) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <Form.Group className="mb-3" controlId={name}>
      <Form.Check
        data-test={`${name}-checkbox`}
        onChange={(e) => field.onChange(e.target.checked)}
        type="checkbox"
        label={label}
        checked={field.value as boolean}
        {...props}
      />
    </Form.Group>
  );
};

export default Checkbox;
