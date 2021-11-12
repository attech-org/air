import { Link } from "react-router-dom"
import styled from "styled-components"

import icon from "../assets/icons/icon-heart.png"

const Card = styled(Link)`
  width: 240px;
  height: 370px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: black;
  margin-bottom: 80px;
`

const PreviewImg = styled.div`
  width: 240px;
  height: 240px;
  margin-bottom: 50px;
  background-image: ${(props) => `url(${props.bg})`};
  border-radius: 5px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 0px 0px 60px -30px rgba(34, 60, 80, 1);
`

const Title = styled.h3`
  font-size: 0.8em;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-bottom: 15px;
`

const LocationRow = styled.div`
  display: flex;
  justify-content: space-between;
`

const LocationText = styled.p`
  font-size: 0.7em;
  color: rgba(50, 50, 50, 0.4);
  margin-bottom: 15px;
`

const Text = styled(LocationText)``

const TextFavor = styled(LocationText)`
  margin: 0;
`

const FavorRow = styled(LocationRow)`
  align-items: center;
`

const IconFavor = styled.img`
  width: 20px;
  height: 20px;
`

const TourCard = ({ url, title, location, country, bgUrl }) => {
  return (
    <Card to={`/tours/${url.toString()}`}>
      <PreviewImg bg={bgUrl} alt={title} />
      <Title>{title}</Title>
      <LocationRow>
        <LocationText>
          {location}, {country}
        </LocationText>
        <Text>As low as</Text>
      </LocationRow>
      <FavorRow>
        <TextFavor>Add to fav</TextFavor>
        <IconFavor src={icon} />
      </FavorRow>
    </Card>
  )
}

export default TourCard
