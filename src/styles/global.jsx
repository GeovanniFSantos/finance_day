import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  
  body{
    font-family: "Poppins", sans-serif;
    background-color: black;
  }
`;

export default Global;
