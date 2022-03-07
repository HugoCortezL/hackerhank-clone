import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body{
        font-size: 13px; 
        font-family: "Open Sans", sans-serif;
        background-image: linear-gradient(to bottom, #fff 0%, #f3f7f7 100%);
        -webkit-font-smoothing: antialiased !important;
        min-height: 110vh;
        max-width: 100vw;
    }
`