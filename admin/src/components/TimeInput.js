import { Form } from "react-bootstrap";

const TimeInput = ({
  label,
  dataObject,
  dataObjectKey,
  setter,
  required = false,
  type = "datetime-local",
  placeholder = label + "...",
  controlId = dataObjectKey,
}) => {
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
