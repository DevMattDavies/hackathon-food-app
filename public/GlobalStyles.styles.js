import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {
    --red: #890303;
    --black: #000000;
    --white: #ffffff;
    --highlight: #F2F3A0;
    --header-font: 'Bungee Inline', cursive;
    --body-font:'Londrina Solid', cursive;
}

    html {
      font-size: calc(60% + 0.8vmin);
      margin: 0;
        padding: 0;
    }

    body {
        margin: 0;
        padding: 0; 
    }

    * {
        font-size: 1rem;
        box-sizing: border-box;
        font-family: var(--body-font);
    }
`;
