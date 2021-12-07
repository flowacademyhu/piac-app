import { forwardRef } from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { UseFormRegisterReturn } from "react-hook-form";

interface FormInputProps
  extends Omit<UseFormRegisterReturn, "ref">,
    Omit<FormControlProps, "onChange" | "onBlur"> {
  label: string;
  required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, ...props }, ref) => (
    <Form.Group className="mb-3" controlId={props.name}>
      <Form.Label>{label}</Form.Label>
      <Form.Control ref={ref} placeholder={`${label}...`} {...props} />
    </Form.Group>
  )
);

export default FormInput;
