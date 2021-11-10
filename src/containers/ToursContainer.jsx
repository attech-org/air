import { useState, useEffect } from "react"
import styled from "styled-components"

import TourCard from "../components/TourCard"
import { Spinner } from "./Posts"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100% - 80px * 2);
  padding: 80px;
`

const SOURCE_URL = "https://my.api.mockaroo.com/tours?key=6b9b6f90"

const ToursContainer = () => {
  const [tours, onToursChange] = useState([])

  useEffect(() => {
    const fetchUrlData = async () => {
      const res = await fetch(SOURCE_URL)
      const data = await res.json()
      onToursChange(data)
    }
    fetchUrlData()
  }, [])

  return (
    <Grid>
      {!tours.length && <Spinner>Loading...</Spinner>}
      {tours.map(({ id, title, location, country, videoUrl, wikiUrl, bgUrl }) => (
        <TourCard
          key={id}
          url={id}
          title={title}
          location={location}
          country={country}
          videoUrl={videoUrl}
          wikiUrl={wikiUrl}
          bgUrl={bgUrl}
        />
      ))}
    </Grid>
  )
}

export default ToursContainer
