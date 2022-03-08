import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 480px;
    margin-left: auto;
    margin-right: auto;
    img.logo{
        margin-top: 60px;
        margin-bottom: 20px;
        height: 30px;
    }
    h2{
        color: #39424e;
        font-weight: 700;
        font-size: 26px;
        line-height: 1.4;
    }
    p{
        margin-bottom: 40px;
        font-weight: 400;
        font-size: 16px;
        color: #0E141E;
    }
    span.terms{
        margin-top: 20px;
        color: #738f93;
        font-size: 13px;
        font-weight: 400;
        a{
            color: #097BBF;
            cursor: pointer;
            font-weight: 400;
            text-decoration: none;
            &:hover{
                text-decoration: underline;
            }
        }
    }
`