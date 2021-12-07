import { Form } from "react-bootstrap";

interface TimeInputProps {
  label: string;
  dataObject: any;
  dataObjectKey: string;
  setter: (dataObject: any) => void;
  required?: boolean;
  type?: string;
  placeholder?: string;
  controlId?: string;
}

const TimeInput = ({
  label,
  dataObject,
  dataObjectKey,
  setter,
  required = false,
  type = "datetime-local",
  placeholder = label + "...",
  controlId = dataObjectKey,
}: TimeInputProps) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        data-test={`${controlId}-input`}
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
