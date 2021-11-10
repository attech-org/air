import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"

import ArrowButton from "../components/ArrowButton"
import Layout from "../containers/Layout"
import SearchResultContainer from "../containers/SearchResult"

const StyledLink = styled(Link)`
  text-decoration: none;
  position: absolute;
  margin: 28px 0px 0px -22px;
`
const StyledH2 = styled.h2`
  color: white;
  margin-bottom: 35px;
  font-size: 5vh;
  margin-bottom: 4vh;
`

const MainSection = styled.div`
  width: 100%;
  min-height: 100vh;
`
const ContentSection = styled.div`
  margin: 34px 70px;
`

const SOURCE_URL =
  "https://gist.githubusercontent.com/alexandrtovmach/80574d5e0979a3e8f405304839d057e3/raw/948b41de676e7e14b68968987f8f264cce52c922/air_routes.json"
const SearchResultPage = () => {
  const query = new URLSearchParams(useLocation().search || "")
  const departureCityInput = query.get("departureCity")
  const arrivalCityInput = query.get("arrivalCity")
  const departureStartDateInput = query.get("departureStartDate")
  const departureEndDateInput = query.get("departureEndDate")

  const [incomingData, setIncomingData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SOURCE_URL)
      const data = await res.json()
      setIncomingData(data)
    }
    fetchData()
  }, [])

  const filteredData = incomingData.filter(
    ({ departureCity, arriveCity, departureDate }) =>
      departureCity.includes(departureCityInput) &&
      arriveCity.includes(arrivalCityInput) &&
      (!departureStartDateInput || new Date(departureDate) >= new Date(departureStartDateInput)) &&
      (!departureEndDateInput || new Date(departureDate) <= new Date(departureEndDateInput))
  )

  return (
    <Layout>
      <MainSection>
        <ContentSection>
          <StyledH2>Let`s plan your trip</StyledH2>
          <StyledLink to='/'>
            <ArrowButton />
          </StyledLink>
          <SearchResultContainer incomingData={incomingData} filteredData={filteredData} />
          ))
        </ContentSection>
      </MainSection>
    </Layout>
  )
}

export default SearchResultPage
