import styled from "styled-components";
import { flexCenter, BoxShadow } from "../modules/galobal_styles";

export const SearchWrapper = styled.div`
  .inputArea {
    ${flexCenter}

    > input {
      width: 100%;
      height: 50px;
      outline: none;
      text-align: center;
      padding: 20px;
      border-radius: 50px;
      ${BoxShadow};
      background-color: #fffffff5;
    }
    .icon {
      font-size: 1.8rem;
      position: fixed;
      left: 10px;
      cursor: pointer;
      color: grey;
      transition: transform 0.2s ease-in-out;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 546px) {
    .inputArea {
      > input {
        &::placeholder {
          font-size: 0;
        }
      }
      .icon {
        font-size: 1.5rem;
      }
    }
  }
`;
