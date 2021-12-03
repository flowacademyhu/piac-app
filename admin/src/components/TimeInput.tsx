import { forwardRef } from "react";
import { FormControlProps } from "react-bootstrap";
import { UseFormRegisterReturn } from "react-hook-form";
import FormInput from "./FormInput";

interface TimeInputProps
  extends Omit<UseFormRegisterReturn, "ref">,
    Omit<FormControlProps, "type" | "onChange" | "onBlur"> {
  label: string;
}

const TimeInput = forwardRef<HTMLInputElement, TimeInputProps>(
  (props: TimeInputProps, ref) => (
    <FormInput type="datetime-local" ref={ref} {...props} />
  )
);

export default TimeInput;
