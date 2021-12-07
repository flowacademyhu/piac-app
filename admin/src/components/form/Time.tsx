import { Form, FormControlProps } from "react-bootstrap";
import { Control, FieldPath, Controller } from "react-hook-form";
import { DateTime } from "luxon";

const TIMEZONE = "Europe/Budapest";

function getTimestampFromDate(dateString: string): number {
  return DateTime.fromISO(dateString, { zone: TIMEZONE }).toSeconds();
}

function getDateFromTimestamp(timestamp?: number): string {
  return timestamp
    ? DateTime.fromSeconds(timestamp, { zone: TIMEZONE })
        .toISO()
        .substring(0, "YYYY-MM-DDThh:mm".length)
    : "";
}

interface TimeProps<T>
  extends Omit<FormControlProps, "type" | "onChange" | "onBlur"> {
  label: string;
  control: Control<T>;
  name: FieldPath<T>;
}

const TimeInput = <T,>({ label, control, name, ...props }: TimeProps<T>) => {
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
              field.onChange(getTimestampFromDate(e.target.value))
            }
            value={getDateFromTimestamp(field.value as number)}
            type="datetime-local"
            {...props}
          />
        </Form.Group>
      )}
    />
  );
};

export default TimeInput;
