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
  height: 100vh;
  max-width: 1400px;
  width: calc(100% - 30px * 2); // horizontal padding
  margin-top: 160px;
  padding: 0 30px;

  @media (max-width: 1080px) {
    padding: 0 5px;
    width: calc(100% - 5px * 2); // horizontal padding
  }
`

const SearchPage = () => {
  return (
    <Layout>
      <SearchSection>
        <StyledH1>
          Air free lets you plan the most amazing trips <br /> of your lifetime ever, easily.
        </StyledH1>
        <SearchContainer />
      </SearchSection>
    </Layout>
  )
}

export default SearchPage
