import React from "react";
import { IoIosSearch } from "react-icons/io";
import { SearchWrapper } from "../styles/SearchBar.modules";

interface inputTypes {
  onSearchEvent: (searchedTerm: string) => void;
}
const SearchBar: React.FC<inputTypes> = ({ onSearchEvent }) => {
  const [searchPic, setSearchPic] = React.useState("");

  const searchRequest = () => {
    if (searchPic.trim() === "") {
      return;
    }

    onSearchEvent(searchPic);
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
    </SearchWrapper>
  );
};
export default SearchBar;
