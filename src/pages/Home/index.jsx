import {Content, LeftSide, ChooseLoginContainer, FlexContainer} from './styles'

import Header from '../../components/Header'

export default function Home() {
  return (
    <>
      <Header></Header>
      <Content>
        <LeftSide>
          <h1>
            <span>Matching developers</span>
            <br/>
            <span>with great companies.</span>
          </h1>
          <FlexContainer>
            <ChooseLoginContainer>
              <h3>For Companies</h3>
              <p>
                <span>We are the market-leading technical</span>
                <br />
                <span>interview platform to identify and hire</span>
                <br />
                <span>developers wherever they are.</span>
              </p>
            </ChooseLoginContainer>
            <ChooseLoginContainer>
              <h3>For Job Seekers</h3>
              <p>
                <span>Join over 18 million developers,</span>
                <br />
                <span>practice coding skills, prepare for</span>
                <br />
                <span>Interviews and get hired.</span>
              </p>
            </ChooseLoginContainer>
          </FlexContainer>
        </LeftSide>
      </Content>
    </>
  )
}
