import styled from "styled-components"

import Layout from "../containers/Layout"
import SearchContainer from "../containers/Search"

const StyledH1 = styled.h1`

`

const SearchPage = () => {
  return (
    <Layout>
      <StyledH1>Stellar lets you plan the most amazing trips of your lifetime ever  </StyledH1>
      <SearchContainer />
    </Layout>
  )
}

export default SearchPage
