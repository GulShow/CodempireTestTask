import { FC } from "react";
import { ISearchInput } from "../../utils/interfaces";
import "./SearchInput.css";

const SearchInput:FC<ISearchInput> = ({ filterText, onFilterTextChange }) => {
    return (
      <input
      className="searchInput"
        type="text"
        id="searchBar"
        placeholder="Search..."
        value={filterText}
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
    );
  }

  export default SearchInput;
  