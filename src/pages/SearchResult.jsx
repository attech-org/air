import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Layout from "../containers/Layout"
import SearchResultContainer from "../containers/SearchResult"

const StyledH2 = styled.h2`
  color: white;
  margin-bottom: 35px;
`

const MainSection = styled.div`
  background: black;
  width: 100%;
  min-height: 100vh;
`
const ContentSection = styled.div`
  margin: 34px 70px;
`

const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px #00000058;
  background-color: #cf0000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: 53px 0px 0px -22px;
`

const Arrow = styled.p`
  color: white;
  margin-bottom: 5px;
  font-size: 22px;
`
const Spinner = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
  margin-top: 93px;
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
  return (
    <Layout>
      <MainSection>
        <ContentSection>
          <StyledH2>Let`s plan your trip</StyledH2>
          <Link to='/'>
            <BackBtn>
              <Arrow>&#8592;</Arrow>
            </BackBtn>
          </Link>
          {!incomingData.length && <Spinner>Loading . . .</Spinner>}
          {incomingData
            .filter(
              ({ departureCity, arriveCity, departureDate }) =>
                departureCity.includes(departureCityInput) &&
                arriveCity.includes(arrivalCityInput) &&
                new Date(departureDate) >= new Date(departureStartDateInput) &&
                new Date(departureDate) <= new Date(departureEndDateInput)
            )
            .map((el) => (
              <SearchResultContainer
                key={el.id}
                departureCity={el.departureCity}
                arriveCity={el.arriveCity}
                flightCompany={el.flightCompany}
                flightCompanyLogo={el.flightCompanyLogo}
                departureDate={el.departureDate}
                flightDurationMinutes={el.flightDurationMinutes}
                price={el.price}
                priceCurrency={el.priceCurrency}
              />
            ))}
        </ContentSection>
      </MainSection>
    </Layout>
  )
}

export default SearchResultPage
