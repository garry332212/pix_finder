import styled from "styled-components";
import {
  BoxShadow,
  colors,
  flexCenter,
  flexCenterSpaceBetwn,
} from "../modules/galobal_styles";

export const DisplayerWrapper = styled.div`
  transition: all 0.5s ease-in-out;
  .search {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    z-index: 2;
    text-align: center;
    transition: all 0.5s ease-in-out;
    h1 {
      font-size: 2.5rem;
      color: #fff;
      font-weight: bolder;
      margin-bottom: 1.5rem;
    }
  }

  .listData,
  .imagesCard {
    ${flexCenter}
    flex-wrap: wrap;
    margin-top: 2rem;

    .tags {
      ${flexCenterSpaceBetwn}
      justify-content: space-evenly;
      flex-wrap: wrap;
      width: 100%;
      margin: 10px 20px;

      span {
        background-color: ${colors.iosBlur};
        background-color: whitesmoke;
        box-sizing: border-box;
        border-radius: 12px;
        backdrop-filter: blur(33px);
        padding: 2px 10px;
        color: #000;
        font-weight: 600;
        cursor: pointer;
        border: none;
        margin: 10px;
        ${BoxShadow}
        transition: all .1s ease-in-out;
      }
      & :hover {
        color: red;
        transform: scale(1.1);
      }
    }
  }

  .buttons {
    margin: 2rem 0;
    width: 100%;
    text-align: center;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    p {
      font-weight: 100;
    }

    > button {
      padding: 4px 20px;
      background: rgba(0, 0, 0, .6);
      margin: 0 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: rgba(32, 232, 199, 1);
        color: #000;
      }
    }
  }

  @media screen and (max-width: 1060px) {
    .search {
      width: 65%;
      h1 {
        font-size: 1.5rem;
      }
    }
  }
  @media screen and (max-width: 440px) {
    .search {
      h1 {
        font-size: 18px;
        margin: 10px 0;
        transition: all 0.5s ease-in-out;
      }
    }

    .listData,
    .imagesCard {
      margin-top: 10px;
      .tags {
        margin: 0;
        span {
          font-size: 10px;
          padding: 3px 10px;
          margin: 7px;
        }
      }
    }
  }
`;
