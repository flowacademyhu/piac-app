import '../styles/VendorlistUploadInProgress.css';

const VendorlistUploadInProgress = ({ title, body }) => {
  return (
    <div className="card-list inProgressText">
      <div className="uploadTexts topInfoText">
        <div>{title}</div>
      </div>
      <div className="uploadTexts bottomInfoText">
        <div>{body}</div>
      </div>
    </div>
  );
};

export default VendorlistUploadInProgress;
