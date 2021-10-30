// import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styled from "styled-components"

import Layout from "../containers/Layout"
import SearchContainer from "../containers/Search"
// import SearchResult from "./SearchResult"

const StyledP = styled.p`
  color: white;
  margin-top: 50px;
`

const StyledH1 = styled.h1`
  color: white;
  margin-bottom: 35px;
`

const SearchSection = styled.div`
  background: black;
  width: 100%;
  height: 100vh;
`
const SearchSectionContent = styled.div`
  margin: 160px 100px;
`

const SearchPage = () => {
  return (
    <Layout>
      <SearchSection>
        <SearchSectionContent>
          <StyledH1>
            Stellar lets you plan the most amazing trips <br /> of your lifetime ever, easily.
          </StyledH1>
          <SearchContainer />
          <StyledP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <br /> Dicta id laboriosam temporibus ipsa, facere totam asperiores, quis voluptates quasi consequatur
            laborum! Impedit nobis!
          </StyledP>
        </SearchSectionContent>
      </SearchSection>
    </Layout>
  )
}

export default SearchPage
