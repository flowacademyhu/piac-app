import { forwardRef } from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextareaProps
  extends Omit<UseFormRegisterReturn, "ref">,
    Omit<FormControlProps, "type" | "onChange" | "onBlur"> {
  label: string;
  rows?: number;
  maxLength?: number;
}

const Textarea = forwardRef(({ label, ...props }: TextareaProps, ref) => (
  <Form.Group className="mb-3" controlId={props.name}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      as="textarea"
      placeholder={`${label}...`}
      ref={ref}
      {...props}
    />
  </Form.Group>
));

export default Textarea;
