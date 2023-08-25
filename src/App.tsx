import React from "react";
import styled from "styled-components";
import ImageDisplayer from "./components/ImageDisplayer";

function App() {
  const imageDisplayers = Array(10).fill(null); // Create an array of length 8

  return (
    <HomeWrapper>
      {imageDisplayers.map((_, index) => (
        <ImageDisplayer key={index} />
      ))}
    </HomeWrapper>
  );
}

export default App;

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
