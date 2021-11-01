import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledP = styled.p`
  color: gray;
  text-decoration: none;
  margin-right: 10px;
`
const Arrow = styled.p`
  color: white;
`

const StyledLabel = styled.label`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
  color: gray;
  line-height: 3em;
  margin-bottom: 21px;
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

const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;

  width: 100px;
  height: 100px;
`

const SearchPanelFrom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-right: 60px;
`

const StyledInput = styled.input`
  border: none;
  &::-webkit-input-placeholder {
    font-weight: bold;
    font-size: 15px;
    color: black;
  }
`

const SearchPanelTo = styled(SearchPanelFrom)``

const NextBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px #00000058;
  border: solid 1px black;
  background-color: #cf0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const SearchPanel = () => {
  // const departureCity = "London"
  // const arrivalCity = "Kyiv"

  const [departureCityInput, onDepartureInputChange] = useState("Monino")
  const [arrivalCityInput, onArrivalInputChange] = useState("Ranong")

  return (
    <SearchPanelSection>
      <InputSection>
        <SearchPanelFrom>
          <StyledLabel>
            From
            <StyledInput
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
            <StyledInput
              onChange={(e) => onArrivalInputChange(e.target.value)}
              value={arrivalCityInput}
              type='text'
              placeholder='San Francisco'
            />
          </StyledLabel>
        </SearchPanelTo>
      </InputSection>

      <StyledLink to={`/search-result?departureCity=${departureCityInput}&arrivalCity=${arrivalCityInput}`}>
        <ButtonSection>
          <NextBtn>
            <Arrow>&#8594;</Arrow>
          </NextBtn>
          <StyledP>Next</StyledP>
        </ButtonSection>
      </StyledLink>
    </SearchPanelSection>
  )
}

export default SearchPanel
