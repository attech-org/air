import styled from "styled-components"

import SearchPanel from "./SearchPanel"

const SearchContainerSection = styled.div`
  background-color: white;
  height: 110px;
  width: 800px;
  padding: 0 60px 0 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
`

const SearchContainer = () => {
  return (
    <SearchContainerSection>
      <SearchPanel />
    </SearchContainerSection>
  )
}

export default SearchContainer
