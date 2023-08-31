import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { AiFillEye, AiOutlineLoading3Quarters } from "react-icons/ai";
import { BoxShadow, flexCenter, fontFamily } from "../modules/galobal_styles";

interface imagesProps {
  imagesResults: string;
  likes: number;
  views: number;
  viewFullSize: string;
}

const ImageDisplayer: React.FC<imagesProps> = ({
  imagesResults,
  views,
  likes,
  viewFullSize,
}) => {
  const [isLoading, setLoading] = React.useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const openLargeImage = () => {
    window.open(viewFullSize);
  };

  return (
    <ImageDisplayerWrapper>
      <div className="container">
        <img
          src={imagesResults}
          alt="img"
          onLoad={handleImageLoad}
          style={isLoading ? { display: "none" } : {}} // Hide the image until loaded
        />
        {isLoading && (
          <LoadingIcon>
            <AiOutlineLoading3Quarters />
          </LoadingIcon>
        )}
        {/* Display loading text while loading */}
        {!isLoading && ( // Display content when image is loaded
          <>
            <p>
              <FcLike /> {likes}
            </p>
            <p>
              <AiFillEye /> {views}
            </p>
            <div className="buttonArea">
              <button onClick={openLargeImage}>View Full Size</button>
            </div>
          </>
        )}
      </div>
    </ImageDisplayerWrapper>
  );
};

export default ImageDisplayer;

const ImageDisplayerWrapper = styled.div`
  margin: 20px;
  border: 1px solid beige;
  border-radius: 10px;
  padding: 5px;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    /* width: 300px; */
    border-radius: 5px;
    padding: 5px;
    ${BoxShadow}

    img {
      height: 250px;
      border-radius: 10px;
    }
    p {
      ${flexCenter}
      padding: 0 10px;
      border-radius: 10px;
      ${BoxShadow}
      width: 100%;
      margin: 5px 0;
      font-family: ${fontFamily.numbers};
    }

    .buttonArea {
      border-radius: 10px;
      width: 100%;
      display: flex;
      justify-content: center;

      button {
        margin: 10px;
        background: grey;
        padding: 10px 20px;
        background: orange;
        font-weight: 600;
        font-family: ${fontFamily.roboto};
        border-radius: 5px;
      }
    }
  }
`;

//spining loading logo
const LoadingIcon = styled.div`
  animation: spin infinite 1s linear;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
