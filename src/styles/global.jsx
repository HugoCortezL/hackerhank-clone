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
        background: linear-gradient(to bottom, #fff 0%, #f3f7f7 100%);
        -webkit-font-smoothing: antialiased !important;
        -webkit-text-size-adjust: 100% !important;
        min-height: 100vh;
    }

    button{
        font-family: "Open Sans", sans-serif;
    }

    .link-react-dom{
        text-decoration: none;
    }
`