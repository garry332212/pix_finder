import axios from "axios";
import React from "react";

import { endpoint, DataProps } from "../modules/modules";
import { HeaderWrapper } from "../styles/Header.modules";

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
  const backgroundImage =
    coverImg.length > 0 ? `url(${coverImg[randomImage].largeImageURL})` : "";

  return (
    <HeaderWrapper style={{ backgroundImage }}>
      <div className="navbar">
        <div className="leftSide">
          <h1>PixFinder</h1>
        </div>
        <div className="rightSide">
          <p>Explore</p>
          <p>Log in</p>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

//todo: 474px need to fix the navbar
