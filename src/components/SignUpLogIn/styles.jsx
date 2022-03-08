import styled from 'styled-components'

export const SignUpLogInContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: center;
    color: #0e141e;
    position: relative;
    width: 100%;
    background: #fff;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 20%);
    overflow: hidden;
`

export const TabsContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    text-align: center;
`

export const Tab = styled.button`
    border: none;
    display: block;
    color: inherit;
    font-weight: 400;
    font-size: 18px;
    flex: 1;
    padding: 0;
    background: #f9fbfb;
    text-align: center;
    line-height: 60px;
    position: relative;
    cursor: pointer;
    &.active{
        box-shadow: 0 6px 16px 0 rgb(0 0 0 / 20%);
        position: relative;
        z-index: 1;
        background: #fff;
        color: #0e141e;
        &::after{
            position: absolute;
            right: -10px;
            bottom: -20px;
            left: -10px;
            z-index: 10;
            display: block;
            height: 20px;
            background: #fff;
            content: "";
        }
    }
`

export const ContentsContainer = styled.div`
    padding: 30px;
    background: #fff;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 20%);
    box-sizing: border-box;
    width: 100%;
    outline-offset: -1px;
    color: #0e141e;
`

export const Content = styled.div`
    min-width: auto;
    font-weight: 400;
    color: #0e141e;
    text-align: center;
    display: none;
    &.active{
        display: block;
    }
`

export const FormContainer =  styled.div`
    
`

export const RememberMeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    padding: 19px 0;
    /*TESTE */


    .container {
    display: block;
    position: relative;
    padding-left: 17px;
    cursor: pointer;
    font-size: 14px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    }

    /* Hide the browser's default checkbox */
    .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
    position: absolute;
    top: 0;
    left: -10px;
    height: 18px;
    width: 18px;
    background-color: #E7EEEF; /* Cor de fundo not(checked)*/
    }

    /* On mouse-over, add a grey background color */
    .container:hover input ~ .checkmark {
    background-color: #E7EEEF; /* cor de fundo quando hover antes do checked */
    }

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
    background-color: #068932;/*Cor de fundo do checkbox*/
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
    display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
    left: 6px;
    top: 2px;
    width: 3px;
    height: 8px;
    border: solid white; /* Cor do check */
    border-width: 0 3px 3px 0;
    border-radius: 3px;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    }






    /*TESTE */

    div label{
        margin-left: 10px;
        white-space: normal;
        font-weight: 400;
        cursor: pointer;
    }
    a{
        color: #097bbf;
        cursor: pointer;
        font-weight: 400;
        font-size: 14px;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`