import { Form } from "react-bootstrap";

interface TimeInputProps {
  label: string;
  dataObject: any;
  dataObjectKey: string;
  setter: (dataObject: any) => void;
  required?: boolean;
  placeholder?: string;
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
        value={getDateFromTimestamp(dataObject[dataObjectKey] || "")}
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
