import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    min-height: 10em;
    padding: 2.462em 0 2.308em;
`

export const StickContainer = styled.div`
    background-color: #FFFFFF;
    position: relative;
    width: 1170px;
    height: 4.538em;
    padding: 1em 15px 0 15px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a{
        img{
            max-width: 12.923em;
        }
    }
`

export const OptionsContainer = styled.div`
    display: flex;
    align-items: center;
`

export const ButtonContainer = styled.div`
    font-size: 1.167em;
    padding: 0.429em 1.429em;
    line-height: 1.111em;
    border: ${props => props.border == 'true' ? '1px solid #576871' : 'none'};
    border-radius: 2px;
    color: #576871;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-weight: 400;
    letter-spacing: 0px;
`