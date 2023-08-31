import styled from "styled-components";
import {
  colors,
  flexCenterSpaceBetwn,
  flexCenter,
  BoxShadow,
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
        font-size: 2rem;
        margin-left: 2rem;
      }
    }

    .rightSide {
      ${flexCenter}
      padding: 10px;

      p {
        color: #fff;
        ${BoxShadow};
        box-sizing: border-box;
        border-radius: 12px;
        backdrop-filter: blur(33px);
        padding: 5px 10px;
        background-color: ${colors.iosBlur};
        font-weight: 600;
      }

      p:nth-child(1) {
        margin-right: 2rem;
      }
    }
  }

  @media screen and (max-width: 504px) {
    height: 40vh;

    .navbar {
      color: #fff;
      ${flexCenterSpaceBetwn};
      .leftSide {
        h1 {
          font-size: 2rem;
          margin-left: 2rem;
        }
      }

      .rightSide {
        ${flexCenter}
        padding: 10px;

        p {
          padding: 3px 8px;
        }

        p:nth-child(1) {
          margin-right: 0.8rem;
        }
      }
    }
  }
`;
