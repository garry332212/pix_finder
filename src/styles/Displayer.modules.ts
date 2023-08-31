import styled from "styled-components";

export const DisplayerWrapper = styled.div`
  .search {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    z-index: 2;
    text-align: center;
    h1{
      font-size: 2.1vw;
      color:#fff;
      font-weight: bolder;
      margin-bottom: 1.5rem;
    }
  }

  .listData {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
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
      background: #35066b;
      margin: 0 10px;
      border: none;
      border-radius: 5px;
      color: #fff;
      transition: all 0.2s ease-in-out;

      &:hover {
        background: rgba(32, 232, 199, 1);
      }
    }
  }

  @media screen and (max-width: 1020px) {
    .search {
      position: absolute;
      top: 25%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 65%;
    }
  }

`;