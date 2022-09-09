import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root {

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
    }
`;
