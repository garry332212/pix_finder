import axios from "axios";
import React from "react";
import styled from "styled-components";
import { endpoint, DataProps } from "../modules/modules";

const Header = () => {
  const [coverImg, setCoverImg] = React.useState<DataProps[]>([]);

  const fetchImages = async () => {
    const url = `${endpoint}`;
    const response = await axios.get(url);
    const results = response.data.hits;
    setCoverImg(results);
  };

  React.useEffect(() => {
    fetchImages();
  }, []);

  const randomImage = Math.floor(Math.random() * coverImg.length);
  const backgroundImage = coverImg.length > 0 ? `url(${coverImg[randomImage].largeImageURL})` : "";

  return (
    <HeaderWrapper style={{ backgroundImage }}>
      <div className="landing-page">
        <div className="navbar">
          <div className="leftSide">
            <h1>PixFinder</h1>
          </div>
          <div className="rightSide">
            <p>Explore</p>
            <p>Log in</p>
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  width: 100%;
  text-align: center;
  background-size: cover;
  background-position: center;
  padding: 20px;
  color: white;

  .landing-page {
    height: 40vh;
    margin: 10px;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    .leftSide {
      h1 {
        font-size: 2rem;
        margin-left: 2rem;
      }
    }

    .rightSide {
      display: flex;
      justify-content: space-evenly;
      padding: 10px;
     
      p {
        margin-right: 2rem;
        color: rgba(0,0,0,0.8);
        box-shadow: 0 10px 15px rgb(0 0 0 / 20%);
        box-sizing: border-box;
        border-radius: 12px;
        backdrop-filter: blur(33px);
        padding: 5px 10px;
        background-color: #ffffffa1; 
        font-weight:600;
      }
    }
  }
`;
