import React from "react";
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

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
        <IoIosSearch className="icon" onClick={searchRequest} />
      </div>
    </SearchWrapper>
  );
};
export default SearchBar;
const SearchWrapper = styled.div`

  .inputArea {
    display: flex;
    align-items: center;

    > input {
      margin-right: 10px;
      width: 100%;
      height: 50px;
      outline: none;
      text-align: center;
      padding: 20px;
      border-radius: 50px;
      box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
      background-color: #fffffff5;
    }
    .icon {
      font-size: 1.8rem;
      position: fixed;
      left: 10px;
    }
  }

  @media screen and (max-width: 504px) {
    .inputArea {
    > input {
      margin-right: 10px;
      width: 100%;
      height: 40px;
      outline: none;
      text-align: center;
      padding: 20px;
      border-radius: 50px;
      box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
      background-color: #fffffff5;
    }
    .icon {
      font-size: 1.8rem;
      position: fixed;
      left: 10px;
    }
  }
  }

  //todo: 472px margin ali gadbad hai uthe

`;
