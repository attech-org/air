import { Link } from "react-router-dom"
import styled from "styled-components"

import icon from "../assets/icons/airplane-icon.png"

const StyledP = styled.p`
  color: gray;
`
const StyledCityP = styled.p`
  font-weight: bold;
`
const ResultSection = styled.div`
  padding: 1em;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  background-color: white;
  display: flex;
  justify-content: center;
`

const StyledBoxDepartureArrive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2em;
`
const StyledIconBox = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;
  @media (max-width: 1080px) {
    justify-content: center;
  }
`

const StyledImg = styled.img`
  width: 40px;
  height: 40px;
  opacity: 0.4;
`

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #999999;
  @media (max-width: 1080px) {
    display: none;
  }
`

const ChooseFlightSection = styled.div`
  padding: 1rem 3rem;
  background-color: #ececec;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:last-of-type {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom: none;
  }
  border-bottom: 1px solid white;
  @media (max-width: 1080px) {
    padding: 1rem;
    height: 180px;
    flex-direction: column;
    justify-content: center;
  }
`
const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 25%;
  @media (max-width: 1080px) {
    width: auto;
  }
`
const CompanyLogoImg = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid black;
`

const DateBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 2em;
  height: 68%;
  @media (max-width: 1080px) {
    height: auto;
  }
`

const FlightDurationP = styled.p`
  font-size: 14px;
  color: gray;
  @media (max-width: 1080px) {
    display: none;
  }
`
const TimeP = styled.p`
  font-weight: bold;
  font-size: 20px;
  white-space: nowrap;
`
const BookBtn = styled(Link)`
  border: 3px solid #d30000;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #a5a5a536;
    transition: 0.3s;
  }
`
const BookP = styled.p`
  color: #d30000;
  font-weight: bold;
`

const StopsIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  width: 165px;
  height: 68%;
  margin: 0 0.5rem;
  @media (max-width: 1080px) {
    width: auto;
    height: auto;
    justify-content: center;
  }
`
const StopsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
  @media (max-width: 1080px) {
    margin-bottom: 0;
  }
`
const StopsP = styled.p`
  width: 55px;
  height: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  border-radius: 50px;
  color: white;
  background-color: black;
`

const Price = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 2rem;
  @media (max-width: 1080px) {
    align-items: center;
    width: auto;
    margin-bottom: 1rem;
    margin-right: 0;
  }
`
const Spinner = styled.p`
  color: white;
  font-size: 22px;
  text-align: center;
  margin-top: 93px;
`

const DatesInfoBlock = styled.div`
  display: flex;
  margin: 1rem 0;
`

const ActionsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 0 0 25%;
  @media (max-width: 1080px) {
    flex-direction: column;
    align-items: center;
  }
`

const SearchResultContainer = ({ filteredData, incomingData }) => {
  const groupedData = {}

  filteredData.forEach((el) => {
    const keyName = `${el.departureCity}-${el.arriveCity}`
    groupedData[keyName] = [...(groupedData[keyName] || []), el]
  })

  return (
    <>
      {!incomingData.length && <Spinner>Loading . . . </Spinner>}

      {filteredData.length
        ? Object.entries(groupedData)
            .map(([key, val]) => {
              const [departureCity, arriveCity] = key.split("-")
              return (
                <>
                  <ResultSection key={key}>
                    <StyledBoxDepartureArrive>
                      <StyledP>Departure</StyledP>
                      <StyledCityP>{departureCity}</StyledCityP>
                    </StyledBoxDepartureArrive>
                    <StyledIconBox>
                      <Dot />
                      <Dot />
                      <Dot />
                      <StyledImg src={icon} alt='PlaneImg' />
                      <Dot />
                      <Dot />
                      <Dot />
                    </StyledIconBox>
                    <StyledBoxDepartureArrive>
                      <StyledP>Arrival</StyledP>
                      <StyledCityP>{arriveCity}</StyledCityP>
                    </StyledBoxDepartureArrive>
                  </ResultSection>
                  <div>
                    {val.map((el) => {
                      const departureTime = new Date(el.departureDate)

                      const flightDuration = () => {
                        const mins = el.flightDurationMinutes
                        const hours = Math.trunc(mins / 60)
                        const minutes = mins % 60
                        return `${hours} hour(s) ${minutes} minutes`
                      }

                      const arrivalTime = () => {
                        const time1 = new Date(departureTime)
                        const time2 = new Date(+time1 + el.flightDurationMinutes * 6e4)

                        return time2
                      }
                      return (
                        <ChooseFlightSection key={el.id}>
                          <CompanyInfo>
                            <CompanyLogoImg
                              src={el.flightCompanyLogo || "https://via.placeholder.com/150"}
                              alt='Logo'
                            />
                            <StyledP>{el.flightCompany}</StyledP>
                          </CompanyInfo>
                          <DatesInfoBlock>
                            <DateBox>
                              <TimeP>{departureTime.toTimeString().slice(0, 5)}</TimeP>
                              <FlightDurationP>{departureTime.toDateString()}</FlightDurationP>
                            </DateBox>
                            <StopsIndicator>
                              <StopsDiv>
                                <Dot />
                                <Dot />
                                <Dot />
                                <StopsP>0 Stops</StopsP>
                                <Dot />
                                <Dot />
                                <Dot />
                              </StopsDiv>
                              <FlightDurationP>{flightDuration()}</FlightDurationP>
                            </StopsIndicator>
                            <DateBox>
                              <TimeP>{arrivalTime().toTimeString().slice(0, 5)}</TimeP>
                              <FlightDurationP>{arrivalTime().toDateString()}</FlightDurationP>
                            </DateBox>
                          </DatesInfoBlock>
                          <ActionsBox>
                            <Price>
                              <TimeP>
                                {Math.ceil(el.price) + " "}
                                {el.priceCurrency || " USD"}
                              </TimeP>
                            </Price>
                            <BookBtn to={`/orderPayment?price=${el.price}&priceCurrency=${el.priceCurrency}`}>
                              <BookP>Book Now</BookP>
                            </BookBtn>
                          </ActionsBox>
                        </ChooseFlightSection>
                      )
                    })}
                  </div>
                </>
              )
            })
            .slice(0, 5)
        : incomingData.length && <Spinner>No tickets available</Spinner>}
    </>
  )
}

export default SearchResultContainer
