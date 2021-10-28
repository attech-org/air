import styled from "styled-components"

const SearchPanelSection = styled.div`
  display: flex;
`
const SearchPanelFrom = styled.div`
  margin-right: 60px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
const SearchPanelTo = styled(SearchPanelFrom)``

const StyledP = styled.p`
  color: gray;
`

const SearchPanel = () => {
  return (
    <SearchPanelSection>
      <SearchPanelFrom>
        <StyledP>From</StyledP>
        <input type='text' placeholder='Kryvyi Rih' />
      </SearchPanelFrom>
      <SearchPanelTo>
        <StyledP>To</StyledP>
        <input type='text' placeholder='San Francisco' />
      </SearchPanelTo>
    </SearchPanelSection>
  )
}

export default SearchPanel
