import React from "react";
import styled from "styled-components";
import ImageDisplayer from "./components/ImageDisplayer";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import { api_key } from "./modules/modules";
import SearchAndDsiplayData from "./components/SearchAndDsiplayData";

interface DataProps {
  id: number;
  downloads: number;
  likes: number;
  views: number;
  largeImageURL: string; //*original name largeImageURL
  downloadLink: string; //* original name previewURL
}

function App() {
 

  return (
    <HomeWrapper>
     <SearchAndDsiplayData />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default App;
