import styled from 'styled-components'

export const Container = styled.div`

`

export const Content = styled.div`
    display: flex;
    align-items: center;
    max-width: 1170px;
    padding: 0 15px;
    padding-top: 30px;
    margin-left: auto;
    margin-right: auto;

`

export const LeftSide = styled.div`
    h1{
        font-size: 40.001px;
        font-weight: 400;
        line-height: 1.35em;
        letter-spacing: -0.033em;
        color: #738f93;
        margin-bottom: 45px;
    }
`

export const ChooseLoginContainer = styled.div`
    cursor: pointer;
    h3{
        font-size: 2.077em;
        font-weight: 700;
        color: #39424e;
        line-height: 1.35em;
        margin-bottom: 10px;
    }
    p{
        font-size: 1.231em;
        line-height: 1.538em;
        font-weight: 400;
        color: #576871;
    }

    & + div{
        padding-left: 30px;
    }
`

export const FlexContainer =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`