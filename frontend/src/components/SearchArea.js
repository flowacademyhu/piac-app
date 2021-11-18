import "./SearchArea.css";

const SearchArea = ({ onChange, placeHolder }) => {
  return (
    <div className="search-area">
      <input
        className="search-bar"
        placeholder={placeHolder}
        type="text"
        onChange={onChange}
      />
    </div>
  );
};

export default SearchArea;
