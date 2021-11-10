import styled from "styled-components"

import Layout from "../containers/Layout"
import ToursContainer from "../containers/ToursContainer"

const Main = styled.main`
  width: 100%;
  background-color: white;
`

const HeaderSection = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 35px 0;
`

const H1 = styled.h1`
  font-size: 5em;
  font-weight: 700;
`

const Slogan = styled.p`
  color: rgba(50, 50, 50, 0.4);
  font-weight: 400;
  padding: 0 0 3px 45px;
  font-size: 0.9em;
`

const Filters = styled.div`
  background-color: rgba(115, 115, 115, 0.1);
  margin: 0 -80px;
  padding: 15px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LeftWrap = styled.div``
const RightWrap = styled.div``

const LeftRowButton = styled.button`
  border: none;
  font-size: 0.7em;
  font-weight: 600;
  margin-right: 30px;
  color: rgba(50, 50, 50, 0.4);
  background: none;
  &:hover {
    color: #af0000;
  }
`

const RightRowButton = styled(LeftRowButton)`
  font-size: 0.8em;
  &:last-child {
    margin-right: 0;
  }
`

function ToursPage() {
  return (
    <Layout>
      <Main>
        <HeaderSection>
          <TitleWrap>
            <H1>Tours</H1>
            <Slogan>
              Places that you`ve never
              <br />
              discovered.
            </Slogan>
          </TitleWrap>
          <Filters>
            <LeftWrap>
              <LeftRowButton>Price</LeftRowButton>
              <LeftRowButton>Distance</LeftRowButton>
              <LeftRowButton>Country</LeftRowButton>
              <LeftRowButton>Isolation</LeftRowButton>
            </LeftWrap>
            <RightWrap>
              <RightRowButton>Featured</RightRowButton>
              <RightRowButton>Popular</RightRowButton>
              <RightRowButton>Trending</RightRowButton>
            </RightWrap>
          </Filters>
        </HeaderSection>
        <ToursContainer />
      </Main>
    </Layout>
  )
}

export default ToursPage
