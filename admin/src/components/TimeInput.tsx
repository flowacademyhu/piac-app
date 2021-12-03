import { FormControlProps } from "react-bootstrap";
import { useController, Control, FieldPath } from "react-hook-form";
import FormInput from "./FormInput";

interface TimeInputProps<T extends Record<string, any>>
  extends Omit<
    FormControlProps,
    "defaultValue" | "name" | "type" | "onChange" | "onBlur"
  > {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
}

function getTimestampFromDate(dateString: string) {
  return new Date(dateString).getTime() / 1000;
}

function getDateFromTimestamp(timestamp: any) {
  const time = new Date(timestamp * 1000);
  const offset = time.getTimezoneOffset() * 60;
  return timestamp
    ? new Date((timestamp - offset) * 1000)
        .toISOString()
        .substr(0, "YYYY-MM-DDTHH:mm:ss".length)
    : "";
}

function TimeInput<T>({ control, name, ...props }: TimeInputProps<T>) {
  const {
    field: { onChange, value, ...fieldProps },
  } = useController({
    name,
    control,
  });

  return (
    <FormInput
      type="datetime-local"
      onChange={(e) => onChange(getTimestampFromDate(e.target.value))}
      value={getDateFromTimestamp(value)}
      {...props}
      {...fieldProps}
    />
  );
}

export default TimeInput;
