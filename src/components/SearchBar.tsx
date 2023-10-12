import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchWrapper } from "../styles/SearchBar.modules";

interface InputTypes {
  onSearchEvent: (searchedTerm: string) => void;
}

const SearchBar: React.FC<InputTypes> = ({ onSearchEvent }) => {
  const [searchPic, setSearchPic] = useState("");
  const [noResults, setNoResults] = useState(false);

  const searchRequest = () => {
    if (searchPic.trim() === "") {
      return;
    }

    // Simulate a search result, you would replace this with your actual search logic
    const hasResults = true; // Replace this with your actual search result check
    setNoResults(!hasResults);

    if (hasResults) {
      onSearchEvent(searchPic);
    }
  };

  const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchRequest();
    }
  };

  return (
    <SearchWrapper>
      <div className="inputArea">
        <input
          type="text"
          placeholder="Search for all images from PixFinder"
          value={searchPic}
          onChange={(e) => setSearchPic(e.target.value)}
          onKeyDown={handleEnterKeyPress}
        />
        <IoIosSearch className="icon" onClick={searchRequest} />
      </div>
      {noResults && <h1>No results found.</h1>}
    </SearchWrapper>
  );
};

export default SearchBar;
