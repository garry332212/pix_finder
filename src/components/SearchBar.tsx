import React from "react";
import styled from "styled-components";

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
  return (
    <SearchWrapper>
      <div className="inputArea">
        <input
          type="text"
          placeholder=""
          value={searchPic}
          onChange={(e) => setSearchPic(e.target.value)}
        />
        <button onClick={searchRequest}>Search</button>
      </div>
    </SearchWrapper>
  );
};
export default SearchBar;
const SearchWrapper = styled.div`
  .inputArea {
    display: flex;
    justify-content: space-between;
    box-shadow: 1px 1px 10px -5px black;
    border-radius: 10px;
    align-items: center;
    margin: 2rem;
    

    > input {
      padding: 15px;
      border-radius: 10px;
      outline: none;
      border: none;
      height: 40px;
    }

    button {
      padding: 10px 20px;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      position: relative;
      background-color: bisque;
    }
  }
`;
