import { Button, Modal } from "react-bootstrap";
import { useState } from "react";

interface DeleteEntityProps {
  confirmationQuestion: string;
  handleDelete: (id: string) => void;
  ID: string;
}

const DeleteEntity = ({
  confirmationQuestion,
  handleDelete,
  ID,
}: DeleteEntityProps) => {
  const [appear, setAppear] = useState(false);
  const handleClose = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  return (
    <>
      <Button variant="primary" onClick={handleAppear}>
        Töröl
      </Button>
      <Modal show={appear} onHide={handleClose}>
        <Modal.Body>{confirmationQuestion}</Modal.Body>
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
