import styled from "styled-components";
import {
  colors,
  flexCenterSpaceBetwn,
  flexCenter,
  BoxShadow,
  fontFamily,
} from "../modules/galobal_styles";

export const HeaderWrapper = styled.div`
  text-align: center;
  background-size: cover;
  padding: 20px;
  color: white;
  background-size: cover;
  background-position: center;
  height: 50vh;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${colors.fadedBlack};
    z-index: -1; /* Place the pseudo-element below the content */
  }

  .navbar {
  
    color: #fff;
    ${flexCenterSpaceBetwn};
    .leftSide {
      h1 {
        font-size: 3rem;
        margin-left: 2rem;
        font-family: ${fontFamily.logo};
      }
    }

    .rightSide {
      ${flexCenter}
      padding: 10px;

      p {
        color: #fff;
        font-family: ${fontFamily.roboto};
        ${BoxShadow};
        box-sizing: border-box;
        border-radius: 12px;
        backdrop-filter: blur(33px);
        padding: 5px 10px;
        background-color: ${colors.iosBlur};
        font-weight: 600;
        cursor: pointer;
      }

      p:nth-child(1) {
        margin-right: 2rem;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 90%;
    left: 0.5%;
    width: 98.5%;
    em {
      font-family: ${fontFamily.dosis};
    }
  }

  @media screen and (max-width: 540px) {
    height: 40vh;
    .navbar {

      color: #fff;
      ${flexCenterSpaceBetwn};
      .leftSide {
        h1 {
          font-size: 2.5rem;
          margin-left: 0;
          margin-right: 8px;
        }
      }

      .rightSide {
      ${flexCenter}
      padding: 0;

      p {
        padding: 2px 5px;
      }

      p:nth-child(1) {
        margin-right: 1rem;
      }
    }
    }
  }
  @media screen and (max-width: 420px) {
  
    .navbar {
      flex-wrap: wrap;
    }
  }
`;
