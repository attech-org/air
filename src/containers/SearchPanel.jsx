import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledP = styled.p`
  color: gray;
  margin-right: 10px;
`
const Arrow = styled.p`
  color: white;
  margin-bottom: 5px;
  font-size: 22px;
`

const StyledLabel = styled.label`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  color: gray;
  line-height: 2em;
`
const InputSection = styled.div`
  display: flex;
`

const SearchPanelSection = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const SearchPanelFrom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 60px;
`

const StyledInput = styled.input`
  border: none;
  padding: 10px 0px 10px 10px;
  &::-webkit-input-placeholder {
    font-size: 15px;
    color: black;
  }
`
const FromTo = styled.p`
  padding-left: 10px;
`
const SearchPanelTo = styled(SearchPanelFrom)``

const NextBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px #00000058;
  background-color: #cf0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 100px;
  height: 100px;
`

const SearchPanel = () => {
  const [departureCityInput, onDepartureInputChange] = useState("London")
  const [arrivalCityInput, onArrivalInputChange] = useState("Kyiv")

  const [departureStartDateInput, onDepartureStartDateChange] = useState("")
  const [departureEndDateInput, onDepartureEndDateChange] = useState("")

  const handleFromChange = (e) => onDepartureInputChange(e.target.value)
  const handleToChange = (e) => onArrivalInputChange(e.target.value)
  const handleStartDateChange = (e) => {
    onDepartureStartDateChange(e.target.value)
  }
  const handleEndDateChange = (e) => {
    onDepartureEndDateChange(e.target.value)
  }
  return (
    <SearchPanelSection>
      <InputSection>
        <SearchPanelFrom>
          <StyledLabel>
            <FromTo>From</FromTo>
            <StyledInput onChange={handleFromChange} value={departureCityInput} type='text' placeholder='Kryvyi Rih' />
          </StyledLabel>
        </SearchPanelFrom>
        <SearchPanelTo>
          <StyledLabel>
            <FromTo> To </FromTo>
            <StyledInput onChange={handleToChange} value={arrivalCityInput} type='text' placeholder='San Francisco' />
          </StyledLabel>
        </SearchPanelTo>
      </InputSection>

      <StyledLabel>
        <FromTo> Start date </FromTo>
        <StyledInput onChange={handleStartDateChange} value={departureStartDateInput} type='date' />
      </StyledLabel>

      <StyledLabel>
        <FromTo> End date </FromTo>
        <StyledInput onChange={handleEndDateChange} value={departureEndDateInput} type='date' />
      </StyledLabel>

      <StyledLink
        to={`/search-result?departureCity=${departureCityInput}&arrivalCity=${arrivalCityInput}&departureStartDate=${departureStartDateInput}&departureEndDate=${departureEndDateInput}`}
      >
        <NextBtn>
          <Arrow>&#8594;</Arrow>
        </NextBtn>
        <StyledP>Next</StyledP>
      </StyledLink>
    </SearchPanelSection>
  )
}

export default SearchPanel
