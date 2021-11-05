import { Link } from "react-router-dom"
import styled from "styled-components"

import icon from "../assets/icons/airplane-icon.png"

const StyledP = styled.p`
  color: gray;
`
const StyledCityP = styled.p`
  font-weight: bold;
`
const MainSection = styled.div`
  height: 153px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  margin-top: -5px;
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
  margin: 0 30px 0 30px;
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
`
const ChooseFlightSection = styled.div`
  height: 153px;
  padding: 0 80px 0 80px;
  background-color: #ececec;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
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
  width: 165px;
  height: 68%;
`

const FlightDurationP = styled.p`
  font-size: 14px;
  color: gray;
`
const TimeP = styled.p`
  font-weight: bold;
  font-size: 20px;
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
`
const StopsDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 28px;
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

const SearchResultContainer = (props) => {
  const departureTime = new Date(props.departureDate)

  const flightDuration = () => {
    const mins = props.flightDurationMinutes
    const hours = Math.trunc(mins / 60)
    const minutes = mins % 60
    return `${hours} hour(s) ${minutes} minutes`
  }

  const arrivalTime = () => {
    const time1 = new Date(departureTime)
    const time2 = new Date(+time1 + props.flightDurationMinutes * 6e4)

    return time2
  }

  return (
    <>
      <MainSection>
        <StyledBoxDepartureArrive>
          <StyledP>Departure</StyledP>
          <StyledCityP>{props.departureCity}</StyledCityP>
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
          <StyledCityP>{props.arriveCity}</StyledCityP>
        </StyledBoxDepartureArrive>
      </MainSection>
      <ChooseFlightSection>
        <CompanyInfo>
          <CompanyLogoImg src={props.flightCompanyLogo || "https://via.placeholder.com/150"} alt='Logo' />
          <StyledP>{props.flightCompany}</StyledP>
        </CompanyInfo>
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
        <TimeP>
          {Math.ceil(props.price)}
          {props.priceCurrency || " USD"}
        </TimeP>
        <BookBtn to={`/orderPayment?price=${props.price}&priceCurrency=${props.priceCurrency}`}>
          <BookP>Book Now</BookP>
        </BookBtn>
      </ChooseFlightSection>
    </>
  )
}

export default SearchResultContainer
