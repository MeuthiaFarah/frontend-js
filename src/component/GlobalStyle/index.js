// import create global style
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  // CSS Reset dan font
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Patrick+Hand&family=Poppins:wght@300&display=swap');
  body {
    margin: 0;
    font-family: 'Patrick Hand', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* CSS Reset */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;

export default GlobalStyle;
