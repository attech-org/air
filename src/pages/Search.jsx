import styled from "styled-components"

import Layout from "../containers/Layout"
import SearchContainer from "../containers/Search"

const StyledH1 = styled.h1`
  color: white;
  margin-bottom: 35px;
  font-size: 37px;
  line-height: 1.2em;
`

const SearchSection = styled.div`
  background: black;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`
const SearchSectionContent = styled.div`
  margin: 160px 70px;
`

const SearchPage = () => {
  return (
    <Layout>
      <SearchSection>
        <SearchSectionContent>
          <StyledH1>
            Air free lets you plan the most amazing trips <br /> of your lifetime ever, easily.
          </StyledH1>
          <SearchContainer />
        </SearchSectionContent>
      </SearchSection>
    </Layout>
  )
}

export default SearchPage
