import styled from 'styled-components'


export const LoginLabel =  styled.div`
    position: relative;
    margin: 30px 0 20px;
    color: #b7c9cc;
    text-align: center;
    &:before{
        position: absolute;
        top: 50%;
        left: 0;
        margin-top: -0.5px;
        width: 100%;
        border-top: 1px solid #b7c9cc;
        content: "";
    }
    span{
        position: relative;
        z-index: 1;
        display: inline-block;
        padding: 0 30px;
        background: #FFFFFF;

    }
`

export const SocialMediaContainer =  styled.div`
    box-sizing: border-box;
    display: block;
    text-align: center;
`

export const SocialMedias =  styled.div`
    justify-content: flex-start;
    display: flex;
    flex: 1;
    border-right: 1px solid var(--color-shade-light,#e7eeef);
    align-items: center;
    justify-content: space-around;
    &:last-child{
        justify-content: flex-end;
        border-right: none;
        max-width: calc(16.66667% + 14.66667px);
    }
    &:first-child{
        max-width: calc(16.66667% + 14.66667px);
        justify-content: flex-start;
    }
    & + div{
        display: flex;
        flex: 1;
        border-right: 1px solid var(--color-shade-light,#e7eeef);
        align-items: center;
        justify-content: space-around;
    }
    img{
        width: 44px;
        height: 44px;
        cursor: pointer;
    }
`