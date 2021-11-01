import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { Link } from "react-router-dom"
import styled from "styled-components"

import Layout from "../containers/Layout"
import SearchResultContainer from "../containers/SearchResult"
import { MOCK } from "../MOCK"

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
  border: solid 1px black;
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
`
const SearchResultPage = () => {
  const query = new URLSearchParams(useLocation().search || "")
  const departureCityInput = query.get("departureCity")
  const arrivalCityInput = query.get("arrivalCity")

  const [incomingData, setIncomingData] = useState([])

  useEffect(() => {
    const res = MOCK
    setIncomingData(res)
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
          {incomingData
            .filter(
              ({ departureCity, arriveCity }) =>
                departureCity.includes(departureCityInput) && arriveCity.includes(arrivalCityInput)
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
