import '../styles/VendorlistUploadInProgress.css';

const VendorlistUploadInProgress = () => {
  return (
    <div className="card-list">
      <div className="uploadTexts middleUploadText">
        <span>Szervezés alatt...</span>
      </div>
      <div className="uploadTexts bottomInfoText">
        <div>
          <span>Itt fogod megtalálni az árusokat,</span>
        </div>
        <div>
          <span>akik ezen a piacon jelen lesznek.</span>
        </div>
      </div>
    </div>
  );
};

export default VendorlistUploadInProgress;
