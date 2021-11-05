import styled from "styled-components"

import SearchPanel from "./SearchPanel"

const SearchContainerSection = styled.div`
  background-color: white;
  height: 110px;
  padding: 0 80px 0 80px;
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
