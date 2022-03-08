import React from 'react'
import { useState } from "react";
import {SignUpLogInContainer, TabsContainer, Tab, ContentsContainer, Content, FormContainer, RememberMeContainer} from './styles'
import {InputContainer, PrimaryButton} from '../../styles/principalComponents'
import SocialMedia from '../SocialMedia'
import { AiOutlineUser, AiOutlineMail, AiOutlineLock } from 'react-icons/ai'

export default function SignUpLogIn() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <SignUpLogInContainer>
            <TabsContainer>
                <Tab 
                    className={toggleState === 1 ? "active" : ""}
                    onClick={() => toggleTab(1)}
                >
                    Sign up
                </Tab>
                <Tab className={toggleState === 2 ? "active" : ""}
                    onClick={() => toggleTab(2)}
                >
                    Log in
                </Tab>
            </TabsContainer>
            <ContentsContainer>
                <Content className={toggleState === 1 ? "active" : ""}>
                    <FormContainer>
                        <form action="">
                            <InputContainer>
                                <input type="text" placeholder="First & Last name"/>
                                <span>
                                    <AiOutlineUser size={22} color="#738f93"/>
                                </span>
                            </InputContainer>
                            <InputContainer>
                                <input type="email" placeholder="Email"/>
                                <span>
                                    <AiOutlineMail size={22} color="#738f93"/>
                                </span>
                            </InputContainer>
                            <InputContainer>
                                <input type="password" placeholder="Your password"/>
                                <span>
                                    <AiOutlineLock size={22} color="#738f93"/>
                                </span>
                            </InputContainer>
                            <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <PrimaryButton>
                                Create An Account
                            </PrimaryButton>
                            </div>
                        </form>
                    </FormContainer>
                    <SocialMedia/>
                </Content>
                <Content className={toggleState === 2 ? "active" : ""}>
                <FormContainer>
                        <form action="">
                            <InputContainer>
                                <input type="text" placeholder="Your username or email"/>
                                <span>
                                    <AiOutlineUser size={22} color="#738f93"/>
                                </span>
                            </InputContainer>
                            <InputContainer>
                                <input type="password" placeholder="Your password"/>
                                <span>
                                    <AiOutlineLock size={22} color="#738f93"/>
                                </span>
                            </InputContainer>
                            <RememberMeContainer>
                                <div style={{display: "flex", alignItems: "center"}}>
                                    <label className="container" htmlFor="remember">Remember me
                                    <input type="checkbox" id="remember"/>
                                    <span className="checkmark"></span>
                                    </label>
                                </div>
                                <a href="#">
                                    Forgot yout password?
                                </a>
                            </RememberMeContainer>
                            <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <PrimaryButton>
                                Log In
                            </PrimaryButton>
                            </div>
                        </form>
                    </FormContainer>
                    <SocialMedia/>
                </Content>
            </ContentsContainer>
        </SignUpLogInContainer>
    )
}
