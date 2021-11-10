import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteEntity = ({ question, handleDelete, ID }) => {
  const [appear, setAppear] = useState(false);
  const handleClose = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  return (
    <>
      <Button variant="primary" onClick={handleAppear}>
        Töröl
      </Button>
      <Modal show={appear} onHide={handleClose}>
        <Modal.Body>{question}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Mégse
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              handleDelete(ID);
            }}
          >
            Törlés
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteEntity;
