import {Container, Content, LeftSide, RightSide, FlexContainer, FooterContainer} from './styles'
import {PrimaryButton, SecundaryButton, ChooseContainer} from '../../styles/principalComponents'
import Header from '../../components/Header'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Container>
        <Content>
          <LeftSide>
            <h1>
              <span>Matching developers</span>
              <br/>
              <span>with great companies.</span>
            </h1>
            <FlexContainer>
              <ChooseContainer>
                <h3>For Companies</h3>
                <p>
                  <span>We are the market-leading technical</span>
                  <br />
                  <span>interview platform to identify and hire</span>
                  <br />
                  <span>developers wherever they are.</span>
                </p>
                <PrimaryButton>
                  Start Hiring
                </PrimaryButton>
              </ChooseContainer>
              <ChooseContainer>
                <Link to="/login" class="link-react-dom">
                  <h3>For Job Seekers</h3>
                  <p>
                    <span>Join over 18 million developers,</span>
                    <br />
                    <span>practice coding skills, prepare for</span>
                    <br />
                    <span>Interviews and get hired.</span>
                  </p>
                  <SecundaryButton>
                    Sign Up & Code
                  </SecundaryButton>
                </Link>
              </ChooseContainer>
            </FlexContainer>
          </LeftSide>
          <RightSide>
            <p>
              IMAGE
            </p>
          </RightSide>
        </Content>
        <FooterContainer>
          <p>Copyright © 2022 HackerRank  |  <a href="#" class="carrers">Careers</a> </p>
          <p><a href="#" class="policy">Privacy Policy</a> </p>

        </FooterContainer>
      </Container>
    </>
  )
}
