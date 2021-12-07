import { Form } from "react-bootstrap";

interface TimeInputProps {
  label: string;
  dataObject: any;
  dataObjectKey: string;
  setter: (dataObject: any) => void;
  required?: boolean;
  placeholder?: string;
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
        value={dataObject[dataObjectKey] || ""}
        required={required}
        onChange={(e) =>
          setter({ ...dataObject, [dataObjectKey]: e.target.value })
        }
      />
    </Form.Group>
  );
};

export default TimeInput;
