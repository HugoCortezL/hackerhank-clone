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
    letter-spacing: 1.2px;
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
export const InputContainer = styled.div`
    position: relative;
    input{
        margin-bottom: 10px;
        position: relative;
        box-shadow: inset 0 1px 4px rgb(0 0 0 / 10%), 0 0 0 transparent;
        padding: 1px 15px 1px 52px;
        border: 0;
        border-radius: 0;
        background-color: #F3F7F7;
        color: #0E141E;
        height: 56px;
        outline: none; //REIRAR PAR VER SE O GLOBAL ESTÁ FUNCIONANDO
        font-size: 18px;
        font-weight: 400;
        width: 100%;
        &::placeholder{
            color: #738f93;
        }
    }
    span{
        position: absolute;
        top: 17px;
        left: 15px;
    }
`

export const ChooseContainer = styled.div`
    cursor: pointer;
    h3{
        font-size: 2.077em;
        font-weight: 700;
        color: #39424e;
        line-height: 1.35em;
        margin-bottom: 16px;
    }
    p{
        font-size: 1.231em;
        line-height: 1.538em;
        font-weight: 400;
        color: #576871;
        margin-bottom: 30px;
    }

    & + div{
        padding-left: 30px;
    }
`

