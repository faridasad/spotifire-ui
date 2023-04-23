import Icon from "../Icons";
import "./searchbar.scss";

function SearchBar() {
  return (
    <div className="search-bar">
      <div>
        <span>
          <Icon name="search" size={24} />
        </span>
      </div>
      <input
        type="text"
        placeholder="What do you want to listen to?"
        spellCheck="false"
      />
    </div>
  );
}

export default SearchBar;
