import { useState } from "react"
import DatePicker from "react-date-picker"
import { Link } from "react-router-dom"
import styled from "styled-components"

import ArrowButton from "../components/ArrowButton"

const StyledP = styled.p`
  color: gray;
  margin-right: 10px;
`

const SearchPanelSection = styled.div`
  background-color: white;
  padding: 30px 60px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1080px) {
    padding: 30px;
    flex-direction: column;
  }
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: gray;
  position: relative;
  width: 100%;
  max-width: 500px;
  margin-right: 3em;
  font-size: 90%;

  @media (max-width: 1080px) {
    margin-bottom: 2em;
    margin-right: 0;
  }
`
const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid gray;
  padding: 10px 0px 10px 10px;
  font-size: 16px;
  width: calc(100% - 10px);
  margin-top: 5px;
`

const FromTo = styled.p``
const FromToDate = styled(FromTo)`
  margin-bottom: 3px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row-reverse;
  width: 100px;
  height: 100px;
`
const Autocomplete = styled.ul`
  position: absolute;
  left: 0;
  top: 100%;
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
const Date = styled(DatePicker)`
  border: 1px solid gray;
  border-radius: 4px;
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
      <StyledLabel>
        From
        <StyledInput onChange={handleFromChange} value={departureCityInput} type='text' />
        {departureCityInput && Boolean(autocompleteDCities.length) && (
          <Autocomplete>
            {autocompleteDCities.map((city, index) => (
              <AutocompleteItem onClick={() => itemClickHandler("depart", city)} key={index}>
                {city}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        )}
      </StyledLabel>
      <StyledLabel>
        To
        <StyledInput onChange={handleToChange} value={arrivalCityInput} type='text' />
        {arrivalCityInput && Boolean(autocompleteACities.length) && (
          <Autocomplete>
            {autocompleteACities.map((city, index) => (
              <AutocompleteItem onClick={() => itemClickHandler("arrive", city)} key={index}>
                {city}
              </AutocompleteItem>
            ))}
          </Autocomplete>
        )}
      </StyledLabel>

      <StyledLabel>
        <FromToDate> Start date </FromToDate>
        <Date onChange={handleStartDateChange} value={departureStartDateInput} />
      </StyledLabel>
      <StyledLabel>
        <FromToDate> End date </FromToDate>
        <Date onChange={handleEndDateChange} value={departureEndDateInput} />
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
