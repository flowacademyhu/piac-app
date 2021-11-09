import "../styles/VendorlistUploadInProgress.css";

const VendorlistUploadInProgress = ({ title, body, footer }) => {
  return (
    <div className="card-list">
      <div className="uploadTexts middleUploadText">
        <span>{title}</span>
      </div>
      <div className="uploadTexts bottomInfoText">
        <div>
          <span>{body}</span>
        </div>
        <div>
          <span>{footer}</span>
        </div>
      </div>
    </div>
  );
};

export default VendorlistUploadInProgress;
