import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --red: #8B0000;
    }
    html{
      /* coloca a font do html com 10 pixels */
      /* regra de três
      16px => 100% 
      10px =>   62.5% */

      font-size: 62.5%;
    }

    html,
    body {
      height: 100vh;
      font-family: "Roboto", sans-serif;
      text-rendering: optimizelegibility;
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, select, button {
      font-size: 1.6rem;
    }

    button {
      cursor: pointer;
    }

    a {
    // deixa a cor do link com a mesma cor do elemento por volta do link
      color: inherit;
      text-decoration: none;
    } 
`;