import styled from "styled-components";

export const MainFooter = styled.div`
  height: 100px;
  background-color: white;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div:first-child {
    display: flex;
    align-items: center;
    width: 85%;
    input {
      border: 1.5px solid grey;
      padding-left: 52px;
      padding-right: 52px;
      font-size: large;
      width: 100%;
      height: 60px;
      border-radius: 30px;
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
    a:first-child {
      position: relative;
      left: 50px;
    }
    a:last-child {
      position: relative;
      right: 50px;
    }
  }

  div:last-child {
    width: 15%;
    a {
      display: flex;
      justify-content: center;
      margin: 5px;
      img {
        width: 50px;
        height: 50px;
        background-color: pink;
        border-radius: 50%;
        padding: 8px;
      }
    }
  }
`;
