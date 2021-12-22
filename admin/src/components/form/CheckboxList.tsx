import React from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { Control, FieldPath, useController } from "react-hook-form";
import Checkbox from "./Checkbox";

interface CheckboxItem {
  id: string;
  name: string;
}

interface CheckboxListProps<T>
  extends Omit<FormControlProps, "type" | "onChange" | "onBlur"> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
  items: CheckboxItem[];
}

const CheckboxList = <T,>({
  label,
  control,
  name,
  items,
}: CheckboxListProps<T>) => {
  const { field } = useController({
    control,
    name,
  });

  return (
    <Form.Group className="mb-3" controlId={name}>
      {items &&
        items.map((item: CheckboxItem) => (
          <Form.Check
            key={item.id}
            data-test={`${name}-checkbox`}
            onChange={(e) => {
              const previousValues = field.value as string[];
              const values = new Set(previousValues);

              if (e.target.checked) {
                values.add(item.id);
              } else {
                values.delete(item.id);
              }

              field.onChange(Array.from(values));
            }}
            type="checkbox"
            label={item.name}
            checked={(field.value as string[]).some(
              (vendorId: string) => vendorId === item.id
            )}
          />
        ))}
    </Form.Group>
  );
};

export default CheckboxList;
