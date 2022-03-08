import React from 'react'
import {SocialMediaContainer, LoginLabel, SocialMedias} from './styles'

export default function SocialMedia() {
    return (
        <SocialMediaContainer>
            <LoginLabel>
                <span>
                    or connect with
                </span>
            </LoginLabel>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <SocialMedias>
                    <img src="https://hrcdn.net/community-frontend/assets/facebook-colored-af4249157d.svg" alt="" />
                </SocialMedias>
                <SocialMedias>
                    <img src="https://hrcdn.net/community-frontend/assets/google-colored-20b8216731.svg" alt="" />
                </SocialMedias>
                <SocialMedias>
                    <img src="https://hrcdn.net/community-frontend/assets/linkedin-colored-1db195795c.svg" alt="" />
                </SocialMedias>
                <SocialMedias>
                    <img src="https://hrcdn.net/community-frontend/assets/github-colored-1db995054b.svg" alt="" />
                </SocialMedias>
            </div>
        </SocialMediaContainer>
    )
}
