import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLabel = styled.label`
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
  // const departureCity = "London"
  // const arrivalCity = "Kyiv"

  const [departureCityInput, onDepartureInputChange] = useState("")
  const [arrivalCityInput, onArrivalInputChange] = useState("")

  return (
    <SearchPanelSection>
      <InputSection>
        <SearchPanelFrom>
          <StyledLabel>
            From
            <input
              onChange={(e) => onDepartureInputChange(e.target.value)}
              value={departureCityInput}
              type='text'
              placeholder='Kryvyi Rih'
            />
          </StyledLabel>
        </SearchPanelFrom>
        <SearchPanelTo>
          <StyledLabel>
            To
            <input
              onChange={(e) => onArrivalInputChange(e.target.value)}
              value={arrivalCityInput}
              type='text'
              placeholder='San Francisco'
            />
          </StyledLabel>
        </SearchPanelTo>
      </InputSection>
      <Link to={`/search-result?departureCity=${departureCityInput}&arrivalCity=${arrivalCityInput}`}>
        <NextBtn>&#8594;</NextBtn>
      </Link>
    </SearchPanelSection>
  )
}

export default SearchPanel
