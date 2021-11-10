import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const DeleteEntity = ({
  isMarket,
  marketName,
  vendorName,
  handleDeleteMarket,
  handleDeleteVendor,
  marketId,
  vendorId,
}) => {
  const [appear, setAppear] = useState(false);
  const handleClose = () => setAppear(false);
  const handleAppear = () => setAppear(true);

  return (
    <>
      <Button variant="primary" onClick={handleAppear}>
        Töröl
      </Button>
      <Modal show={appear} onHide={handleClose}>
        <Modal.Body>
          {isMarket
            ? `Biztosan kitörlöd a következő piacot? ${marketName}`
            : `Biztosan kitörlöd a következő árust? ${vendorName}`}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Mégse
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              isMarket
                ? handleDeleteMarket(marketId)
                : handleDeleteVendor(vendorId);
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
