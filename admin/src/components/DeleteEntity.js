import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteMarket = ({ isMarket }) => {
  const [appear, setAppear] = useState(false);
  const handleClose = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  return (
    <>
      <Button variant="primary" onClick={handleAppear}>
        {isMarket ? "Piac" : "Árus"} törlése
      </Button>

      <Modal show={appear} onHide={handleClose}>
        <Modal.Body>
          Biztosan törlöd a kijelölt {isMarket ? "piacot" : "árust"} ?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Mégse
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Törlés
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DeleteMarket;
