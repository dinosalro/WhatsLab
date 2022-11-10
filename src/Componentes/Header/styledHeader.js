import styled from "styled-components";

export const MainHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  height: 80px;
`;

export const Person = styled.div`
  display: flex;
  align-items: center;
  width: 140px;
  justify-content: space-evenly;

  img {
    display: flex;
    align-items: center;
    border-radius: 50%;
    height: 55px;
    width: 55px;
    object-fit: cover;
  }
  div {
    select {
      font-size: large;
      border: 1px solid white;
    }
    p:last-child {
      font-size: small;
      color: #b9bec3;
      margin-left: 5px;
    }
  }
`;

export const Icons = styled.div`
  width: 110px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 8px;

  :hover {
    cursor: pointer;
  }

  img {
    :active {
      filter: brightness(0.9);
    }
  }
`;
