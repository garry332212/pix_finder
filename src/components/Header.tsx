// import axios from "axios";
import React from "react";

// import { endpoint, DataProps } from "../modules/modules";
import { HeaderWrapper } from "../styles/Header.modules";

interface coverImage {
  backgroundImage: string;
}

const Header: React.FC<coverImage> = ({ backgroundImage }) => {
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

      <div className="copyright">
        <em>Created By Gurvinder</em>
        <em>Version 1.0.0</em>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

//todo: 474px need to fix the navbar
