import React from "react";
import styled from "styled-components";
import SearchAndDsiplayData from "./components/SearchAndDsiplayData";

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
