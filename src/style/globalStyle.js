import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --colorPrimary: #FF577F;
        --colorPrimaryFocus: #FF427F;
        --colorPrimaryNegative: #59323F;
        --grey4: #121214;
        --grey3: #212529;
        --grey2: #343B41;
        --grey1: #868E96;
        --grey0: #F8F9FA;
        --sucess: #3FE864;
        --negative: #E83F5B;
    }

    body{
        background-color: var(--grey4)
    }
`