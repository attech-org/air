import { useState } from "react"
import DatePicker from "react-date-picker"
import { Link } from "react-router-dom"
import styled from "styled-components"

import ArrowButton from "../components/ArrowButton"

const StyledP = styled.p`
  color: gray;
  margin-right: 10px;
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
`

const FromTo = styled.p`
  padding-left: 10px;
`
const SearchPanelTo = styled(SearchPanelFrom)``

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row-reverse;
  width: 100px;
  height: 100px;
`
const StyledForm = styled.form`
  width: 350px;
  height: 40px;
  position: relative;
`
const Autocomplete = styled.ul`
  position: absolute;
  left: 0;
  top: 50px;
  width: 100%;
  background: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.15);
  max-height: 240px;
  height: auto;
  overflow: auto;
`
const AutocompleteItem = styled.li`
  padding: 10px;
  &:hover {
    background: #e0e0e0;
    cursor: pointer;
    transition: 1s;
  }
`
const SearchPanel = () => {
  const [departureCityInput, onDepartureInputChange] = useState("")
  const [arrivalCityInput, onArrivalInputChange] = useState("")

  const [departureStartDateInput, onDepartureStartDateChange] = useState("")
  const [departureEndDateInput, onDepartureEndDateChange] = useState("")
  const [autocompleteDCities, onAutocompleteDCitiesChange] = useState([])
  const [autocompleteACities, onAutocompleteACitiesChange] = useState([])

  const handleFromChange = (e) => {
    onDepartureInputChange(e.target.value)
    onAutocompleteDCitiesChange(
      cityNamesArr.filter((city) => city.toLowerCase().includes(e.target.value.toLowerCase()))
    )
  }
  const handleToChange = (e) => {
    onArrivalInputChange(e.target.value)
    onAutocompleteACitiesChange(
      cityNamesArr.filter((city) => city.toLowerCase().includes(e.target.value.toLowerCase()))
    )
  }
  const handleStartDateChange = (e) => {
    onDepartureStartDateChange(e)
  }
  const handleEndDateChange = (e) => {
    onDepartureEndDateChange(e)
  }

  const itemClickHandler = (type, city) => {
    if (type === "depart") {
      onAutocompleteDCitiesChange([])
      onDepartureInputChange(city)
    } else if (type === "arrive") {
      onAutocompleteACitiesChange([])
      onArrivalInputChange(city)
    }
  }

  const cityNamesArr = [
    "London",
    "Tokio",
    "Moscow",
    "Kyiv",
    "Prague",
    "Venice",
    "Athens",
    "Barcelona",
    "Lviv",
    "Odesa",
    "Minsk",
  ]
  return (
    <SearchPanelSection>
      <InputSection>
        <SearchPanelFrom>
          <StyledLabel>
            <FromTo>From</FromTo>
            <StyledForm>
              <StyledInput
                onChange={handleFromChange}
                value={departureCityInput}
                type='text'
                placeholder='Kryvyi Rih'
              />
              {departureCityInput && Boolean(autocompleteDCities.length) && (
                <Autocomplete>
                  {autocompleteDCities.map((city, index) => (
                    <AutocompleteItem onClick={() => itemClickHandler("depart", city)} key={index}>
                      {city}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              )}
            </StyledForm>
          </StyledLabel>
        </SearchPanelFrom>
        <SearchPanelTo>
          <StyledLabel>
            <FromTo> To </FromTo>
            <StyledForm>
              <StyledInput onChange={handleToChange} value={arrivalCityInput} type='text' placeholder='San Francisco' />
              {arrivalCityInput && Boolean(autocompleteACities.length) && (
                <Autocomplete>
                  {autocompleteACities.map((city, index) => (
                    <AutocompleteItem onClick={() => itemClickHandler("arrive", city)} key={index}>
                      {city}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>
              )}
            </StyledForm>
          </StyledLabel>
        </SearchPanelTo>
      </InputSection>
      <StyledLabel>
        <FromTo> Start date </FromTo>
        <DatePicker onChange={handleStartDateChange} value={departureStartDateInput} />
      </StyledLabel>
      <StyledLabel>
        <FromTo> End date </FromTo>
        <DatePicker onChange={handleEndDateChange} value={departureEndDateInput} />
      </StyledLabel>
      <StyledLink
        to={`/search-result?departureCity=${departureCityInput}&arrivalCity=${arrivalCityInput}&departureStartDate=${
          departureStartDateInput && departureStartDateInput.toISOString()
        }&departureEndDate=${departureEndDateInput && departureEndDateInput.toISOString()}`}
      >
        <ArrowButton right />
        <StyledP>Next</StyledP>
      </StyledLink>
    </SearchPanelSection>
  )
}

export default SearchPanel
