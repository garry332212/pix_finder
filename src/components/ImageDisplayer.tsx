import React from "react";
import styled from "styled-components";


interface imagesProps {
  imagesResults: string
  likes: number;
  views: number;
}


const ImageDisplayer:React.FC<imagesProps> = ({imagesResults,views, likes}) => {
  return (
    <ImageDisplayerWrapper>
      <div className="container">
        <img src={imagesResults} alt="img" />
        <p>{likes} 👍</p>
        <p>{views} 👀</p>
        <div className="buttonArea">
          <button>View Full Size</button>
        </div>
      </div>
    </ImageDisplayerWrapper>
  );
};

export default ImageDisplayer;

const ImageDisplayerWrapper = styled.div`
  margin: 20px;
  border: 1px solid grey;
  border-radius: 10px;
    padding: 5px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 200px;
    border-radius: 5px;
    padding: 5px;
    border: 1px solid grey;
    box-shadow: 1px 1px 12px -1px whitesmoke;
    

    img {
      height: 150px;
      border-radius: 10px;
     
    }
    p {
      margin: 5px;
      padding: 0 10px;
      border-radius: 10px;
      background: grey;
      width: 100%;
      text-align: center;
    }

    .buttonArea {
      border-radius: 10px;
      background-color: grey;
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        margin: 10px;
        background: grey;
        width: 80%;
        padding: 10px;
        background: orange;
        font-weight: 500;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        border-radius: 5px;
      }
    }
  }
`;
