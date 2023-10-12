import React from "react";
import styled from "styled-components";
import { FcLike } from "react-icons/fc";
import { AiFillEye } from "react-icons/ai";
import { FcComments } from "react-icons/fc";
import { BoxShadow, flexCenter, fontFamily } from "../modules/galobal_styles";
import loadingIcon from "../assets/weather.gif";

interface imagesProps {
  imagesResults: string;
  likes: number;
  views: number;
  comments: number;
  viewFullSize: string;
}

const ImageDisplayer: React.FC<imagesProps> = ({
  imagesResults,
  views,
  likes,
  comments,
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
          <img src={loadingIcon} className="loadingGif" alt="loading" />
        )}

        {!isLoading && (
          <>
            <p>
              <FcComments className="iconNum" /> {comments}
            </p>
            <p>
              <FcLike className="iconNum" /> {likes}
            </p>
            <p>
              <AiFillEye className="iconNum" /> {views}
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
    border-radius: 5px;
    padding: 5px;
    ${BoxShadow}
    width: 300px;
    .loadingGif {
      height: 100px;
      width: 100px;
    }

    img {
      height: 250px;
      border-radius: 15px;
      padding: 10px;
      width: 300px;
      transition: all.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
    p {
      ${flexCenter}
      padding: 0 10px;
      border-radius: 10px;
      ${BoxShadow}
      width: 100%;
      margin: 5px 0;
      font-family: ${fontFamily.roboto};
    }

    .iconNum {
      margin-right: 10px;
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

  @media screen and (max-width: 1060px) {
    .container {
      width: 200px;
    }
  }
  @media screen and (max-width: 520px) {
    .container {
      width: auto;

      img {
        width: auto;
      }
    }
  }
`;
