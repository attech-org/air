import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledP = styled.p`
  color: gray;
  line-height: 0px;
`
const InputSection = styled.div`
  display: flex;
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
  margin-right: 60px;
`

const SearchPanelTo = styled(SearchPanelFrom)``

const NextBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #dd0b0b9e;
`

const SearchPanel = () => {
  const [from, setFrom] = useState("")

  return (
    <SearchPanelSection>
      <InputSection>
        <SearchPanelFrom>
          <StyledP>From</StyledP>
          <input onChange={(e) => setFrom(e.target.value)} value={from} type='text' placeholder='Kryvyi Rih' />
        </SearchPanelFrom>
        <SearchPanelTo>
          <StyledP>To</StyledP>
          <input type='text' placeholder='San Francisco' />
        </SearchPanelTo>
      </InputSection>
      <Link to='/searchresult'>
        <NextBtn>&#8594;</NextBtn>
      </Link>
    </SearchPanelSection>
  )
}

export default SearchPanel
