import { Form } from "react-bootstrap";
import { DateTime } from "luxon";

interface TimeInputProps {
  label: string;
  dataObject: any;
  dataObjectKey: string;
  setter: (dataObject: any) => void;
  required?: boolean;
  placeholder?: string;
}

function getTimestampFromDate(dateString: string): number {
  return DateTime.fromISO(dateString, { zone: "Europe/Budapest" }).toSeconds();
}

function getDateFromTimestamp(timestamp?: number): string {
  return timestamp
    ? DateTime.fromSeconds(timestamp, { zone: "Europe/Budapest" })
        .toISO()
        .substring(0, "YYYY-MM-DDThh:mm".length)
    : "";
}

const TimeInput = ({
  label,
  dataObject,
  dataObjectKey,
  setter,
  required = false,
  placeholder = label + "...",
}: TimeInputProps) => {
  return (
    <Form.Group className="mb-3" controlId={dataObjectKey}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={"datetime-local"}
        data-test={`${dataObjectKey}-input`}
        placeholder={placeholder}
        value={getDateFromTimestamp(dataObject[dataObjectKey])}
        required={required}
        onChange={(e) =>
          setter({
            ...dataObject,
            [dataObjectKey]: getTimestampFromDate(e.target.value),
          })
        }
      />
    </Form.Group>
  );
};

export default TimeInput;
