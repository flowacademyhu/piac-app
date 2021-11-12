import { Form } from "react-bootstrap";

const FormTextAreaInput = ({
  label,
  dataObject,
  dataObjectKey,
  setter,
  rows,
  maxLength,
  placeholder = label + "...",
  controlId = dataObjectKey,
}) => {
  return (
    <Form.Group className="mb-3" controlId={controlId}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        as="textarea"
        rows={rows}
        placeholder={placeholder}
        required
        maxLength={maxLength}
        value={dataObject[dataObjectKey] || ""}
        onChange={(e) =>
          setter({ ...dataObject, [dataObjectKey]: e.target.value })
        }
      />
    </Form.Group>
  );
};

export default FormTextAreaInput;
