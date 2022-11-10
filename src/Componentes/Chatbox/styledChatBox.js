import styled from "styled-components";

export const MainChatBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 12px;
  overflow-y: scroll;
  height: 90vh;
`;

export const Balao = styled.div`
  background-color: ${(props) => (props.person === "Sal" ? "pink" : "white")};
  color: ${(props) => (props.person === "Sal" ? "white" : "grey")};
  margin-bottom: 12px;

  min-width: 80px;
  max-width: 300px;
  padding: 8px;
  border-radius: 8px;
  margin-left: ${(props) => (props.person === "Sal" ? "auto" : 0)};

  h1 {
    font-weight: bold;
    font-size: 16px;
    padding-bottom: 4px;
    color: ${(props) => (props.person === "Sal" ? "white" : "purple")};
  }

  div {
    display: flex;
    flex-direction: column;

    p:first-child {
      font-weight: 400;
      font-size: 16px;
      word-wrap: break-word;
    }

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      font-weight: 500px;
      font-size: 11px;
      color: ${(props) => (props.person === "Sal" ? "white" : "grey")};
      margin-left: auto;

      img {
        width: 16px;
        margin-left: 4px;
      }
    }
  }
`;
