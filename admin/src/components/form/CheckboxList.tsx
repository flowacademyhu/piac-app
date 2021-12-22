import React from "react";
import { Form, FormControlProps } from "react-bootstrap";
import { Control, FieldPath, useController } from "react-hook-form";

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
      <Form.Label>{label}</Form.Label>
      <div className="border rounded p-3">
        {items &&
          items.map((item: CheckboxItem) => (
            <Form.Check
              key={item.id}
              data-test={`${name}-${item.id}-checkbox`}
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
      </div>
    </Form.Group>
  );
};

export default CheckboxList;
