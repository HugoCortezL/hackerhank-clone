import React from 'react'
import GlobalStyle from '../../styles/global'
import {Container} from './styles'
import SignUpLogIn from '../../components/SignUpLogIn'

export default function LogIn() {
    return (
        <>
            <Container>
                <img className="logo" src="https://hrcdn.net/community-frontend/assets/brand/hr-logo-new-black-green-2f615594d2.svg" alt="" />
                <h2>For Developers</h2>
                <p>Practice coding, prepare for interviews, and get hired.</p>
                <SignUpLogIn/>
                <span className="terms">
                By signing up you agree to our 
                <a href="#"> Terms of Service</a> and <a href=""> Privacy Policy</a>
                </span>
            </Container>
            <GlobalStyle/>
        </>
    )
}
