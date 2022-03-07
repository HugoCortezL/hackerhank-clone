import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 11px;
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex: 2 1;
    padding: 20px 0;

`

export const LeftSide = styled.div`
    h1{
        font-size: 40.001px;
        font-weight: 400;
        line-height: 1.35em;
        letter-spacing: -0.013em;
        color: #738f93;
        margin-bottom: 45px;
    }
`

export const RightSide = styled.div`
    width: fill;
    margin: auto;
`

export const FlexContainer =  styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const FooterContainer = styled.div`
    padding: 5.385em 0;
    p{
        font-size: 0.923em;
        color: #576871;
        line-height: 1.538em;
        font-weight: 400;
        margin-bottom: 0.5em;
    }
    a{
        text-decoration: none;
    }
    a.carrers{
        color: #39424e;
    }
    a.policy{
        color: #738f93;
    }
    a:hover{
        text-decoration: underline;
    }

`