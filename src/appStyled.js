import styled from "styled-components";
import bee from "./bee.png";

export const Main = styled.div`
  background-image: url(${bee});
  background-color: #ffdee9;
  width: 600px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;
