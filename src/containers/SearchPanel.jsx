import styled from "styled-components"

const StyledP = styled.p`
  color: gray;
  line-height: 0px;
`

const SearchPanelSection = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchPanelFrom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const SearchPanelTo = styled(SearchPanelFrom)``

const NextBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dd0b0b9e;
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
      <NextBtn>&#8594;</NextBtn>
    </SearchPanelSection>
  )
}

export default SearchPanel
