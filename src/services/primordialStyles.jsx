import styled from "styled-components";

export const PrimaryButton = styled.button`
    box-shadow: 0 4px 12px rgb(27 169 76 / 50%);
    background-color: #1ba94c;
    color: #FFFFFF;
    font-size: 18.005px;
    padding-left: 1.528em;
    padding-right: 1.528em;
    padding-top: 0.789em;
    padding-bottom: 0.789em;
    min-height: 2.778em;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    &:hover{
        box-shadow: 0 3px 6px rgb(27 169 76 / 40%);

    }
`

export const SecundaryButton = styled.button`
    background-color: #FFFFFF;
    border: 1px solid #1ba94c;
    color: #1ba94c;
    font-size: 18.005px;
    padding-left: 1.528em;
    padding-right: 1.528em;
    padding-top: 0.789em;
    padding-bottom: 0.789em;
    min-height: 2.778em;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
    cursor: pointer;
    font-weight: 700;
    line-height: 1.2;

    &:hover{
        color: #32c766;
        border-color: #32c766;
        background-color: #FFFFFF !important;
    }
`

export const InputTextField = styled.input`
    margin-bottom: 10px;
    position: relative;
    box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
    padding: 1px 15px 1px 38px;
    border: 0;
    border-radius: 0;
    background-color: #F3F7F7;
    color: #0E141E;
    height: 56px;
    outline: none; //REIRAR PAR VER SE O GLOBAL ESTÁ FUNCIONANDO
    font-size: 18px;
    font-weight: 400;
    width: 100%;
    &:focus{
        box-shadow: inset 0 1px 4px rgba(0,0,0,.1),inset 0 -2px 0 var(--color-shade-dark);
    }
`