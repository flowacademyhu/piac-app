import React from "react";
import { FormControlProps } from "react-bootstrap";
import { Control, FieldPath } from "react-hook-form";

interface CheckboxListProps<T>
  extends Omit<FormControlProps, "type" | "onChange" | "onBlur"> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const CheckboxList = <T,>(props: CheckboxListProps<T>) => {
  return <div>Checkbox</div>;
};

export default CheckboxList;
