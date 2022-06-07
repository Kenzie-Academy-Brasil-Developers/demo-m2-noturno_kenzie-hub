import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    div, nav, ul, li, ol, p, body,a,button, span{
        margin: 0;
        border: 0;
        box-sizing: border-box;
        padding: 0;
    }

    :root{
        --colorPrimary: #FF577F;
        --colorPrimaryFocus: #FF427F;
        --colorPrimaryNegative: #59323F;
        --grey4: #121214;
        --grey3: #212529;
        --grey2: #343B41;
        --grey1: #868E96;
        --grey0: #F8F9FA;
        --success: #3FE864;
        --error: #E83F5B;
    }

    body{
        background-color: var(--grey4);
        font-family: 'Inter', sans-serif;
    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
`;
