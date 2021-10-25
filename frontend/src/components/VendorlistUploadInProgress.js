import "../styles/VendorlistUploadInProgress.css";

const VendorlistUploadInProgress = () => {
  return (
    <div className="loadingScreen">
      <div className="middleUploadText">
        <div>Szervezés alatt...</div>
      </div>
      <div className="bottomInfoText">
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
